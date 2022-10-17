from os import name
from django.urls import path
from api_basics import views


app_name = "api_basics"

urlpatterns = [
    path('bike/', views.bike_list, name="bike_list"),
    path('bike/<int:id>/', views.bike_detail, name="bike_detail"),
]
