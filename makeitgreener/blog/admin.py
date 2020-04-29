from django import forms
from django.contrib import admin

from django.contrib.admin import ModelAdmin
from .models import Post
from martor.widgets import AdminMartorWidget


# Register your models here.


from taggit.forms import TagField
from taggit_labels.widgets import LabelWidget

from blog.models import Post, Meet
from django.utils.safestring import mark_safe
from django.db import models


class PostForm(forms.ModelForm):
    tags = TagField(required=False, widget=LabelWidget)

    class Meta:
        model = Post
        exclude = []


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget},
    }
    
    form = PostForm

    fieldsets = (
        ('Standard info', {
            'fields': ('title', 'author', 'text',
                       ),
        }),
        ('Tags', {
            'fields': ('tags',
                       ),
        })
    )


class MeetForm(forms.ModelForm):
    tags = TagField(required=False, widget=LabelWidget)

    class Meta:
        model = Meet
        exclude = []


@admin.register(Meet)
class MeetAdmin(admin.ModelAdmin):
    change_form_template = 'admin/meet_change_form.html'
    form = MeetForm

    readonly_fields = ('mapp', )

    fieldsets = (
        ('Standard info', {
            'fields': ('lat', 'lng', ('mapp'),
                        ),
        }),
        ('Tags', {
                'fields': ('tags',
                        ),
        }),
        
    )
        

    def mapp(self, obj):
        return mark_safe('<div id="map"></div>')

    # def change_view(self, request, object_id, form_url='', extra_context=None):
    #     extra = extra_context or {}
    #     # extra['filter_form'] = FilterForm()
    #     return super(ProcessAdmin, self).change_view(request, object_id,
    #                                              form_url, extra_context=extra)

