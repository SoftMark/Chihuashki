from django.db import models
from django.db.models.signals import pre_save, post_init


# class DynamicUploadImageField(models.ImageField):
#     def __init__(self, *args, **kwargs):
#         # Increase max length to support longer filenames
#         if "max_length" not in kwargs:
#             kwargs["max_length"] = 255
#         if "upload_to" not in kwargs:
#             kwargs["upload_to"] = "images"
#         self.prime_upload = kwargs.get("prime_upload", False)
#         if "prime_upload" in kwargs:
#             del (kwargs["prime_upload"])
#         super().__init__(*args, **kwargs)
#
#     def contribute_to_class(self, cls, name):
#         super().contribute_to_class(cls, name)
#         if self.prime_upload:
#             post_init.connect(self._get_upload_to, sender=cls)
#         pre_save.connect(self._get_upload_to, sender=cls)
#
#     def _get_upload_to(self, instance=None, *args, **kwargs):
#         if hasattr(instance, "get_upload_to"):
#             self.upload_to = instance.get_upload_to(self.attname)


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
