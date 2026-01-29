from django.urls import path
from .views import talk_to_expert

urlpatterns = [
    path('talk-to-expert/', talk_to_expert),
]
