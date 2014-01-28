import os
from django.core.exceptions import ImproperlyConfigured

marker = object()

def get_env_variable(var_name, default=marker):
    """ Get the environment variable or return exception """
    try:
        return os.environ[var_name]
    except KeyError:
        if default is not marker:
            return default
        error_msg = "Set the %s env variable" % var_name
        raise ImproperlyConfigured(error_msg)
