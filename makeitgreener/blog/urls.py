from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import index, post_list

app_name = 'blog'

urlpatterns = [
    path('', index, name='index'),
    path('posts/', post_list, name='post-list'),
    path('api/', include('blog.api.urls'))

]
