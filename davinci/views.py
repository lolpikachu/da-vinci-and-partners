from django.shortcuts import render

def index(request):
    # return render(request, 'index.html', {})
    return render(request, 'index_hr.html', {})
    # return render(request, 'index_violet_background.html', {})
    # return render(request, 'index_with_number_menu.html', {})
    # return render(request, 'index_spline_design.html', {})

def about(request):
    return render(request, 'star.html', {})


