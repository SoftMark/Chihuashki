from django.db import models
from django.utils.safestring import mark_safe
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

class GalleryImage(models.Model):
    image_name = models.CharField('Название картинки', max_length=50)
    image = models.ImageField(verbose_name='Изображение', upload_to='gallery', default=None)

    def image_img(self):
        if self.image:
            return mark_safe(u'<a class="all-photo" href="{0}" target="_blank"><img src="{0}" width="100"/></a>'.format(
                self.image.url))
        else:
            return '(Нет изображения)'

    image_img.short_description = 'Изображение'
    image_img.allow_tags = True

    def __str__(self):
        return self.image_name

    class Meta:
        verbose_name = 'Изображение для галереи'
        verbose_name_plural = 'Галерея'


# Create your models here.
class Chihuahua(models.Model):
    name = models.CharField('Имя', max_length=50)
    gender = models.CharField(choices=(('suka', "сука"), ('kobel', "кобель")), verbose_name='Пол', max_length=20,
                              default='suka')
    rewards = models.TextField('Награды')

    birth_date = models.DateField('Дата рождения')
    age = models.CharField(choices=(('puppy', "щенок"), ('adult', "взрослый")), verbose_name='Щенок/Взрослый',
                           max_length=20, default='adult')
    sale = models.CharField(choices=(('yes', "да"), ('not', "нет")), verbose_name='Для продажи',
                            max_length=20, default='yes')
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


class Photo(models.Model):
    # image = DynamicUploadImageField(blank=True)
    image = models.ImageField(verbose_name='Фото', upload_to='photos')

    # def get_upload_to(self, field_name):
    #     class_name = self.chihuahua.__class__.__name__.lower()
    #     instance_name = self.chihuahua.name
    #     return "{}/{}".format(class_name, instance_name)

    # If non photo change photo no_photo.jpg
    def get_url(self):
        if not self.image:
            return "/static/LendingApp/images/no_photo.jpg"
        return self.image.url

    @classmethod
    def image_no_photo(cls):
        no_photo_url = "/content/images/no_photo.jpg"
        return mark_safe(u'<a href="{0}" target="_blank"><img src="{0}" width="100"/></a>'.format(no_photo_url))

    def image_img(self):
        if self.image:
            return mark_safe(u'<a class="all-photo" href="{0}" target="_blank"><img src="{0}" width="100"/></a>'.format(
                self.image.url))
        else:
            return self.image_no_photo()

    chihuahua = models.ForeignKey(Chihuahua, on_delete=models.CASCADE, related_name='images')


# Create settings content
# class Content(models.Model):


class AboutUs(models.Model):
    name = models.CharField('Название шаблона', max_length=50, default='Основной')
    top_image = models.ImageField(verbose_name='Верхнее изображение', upload_to='gallery')
    top_paragraph = models.TextField('Верхний параграф', blank=True)
    bottom_image = models.ImageField(verbose_name='Нижнее изображение', upload_to='gallery')
    bottom_paragraph = models.TextField('Нижний параграф', blank=True)

    def image_get_top(self):
        if self.top_image:
            return mark_safe(u'<a class="all-photo" href="{0}" target="_blank"><img src="{0}" width="100"/></a>'.format(
                self.top_image.url))
        else:
            return '(Нет изображения)'

    image_get_top.short_description = 'Верхнее изображение'
    image_get_top.allow_tags = True

    def image_get_bottom(self):
        if self.bottom_image:
            return mark_safe(u'<a class="all-photo" href="{0}" target="_blank"><img src="{0}" width="100"/></a>'.format(
                self.bottom_image.url))
        else:
            return '(Нет изображения)'

    image_get_bottom.short_description = 'Нижнее изображение'
    image_get_bottom.allow_tags = True

    def __str__(self):
        return 'Блок "О нас"'

    class Meta:
        verbose_name = 'Блок "О нас"'
        verbose_name_plural = 'Блок "О нас"'
