from django.forms import ModelForm
from django.contrib import admin
from .models import Chihuahua, Photo, GalleryImage

# admin.site.register(Chihuahua)


class PhotoForm(ModelForm):
    MIN_RESOLUTION = (100, 200)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['image'].help_text = 'Загрузите изображение с минимальным разрешением {}x{}'.format(
            *self.MIN_RESOLUTION)


# Чишки
class ChihGalleryInline(admin.TabularInline):
    fk_name = 'chihuahua'
    model = Photo
    extra = 1  # количество пустых форм
    max_num = 5  # максимальное количество форм
    verbose_name = 'image'


@admin.register(Chihuahua)
class ChihuahuaAdmin(admin.ModelAdmin):
    #form = PhotoForm
    inlines = [ChihGalleryInline, ]

    list_display = ("name", 'image', "age", "teeth")
    readonly_fields = ["get_all_images"]

    def image(self, obj):
        images = list(obj.images.all())
        if images:
            return images[0].image_img()
        else:
            return Photo.image_no_photo()

    image.short_description = 'Фото'
    image.allow_tags = True

    def get_all_images(self, obj):
        images = list(obj.images.all())
        collected = []
        for img in images:
            collected.append(img.image_img())
        return collected




# Галерея
@admin.register(GalleryImage)
class GalleryAdmin(admin.ModelAdmin):
    form = PhotoForm
    list_display = ("image_name", "link", "image_img")
    readonly_fields = ('image_img',)




