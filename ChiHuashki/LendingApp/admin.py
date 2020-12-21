from django.contrib import admin
from django.utils.html import mark_safe
from .models import Chihuahua


# Регистрируем клас с помощью декоратора вместа строки admin.site.register(Chihuahua, ChihuahuaAdmin)
@admin.register(Chihuahua)
class ChihuahuaAdmin(admin.ModelAdmin):
    # Выбераешь какие поля должны выводится
    list_display = ("photo_tag", "name", "birth_date", "id")
    # Нажимая на имя или фото собаки переходишь в карточку
    list_display_links = ("name", "photo_tag")
    # Добавляет поисковик по именам
    search_fields = ("name", )
    # Включить кнопку сохранения сверху
    save_on_top = True
    # Настройка полей
    fieldsets = (
        (None, {
            "fields": (("name", "photo"),)
        }),
        (None, {
            "fields": ("rewards",)
        }),
        (None, {
            "fields": ("birth_date",)
        }),
        (None, {
            "fields": ("teeth",)
        }),
        (None, {
            "fields": ("weight",)
        }),
        (None, {
            "fields": ("color",)
        }),
        (None, {
            "fields": ("type_of_wool",)
        }),
        (None, {
            "fields": (("father", "mother"),)
        }),
        (None, {
            "fields": ("pedigree",)
        }),
        (None, {
            "fields": ("pedigree_link",)
        }),
        (None, {
            "fields": ("media_links",)
        }),
    )
