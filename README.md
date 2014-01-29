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

5. Start django

    $ bin/django runserver

And view the magic happen using a browser at http://localhost:8000. Bypass
the login screen (for now) using http://localhost:8000/direct

