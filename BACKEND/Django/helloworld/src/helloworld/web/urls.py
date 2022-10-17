from unicodedata import name
from django.urls import path
from web.views import about, index

app_name = "web"

urlpatterns = [
    path("", index, name="index"),
    path("about-us/", about, name="about")
]