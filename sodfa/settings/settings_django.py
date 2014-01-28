from .util import get_env_variable

SITE_ID = 1

# Make this unique, and don't share it with anybody. Set to none so django
# will complain

SECRET_KEY = get_env_variable('SECRET_KEY', None)
if SECRET_KEY is None:
    from logging import warning
    warning("$SECRET_KEY not set, using fixed SECRET_KEY in stead. DO NOT USE THIS IN PRODUCTION SITES!")
    SECRET_KEY="not-random-do-not-use-this-key-in-production"


# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
#     'django.template.loaders.eggs.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
)

ROOT_URLCONF = 'urls'

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'django.contrib.humanize',

    'app',
)

