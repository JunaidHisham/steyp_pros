from django.shortcuts import render, get_object_or_404
from django.http.response import HttpResponse
from main.functions import paginate_instances

from posts.models import Author, Category, Post

def index(request):
    posts = Post.objects.filter(is_deleted=False, is_draft=False)

    categories = Category.objects.all()
    authors = Author.objects.all()

    search_authors = request.GET.getlist("author")
    if search_authors:
        posts = posts.filter(author__in=search_authors)

    search_categories = request.GET.getlist("category")
    if search_categories:
        posts = posts.filter(categories__in=search_categories).distinct()

    q = request.GET.get('q') 
    if q:
        posts = posts.filter(title__istartswith = q)

    sort = request.GET.get('sort')
    if sort == 'title-asc':
        posts = posts.order_by("title")
    elif sort == 'title-desc':
        posts = posts.order_by("-title")
    elif sort == 'date-asc':
        posts = posts.order_by("published_date")
    elif sort == 'date-desc':
        posts = posts.order_by("-published_date")
    
    instances = paginate_instances(request=request,instances=posts )

    context={
        "title":"Home Page",
        "instances":instances,
        "categories":categories,
        "authors":authors,
    }
    return render(request, "web/index.html", context)


def post(request, id):
    instance = get_object_or_404(Post.objects.filter(id=id))
    context = {
        "instance": instance
    }
    return render(request, "posts/post.html", context )