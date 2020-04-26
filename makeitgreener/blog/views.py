from django.shortcuts import render
from django.http.response import JsonResponse
import ast
# Create your views here.
from django.views.generic import DetailView

from blog.api.filters import PostFilter
from blog.models import Meet, Post

def index(request):
    if request.is_ajax():
        print('AJAX')
        coords = ast.literal_eval(request.POST.get('coords', None))
        return JsonResponse({'data': 'OK'})

    return render(request, 'blog/index.html')

def post_list(request):
    f = PostFilter(request.GET, queryset=Post.objects.all())
    return render(request, 'blog/post_list.html', {'filter': f})


class PostDetailView(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'


def map(request, pk):
    meet = Meet.objects.get(id=pk)
    if request.is_ajax():
        coords = ast.literal_eval(request.POST.get('coords', None))
        print(coords[0])
        meet.lat = coords[0]
        meet.lng = coords[1]
        meet.save()
        return JsonResponse({})

    return render(request, 'blog/map_test.html', {'meet': meet})
