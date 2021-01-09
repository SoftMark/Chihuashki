from django.contrib import admin
from .models import Chihuahua, Gallery

# admin.site.register(Chihuahua)


class GalleryInline(admin.TabularInline):
    fk_name = 'chihuahua'
    model = Gallery


@admin.register(Chihuahua)
class ChihuahuaAdmin(admin.ModelAdmin):
    inlines = [GalleryInline, ]
