from django.db import models
from django.utils.html import mark_safe
from django.db.models.signals import pre_save, post_init


class DynamicUploadImageField(models.ImageField):
    def __init__(self, *args, **kwargs):
        # Increase max length to support longer filenames
        if "max_length" not in kwargs:
            kwargs["max_length"] = 255
        if "upload_to" not in kwargs:
            kwargs["upload_to"] = "images"
        self.prime_upload = kwargs.get("prime_upload", False)
        if "prime_upload" in kwargs:
            del (kwargs["prime_upload"])
        super().__init__(*args, **kwargs)

    def contribute_to_class(self, cls, name):
        super().contribute_to_class(cls, name)
        if self.prime_upload:
            post_init.connect(self._get_upload_to, sender=cls)
        pre_save.connect(self._get_upload_to, sender=cls)

    def _get_upload_to(self, instance=None, *args, **kwargs):
        if hasattr(instance, "get_upload_to"):
            self.upload_to = instance.get_upload_to(self.attname)


# Create your models here.
class Chihuahua(models.Model):
    photo = DynamicUploadImageField(blank=True, null=True)
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

    media_links = models.TextField('Ссылки на медиа')

    def __str__(self):
        return self.name

    # If non photo change photo no_photo.jpg
    def get_photo(self):
        if not self.photo:
            return "/content/images/no_photo.jpg"
        return self.photo.url

    # Здесь я возвращаю аватарку БЕЗ ФОТО, если аватар не выбран
    def get_upload_to(self, field_name):
        class_name = self.__class__.__name__.lower()
        instance_name = self.name
        return "{}/{}".format(class_name, instance_name)

    # метод, для создания фейкового поля таблицы в режиме read only
    # Получаем тег img с фотографией объекта
    def photo_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % self.get_photo())

    # Пишем как будет называтся наш столбец
    photo_tag.short_description = 'Фотография'

    class Meta:
        verbose_name = 'Чихуахуа'
        verbose_name_plural = 'Чишки'

# Create settings content
# class Content(models.Model):
