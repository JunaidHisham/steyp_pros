from django import forms
from django.forms import ModelForm
from django.forms.widgets import EmailInput, TextInput, Select
from web.models import COMPANY_SIZE, COUNTRY, INDUSRTY, JOB_ROLE, Contact


EMPTY_COMPANY_SIZE = (("", "Company Size"),) + COMPANY_SIZE
EPMTY_INDUSRTY = (("", "Industry"),) + INDUSRTY
EMPTY_JOB_ROLE = (("", "Job role"),) + JOB_ROLE
EMPTY_COUNTRY = (("", "Country"),) + COUNTRY


class ContactForm(ModelForm):
    company_size = forms.ChoiceField(choices=EMPTY_COMPANY_SIZE)
    industry = forms.ChoiceField(choices=EPMTY_INDUSRTY)
    job_role = forms.ChoiceField(choices=EMPTY_JOB_ROLE)
    country = forms.ChoiceField(choices=EMPTY_COUNTRY)

    class Meta:
        model = Contact
        fields = "__all__"
        widgets = {
            "email": EmailInput(attrs={"placeholder": "Work Email"}),
            "first_name": TextInput(attrs={"placeholder": "First Name"}),
            "last_name": TextInput(attrs={"placeholder": "Last Name"}),
            "company": TextInput(attrs={"placeholder": "Company Name"}),
            "company_size": Select(attrs={"class": "hi"}),
        }
