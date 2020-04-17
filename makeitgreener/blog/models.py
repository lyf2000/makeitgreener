from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.


class Post(models.Model):
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='posts')

    title = models.CharField(max_length=125)
