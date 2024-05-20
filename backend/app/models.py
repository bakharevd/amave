from django.db import models

class Message(models.Model):
    text = models.CharField(max_length=255)

    class Meta:
        app_label = 'app'

    def __str__(self):
        return self.text
