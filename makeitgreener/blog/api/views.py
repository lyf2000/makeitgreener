from rest_framework import viewsets
from django_filters import rest_framework as filters

from blog.api.filters import PostFilter
from blog.api.serializers import PostSerializer
from blog.models import Post


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    # filterset_fields = ('author', 'title')
    filterset_class = PostFilter
