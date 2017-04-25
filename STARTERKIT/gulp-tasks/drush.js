/**
 * @file
 * Task: Watch.
 */

/* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';

  var exec = require('child_process').exec;

  gulp.task('drush:cache-clear', function (cb) {
    if (options.drush.alias) {
      return exec('drush ' + options.drush.alias + ' cache-clear css-js', function (err, stdout, stderr) {
        cb(err);
      });
    }
    plugins.util.log('Drush alias not configured. Skipping cache-clear.');
    cb();
  });

  gulp.task('drush:cache-rebuild', function (cb) {
    if (options.drush.alias) {
      return exec('drush ' + options.drush.alias + ' cache-rebuild', function (err, stdout, stderr) {
        cb(err);
      });
    }
    plugins.util.log('Drush alias not configured. Skipping cache-rebuild.');
    cb();
  });

};
