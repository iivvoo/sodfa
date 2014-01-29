"SODFA" (sofa + odf)
====================


SODFA is a proof-of-concept offline couchdb/pouchdb application for editing
ODF documents. It's an experiment in creating an application that can truly
work offline and sync with an online database when the application goes online
again.

Install instructions
====================

1. Create a virtualenv

    $ virtualenv . --system-site-packages

2. Install buildout

    $ bin/pip install zc.buildout

3. Run buildout

    $ bin/buildout -c development.cfg

4. Initalize database

    $ bin/django syncdb --migrate

5. Setup couchdb as described on 
   http://pouchdb.com/getting-started.html, "Installing CouchDB".
   The included "setup_couch.sh" script may be of help. Set the admin 
   user/password to admin/admin

   If you run couchdb on a different host/port or require different
   credentials, update them in views.py

6. Start django

    $ bin/django runserver

And view the magic happen using a browser at http://localhost:8000.

You can create new accounts (and couchdb databases) by simply entering
an available username and password.

Sodfa will synchronize the documents between multiple sessions (on the same
account) using couchdb/pouchdb. An open document will nog be updated instantly,
that's beyond the scope of this PoC. Documents can be edited offline.

