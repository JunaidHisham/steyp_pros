from django.urls import path
from users import views


app_name ="users"

urlpatterns = [
    path('', views.createuser, name="create_user"),
    path('list-users', views.listusers, name="list_user"),

]
