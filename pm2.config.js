module.exports = {
  apps: [{
    name: 'my-django-app',
    script: 'start.sh',
    watch: true,
    ignore_watch: ['node_modules', 'media', 'staticfiles'],
    watch_options: {
      followSymlinks: false
    },
    env: {
      DJANGO_SETTINGS_MODULE: 'myproject.settings',
      PYTHONUNBUFFERED: '1',
      PORT: '3000'
    }
  }]
};
