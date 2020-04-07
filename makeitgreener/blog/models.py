from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=225)
    text = models.CharField(max_length=450)

    def __str__(self):
        return f'Post({self.pk}) {self.title}'
