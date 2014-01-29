from django.conf.urls import patterns

from views import main, direct, logout

urlpatterns = patterns('',
    (r'^$', main),
    (r'^direct$', direct),
    (r'^logout$', logout),
)
