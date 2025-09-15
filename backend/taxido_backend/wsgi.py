# backend/taxido_backend/wsgi.py

import os
import sys # Add this line
from django.core.wsgi import get_wsgi_application

# This is the crucial line you need to add.
# It tells Python where your project's main folder is.
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'taxido_backend.settings')

application = get_wsgi_application()