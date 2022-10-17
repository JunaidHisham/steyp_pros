from django.urls import path
from api.v1.places import views


app_name = "places"


urlpatterns = [
    path('', views.list_places ),
    path('view/<int:pk>/', views.list_place ),
    path('protected/view/<int:pk>/', views.list_protected_place ),
]
