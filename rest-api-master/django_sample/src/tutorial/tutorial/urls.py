from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('web.urls', namespace="home")),
    path('users/', include("users.urls", namespace="users")),
    path('api/', include("api.urls", namespace="api")),

]
