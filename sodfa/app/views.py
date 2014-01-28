from django.shortcuts import render
import json

def main(request):
    ctx = {}

    if request.method == "POST":
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()

        if username in ('user',) and password == "geheim":
            appcfg = dict(couchdb="http://localhost:5984/" + username)

            ctx['appcfg'] = json.dumps(appcfg)
            return render(request, 'app/main.html', ctx)
        else:
            ctx['error'] = "Invalid username or password"

    return render(request, 'app/login.html', ctx)

def direct(request):
    ctx = {}
    appcfg = dict(couchdb="http://localhost:5984/direct")

    ctx['appcfg'] = json.dumps(appcfg)
    return render(request, 'app/main.html', ctx)
