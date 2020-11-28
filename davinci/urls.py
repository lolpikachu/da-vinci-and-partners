from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import index, about, tunnel, night, en, web_development, pacman, whitepage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('about/', about),
    path('tunnel/', tunnel),
    path('night/', night),
    path('en/', en),
    path('web-development/', web_development),
    path('pacman/', pacman),
    path('whitepage/', whitepage),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
