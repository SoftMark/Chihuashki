from django.db import models

# Create your models here.
class Chihuahua(models.Model):
    name = models.CharField('Имя', max_length=50)
    rewards = models.TextField('Награды')

    birth_date = models.DateField('Дата рождения')
    teeth = models.CharField('Зубы', max_length=7)
    weight = models.IntegerField('Вес')
    color = models.TextField('Окрас')
    type_of_wool = models.CharField('Тип шерсти', max_length=25)
    father = models.CharField('Папа', max_length=50)
    mother = models.CharField('Мама', max_length=50)
    pedigree = models.CharField('Родословная', max_length=50)
    pedigree_link = models.TextField('Ссылка на родословную')

    media_links = models.TextField('Ссылки на медиа')



    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Чихуахуа'
        verbose_name_plural = 'Чишки'