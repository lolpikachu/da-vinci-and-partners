from django.shortcuts import render

def index(request):
    # return render(request, 'index_lol.html', {})
    return render(request, 'index.html', {})
    # return render(request, 'index_violet_background.html', {})
    # return render(request, 'index_with_number_menu.html', {})
    # return render(request, 'index_spline_design.html', {})

def about(request):
    return render(request, 'star.html', {})

def tunnel(request):
    return render(request, 'tunnel.html', {})

def night(request):
    return render(request, 'night_mode.html', {})

def en(request):
    return render(request, 'index_en.html', {})


