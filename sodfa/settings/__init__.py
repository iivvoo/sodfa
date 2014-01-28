## Importing everything here gives us the same "project.settings" module
## as a settings.py file would. But it makes it harder to have deployment
## specific settings files (e.g. production.py, development.py), though this
## can be achieved using local_settings.py

from settings.base import *
