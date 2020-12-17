from django.db import models


# Create your models here.
class Chihuahua(models.Model):
    name = models.CharField('Имя', max_length=20)
    age = models.IntegerField('Возраст')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Чихуахуа'
        verbose_name_plural = 'Чишки'