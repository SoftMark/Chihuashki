from django.forms import ModelForm
from django.contrib import admin
from .models import Chihuahua, Photo, GalleryImage, SiteConfigurations
from django.utils.safestring import mark_safe


# admin.site.register(Chihuahua)


# Чишки
class ChihPhotoForm(ModelForm):
    MIN_RESOLUTION = (100, 200)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # self.fields['image'].help_text = 'Загрузите изображение с минимальным разрешением {}x{}'.format(*self.MIN_RESOLUTION)
        # self.fields['image'].label = 'Загрузите изображение'
        print(self.fields)


class ChihGalleryInline(admin.TabularInline):
    form = ChihPhotoForm
    fk_name = 'chihuahua'
    model = Photo
    extra = 1  # количество пустых форм
    max_num = 5  # максимальное количество форм
    verbose_name = 'image'


@admin.register(Chihuahua)
class ChihuahuaAdmin(admin.ModelAdmin):
    save_on_top = True

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
        return mark_safe("".join(collected))

    get_all_images.short_description = 'Фотографии'
    get_all_images.allow_tags = True

    fieldsets = (
        (None, {
            "fields": (
                ("name", "gender"),
                "rewards",
                ("birth_date", "age"),
                "sale",
                "teeth",
                "weight",
                ("type_of_wool", "color"),
                ("father", "mother"),
                "pedigree",
                "pedigree_link",
                "video",
                "get_all_images"
            ),
        }),
    )

    list_filter = ('gender', 'age', 'sale', 'name')

    def get_img_objs(self, obj):
        pass


# Галерея
class GalleryPhotoForm(ModelForm):
    MIN_RESOLUTION = (100, 200)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['image'].help_text = 'Загрузите изображение с минимальным разрешением {}x{}'.format(
            *self.MIN_RESOLUTION)


@admin.register(GalleryImage)
class GalleryAdmin(admin.ModelAdmin):
    save_on_top = True
    form = GalleryPhotoForm
    list_display = ("image_name", "image_img", "small_image")
    readonly_fields = ('image_img',)


# Блок Конфигураций сайта
class AboutUsPhotoForm(ModelForm):
    MIN_RESOLUTION = (100, 200)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['top_image'].help_text = 'Загрузите изображение с минимальным разрешением {}x{}'.format(
            *self.MIN_RESOLUTION)
        self.fields['bottom_image'].help_text = 'Загрузите изображение с минимальным разрешением {}x{}'.format(
            *self.MIN_RESOLUTION)


@admin.register(SiteConfigurations)
class SiteConfigurationsAdmin(admin.ModelAdmin):
    # form = AboutUsPhotoForm
    save_on_top = True
    # list_display = ("name", "image_get_top", "top_paragraph", "image_get_bottom", "bottom_paragraph")

    fieldsets = (
        (None, {
            'fields': ('name',)
        }),
        ('Шапка', {
            'fields': ("favicon", 'title', 'phone', ('inst', 'facebook'), ('header_background', "header_m_background"))
        }),
        ('О нас', {
            'fields': ("a_us_t_image", "a_us_t_paragraph", "a_us_b_image", "a_us_b_paragraph")
        }),
    )

    readonly_fields = ('get_a_us_t_image', 'get_a_us_b_image',)

    def has_add_permission(self, request):
        return False
