from django.urls import path

from web.views import contact, index, product, subscribe


app_name = "web"

urlpatterns = [
    path("", index, name="home"),
    path("subscribe/", subscribe, name="subscribe"),
    path("contact/", contact, name="contact"),
    path("product/<int:pk>/", product, name="product")
]
