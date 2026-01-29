from rest_framework import serializers
from .models import TalkToExpert

class TalkToExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = TalkToExpert
        fields = '__all__'
