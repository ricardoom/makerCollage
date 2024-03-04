/**
 * Require Browsersync
 */
let browserSync = require('browser-sync');
/**
 * Run Browsersync with server config
 */
browserSync({
  server: 'app',
  port: 56789,
  files: [
    'app/*.html',
    'app/*.css',
    'app/*.js',
    'app/modules/*.js',
    'app/assets/*.*',
  ],
  cors: true,
});
