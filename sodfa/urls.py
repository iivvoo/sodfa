from django.contrib import admin
from django.conf.urls import patterns, include

from django.conf import settings

import app.urls

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

admin.autodiscover()

urlpatterns = staticfiles_urlpatterns()

## or import static_urls; urlpatterns = static_urls.urlpatterns

urlpatterns += patterns('',
    (r'^admin/', include(admin.site.urls)),
    (r'', include(app.urls)),
)

if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^media/(?P<path>.*)$', 'django.views.static.serve',
         {'document_root': settings.MEDIA_ROOT}),
    )

