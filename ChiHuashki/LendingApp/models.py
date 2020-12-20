from django.db import models


# Create your models here.
class Chihuahua(models.Model):
    photo = models.ImageField("Фото", upload_to="images/dog/", blank=True, null=True)
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
            return "/static/LendingApp/images/no_photo.jpg"
        return self.photo.url

    class Meta:
        verbose_name = 'Чихуахуа'
        verbose_name_plural = 'Чишки'

# Create settings content
# class Content(models.Model):
