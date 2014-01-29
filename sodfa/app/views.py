from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout as dj_logout

import json
import couchdb

couchbase = "localhost:5984"
COUCH_BASE = couchbase
ADMIN_USER = "admin"
ADMIN_PASS = "admin"

def setup_db(username):
    docdata = open("myfile.odt", "r").read()

    server = couchdb.Server("http://{adminuser}:{adminpass}@{couchbase}".format(
                            adminuser=ADMIN_USER, adminpass=ADMIN_PASS,
                            couchbase=COUCH_BASE))
    try:
        db = server.create(username)
        for i in range(10):
            doc_id = "sample{0}.odt".format(i)
            doc_id, doc_rev = db.save({"_id":doc_id, "type":"odf",
                     "title":"Sample document {0}".format(i)})
            doc = db[doc_id]
            db.put_attachment(doc, docdata, filename="sample{0}.odt".format(i))
    except couchdb.PreconditionFailed:
        pass

def main(request):
    ctx = {"appcfg": json.dumps({})}

    if request.method == "POST":
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()

        if not username.startswith("_") and \
           len(username) > 3 and len(password) > 3:
            user, created = User.objects.get_or_create(username=username)
            if not created:
                user = authenticate(username=username, password=password)
                if not user:
                    ctx['error'] = "Invalid password"
                    return render(request, 'app/login.html', ctx)
            else:
                user.set_password(password)
                user.save()
                ctx['message'] = "User created"
                ## required before login()
                user = authenticate(username=username, password=password)
                setup_db(username)

            login(request, user)
            appcfg = dict(couchdb="http://{couchbase}/{username}"
                                   .format(couchbase=couchbase,
                                           username=username),
                          username=username)
            ctx['appcfg'] = json.dumps(appcfg)
            return render(request, 'app/main.html', ctx)
        else:
            ctx['error'] = "Invalid username or password"

    elif request.user.is_authenticated():
        username = request.user.username
        appcfg = dict(couchdb="http://{couchbase}/{username}"
                               .format(couchbase=couchbase,
                                       username=username),
                      username=username)
        ctx['appcfg'] = json.dumps(appcfg)
        return render(request, 'app/main.html', ctx)

    return render(request, 'app/login.html', ctx)

def direct(request):
    ctx = {}
    appcfg = dict(couchdb="http://localhost:5984/direct",
                  username="direct")

    ctx['appcfg'] = json.dumps(appcfg)
    return render(request, 'app/main.html', ctx)

def logout(request):
    dj_logout(request)
    return render(request, 'app/login.html',
                  dict(appcfg={},
                       message="You have been logged out"))

