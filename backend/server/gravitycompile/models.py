from django.db import models

class TalkToExpert(models.Model):
    CATEGORY_CHOICES = [
        ('live_streaming', 'Live Streaming App'),
        ('consultation', 'Consultation'),
        ('custom_dev', 'Custom Development'),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    message = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
