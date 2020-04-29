from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import index, post_list, PostDetailView, map

app_name = 'blog'

urlpatterns = [
    path('', index, name='index'),
    path('map/<int:pk>/', map, name='map'),
    path('posts/', post_list, name='post-list'),
    path('posts/<int:pk>', PostDetailView.as_view(), name='post-detail'),
    path('api/', include('blog.api.urls'))

]
