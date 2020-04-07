from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Post

# Register your models here.


@admin.register(Post)
class PostModelAdmin(ModelAdmin):
    pass