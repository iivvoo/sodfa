from .util import get_env_variable
import dj_database_url

DATABASE_URL = get_env_variable('DATABASE_URL', None)

if not DATABASE_URL:
    DEFAULT_DB = {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': 'wheel.db'
    }
else:
    DEFAULT_DB = dj_database_url.parse(DATABASE_URL)

DATABASES = {
    'default': DEFAULT_DB
}
