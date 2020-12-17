from .models import Chihuahua
from django.forms import ModelForm, TextInput, Textarea


class ChihuahuaForm(ModelForm):
    class Meta:
        model = Chihuahua
        fields = ["name", "age"]
        widgets = {
            "name": TextInput(attrs={
                "class": 'form-control',
                "placeholder": "Введите имя"
            }),
            "age": TextInput(attrs={
                "class": 'form-control',
                "placeholder": "Введите возраст"
            })
        }
