#!/bin/bash
cd Heron
pip3 install -r Heron/requirements.txt
python3 manage.py migrate
python3 manage.py collectstatic --noinput
gunicorn greywing.wsgi:application --workers 2 --threads 4 --preload --timeout 0 --bind 0.0.0.0:8080
