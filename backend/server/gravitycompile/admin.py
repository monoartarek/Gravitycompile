from django.contrib import admin
from .models import TalkToExpert

@admin.register(TalkToExpert)
class TalkToExpertAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'category',
        'created_at',
    )
