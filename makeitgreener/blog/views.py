from django.shortcuts import render
from django.http.response import JsonResponse
import ast
# Create your views here.


def index(request):
    if request.is_ajax():
        print('AJAX')
        coords = ast.literal_eval(request.POST.get('coords', None))
        return JsonResponse({'data': 'OK'})
    return render(request, 'blog/index.html')