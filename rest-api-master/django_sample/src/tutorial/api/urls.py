from django.urls import path, include

app_name = "api"

urlpatterns = [
    path('auth/',include("api.v1.accounts.urls", namespace="auth") ),

]
