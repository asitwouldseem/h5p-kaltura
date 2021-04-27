const pkg = require('./package.json'),
      gulp = require('gulp');

const $ = require('gulp-load-plugins')({
      pattern: '*',
      scope: ['devDependencies']
});

/// SCSS ///
gulp.task('build', function() {
    return gulp.src('./src/**/*.scss')
      .pipe($.sass().on("error", $.sass.logError))
      .pipe($.autoprefixer())
      .pipe($.cssnano())
      .pipe(gulp.dest('./public/dist'))
});
