from django.urls import path
from web.views import index, subscribe


app_name = "web"

urlpatterns = [
    path('', index, name="homepage"),
    path('subscribe/', subscribe, name="subscribe")
]
