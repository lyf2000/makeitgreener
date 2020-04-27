from django.contrib.auth import get_user_model
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
from taggit.managers import TaggableManager


class Post(models.Model):
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='posts')

    title = models.CharField(max_length=125)
    tags = TaggableManager()

    # TODO preview text, main image

    text = RichTextUploadingField()

    def __str__(self):
        return f'Post: {self.title}'


class Meet(models.Model):
    lat = models.FloatField()
    lng = models.FloatField()

    tags = TaggableManager()

    def __str__(self):
        return f'Meet({self.pk}): ({self.lat}; {self.lng})'
