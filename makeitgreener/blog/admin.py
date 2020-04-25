from django import forms
from django.contrib import admin

# Register your models here.



# from django.contrib.gis.db import models
# from mapwidgets.widgets import GooglePointFieldWidget


# class CityAdmin(admin.ModelAdmin):
#     formfield_overrides = {
#         models.PointField: {"widget": GooglePointFieldWidget}
#     }

from taggit.forms import TagField
from taggit_labels.widgets import LabelWidget

from blog.models import Post, Meet


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

@admin.register(Meet)
class MeetAdmin(admin.ModelAdmin):
    pass