from django_filters import rest_framework as filters

from blog.models import Post
from taggit.forms import TagField
from taggit_labels.widgets import LabelWidget

class PostFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr='icontains')

    # tags = TagField(required=False, widget=LabelWidget)
    class Meta:
        model = Post
        fields = ['author']