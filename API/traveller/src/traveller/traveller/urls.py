from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/places/', include("api.v1.places.urls", namespace="places")),
    path('api/v1/auth/', include("api.v1.auth.urls", namespace="auth")),
    path('api/v1/profile/', include("api.v1.accounts.urls", namespace="accounts")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
