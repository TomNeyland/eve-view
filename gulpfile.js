var gulp = require('gulp');
var browserify = require('gulp-browserify');
var to5Browserify = require("6to5-browserify");

// Basic usage
gulp.task('6to5ify', function() {
    // Single entry point to browserify
    gulp.src('src/eve-view/index.es6')
        .pipe(browserify({
          debug : !gulp.env.development,
          transform: [to5Browserify],
          extensions: ['es6']
        }))

        .pipe(gulp.dest('./build/eve-view/'));
});