from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

from .models import TalkToExpert
from .serializers import TalkToExpertSerializer


class TalkToExpertCreateView(APIView):
    def post(self, request):
        serializer = TalkToExpertSerializer(data=request.data)

        if serializer.is_valid():
            expert = serializer.save()

            subject = "Thanks for contacting us!"
            message = f"""
Hi {expert.first_name},

Thank you for contacting us.
We have received your request regarding "{expert.category}".

Our expert team will contact you shortly.

Best Regards,
Gravity Team
"""

            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [expert.email],
                fail_silently=True,
            )

            return Response(
                {"message": "Form submitted & email sent"},
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
