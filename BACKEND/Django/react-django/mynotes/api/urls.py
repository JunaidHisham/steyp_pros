from django.urls import path
from api.views import getRoutes

app_name = "api"

urlpatterns = [
    path("", getRoutes, name="routes" )
]
