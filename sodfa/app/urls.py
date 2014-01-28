from django.conf.urls import patterns

from views import main, direct

urlpatterns = patterns('',
    (r'^$', main),
    (r'^direct$', direct),
)
