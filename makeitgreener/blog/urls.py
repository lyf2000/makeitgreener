from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import index

app_name = 'blog'

urlpatterns = [
    path('', index, name='index'),
    path('api/', include('blog.api.urls'))
]
