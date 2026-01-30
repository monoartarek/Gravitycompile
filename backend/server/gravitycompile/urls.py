from django.urls import path
from .views import TalkToExpertCreateView

urlpatterns = [
    path("talk-to-expert/", TalkToExpertCreateView.as_view()),
]
