Package.describe({
  name: 'ksrv:select2-ru',
  version: '0.0.1',
  summary: 'Language package for jQuery plugin Select2',
  git: 'git@github.com:ksrv/select2-ru.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');

  api.addFiles('select2/dist/js/i18n/ru.js', 'client', { bare: true });
});
