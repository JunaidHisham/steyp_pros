from django.urls import path
from api.v1.accounts import views


app_name = "accounts"

urlpatterns = [
    path('', views.view_user_profile),
]
