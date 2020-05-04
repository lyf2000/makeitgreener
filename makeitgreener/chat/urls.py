from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import chat, page

app_name = 'chat'

urlpatterns = [
    path('', chat, name='char'),
    path('user/', page, name='char'),


]
