from django.http import HttpResponse
from django.template import loader
from .models import Students
from .forms import StudentForm

def index(request):
    students = Students.objects.all()
    template = loader.get_template('index.html')
    context = {
        'students': students,
    }
    return HttpResponse(template.render(context, request))


def submit(request):
    student_form = StudentForm()
    if request.method == 'POST':
        student_form = StudentForm(request.POST)
        if student_form.is_valid():
            student_form.save()
    else:
        student_form = StudentForm()
        
    template = loader.get_template('form.html')
    context = {
        "student_form" : student_form
    }
    return HttpResponse(template.render(context, request))


def home(request):
    template = loader.get_template('home.html')
    context = {}
    return HttpResponse(template.render(context, request))