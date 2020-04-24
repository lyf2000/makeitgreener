from django.urls import path
from rest_framework import routers

from blog.api.views import PostViewSet

app_name = 'api'


router = routers.DefaultRouter()
router.register('posts', PostViewSet, basename='posts-api')

urlpatterns = [
    # path('users/<int:pk>', UserRetrieveView.as_view(), name='user'),
] + router.urls
