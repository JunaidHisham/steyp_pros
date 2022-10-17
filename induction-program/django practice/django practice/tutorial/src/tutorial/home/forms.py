from django import forms
from django.forms import ModelForm
from .models import Students

class StudentForm(ModelForm):


    class Meta:
        model = Students
        fields = "__all__"
        widgets = {
            "name": forms.TextInput(attrs={"placeholder":"Your name"}),
            "father_name":forms.TextInput(attrs={"placeholder":"father's name"}),
            "mother_name":forms.TextInput(attrs={"placeholder":"mother's name"}),
            "phone_number":forms.TextInput(attrs={"placeholder":"mobile"}),
        }
