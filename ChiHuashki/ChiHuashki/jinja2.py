from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import reverse
from jinja2 import Environment


def environment(**options):
    env = Environment(**options)
    env.globals.update({
        "static": staticfiles_storage.url,
        "url": reverse,
        "dir": dir,
        "character": {
            "На продажу": "sale",
            "В резерве": "reserve",
            "Зубки": "teeth",
            "Окрас": "color",
            "Дата рождения": "birth_date",
            "Папа": "father",
            "Мама": "mother",
            "Родословная": "pedigree",
        },
    })
    return env
