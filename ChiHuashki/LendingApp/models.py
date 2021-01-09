from django.db import models
from dynamic_upload_image_field.fields import DynamicUploadImageField


# Create your models here.
class Chihuahua(models.Model):
    name = models.CharField('Имя', max_length=50)
    rewards = models.TextField('Награды')

    birth_date = models.DateField('Дата рождения')
    teeth = models.CharField('Зубы', max_length=7)
    weight = models.FloatField('Вес')
    color = models.TextField('Окрас')
    type_of_wool = models.CharField('Тип шерсти', max_length=25)
    father = models.CharField('Папа', max_length=50)
    mother = models.CharField('Мама', max_length=50)
    pedigree = models.CharField('Родословная', max_length=50)
    pedigree_link = models.TextField('Ссылка на родословную')
    video = models.FileField(upload_to='videos', null=True, verbose_name='Видео', blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Чихуахуа'
        verbose_name_plural = 'Чишки'


class Gallery(models.Model):
    # image = DynamicUploadImageField(blank=True)
    image = models.ImageField(upload_to='photos')
    chihuahua = models.ForeignKey(Chihuahua, on_delete=models.CASCADE, related_name='images')

    # def get_upload_to(self, field_name):
    #     class_name = self.chihuahua.__class__.__name__.lower()
    #     instance_name = self.chihuahua.name
    #     return "{}/{}".format(class_name, instance_name)

    # If non photo change photo no_photo.jpg
    def get_photo(self):
        if not self.image:
            return "/static/LendingApp/images/no_photo.jpg"
        return self.image.url



# Create settings content
# class Content(models.Model):
