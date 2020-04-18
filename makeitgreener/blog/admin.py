from django import forms
from django.contrib import admin

# Register your models here.
from taggit.forms import TagField
from taggit_labels.widgets import LabelWidget

from blog.models import Post


class PostForm(forms.ModelForm):
    tags = TagField(required=False, widget=LabelWidget)

    class Meta:
        model = Post
        exclude = []


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    form = PostForm

    fieldsets = (
        ('Standard info', {
            'fields': ('title', 'author'
                       ),
        }),
        ('Tags', {
            'fields': ('tags',
                       ),
        })
    )

