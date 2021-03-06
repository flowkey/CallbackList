Package.describe({
  name: 'flowkey:callback-list',
  version: '1.1.1',
  // Brief, one-line summary of the package.
  summary: 'Small Helper to create Callback Lists and operate on them',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/flowkey/CallbackList.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('callback-list.js');
  api.export('CallbackList');
});