from django.forms import ModelForm
from django.contrib import admin
from .models import Chihuahua, Photo

# admin.site.register(Chihuahua)


class PhotoForm(ModelForm):
    MIN_RESOLUTION = (100, 200)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['image'].help_text = 'Загрузите изображение с минимальным разрешением {}x{}'.format(
            *self.MIN_RESOLUTION)


class GalleryInline(admin.TabularInline):
    fk_name = 'chihuahua'
    model = Photo
    form = PhotoForm
    extra = 1  # количество пустых форм
    max_num = 5  # максимальное количество форм
    verbose_name = 'image'



@admin.register(Chihuahua)
class ChihuahuaAdmin(admin.ModelAdmin):
    inlines = [GalleryInline, ]
    list_display = ("name", "age", "teeth")
