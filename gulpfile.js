var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var to5 = require('gulp-6to5');
var watch = require('gulp-watch');

// TODO split up tasks better

gulp.task('6to5', function() {
    return gulp.src('src/**/*.js')
        .pipe(to5())
        .pipe(gulp.dest('.es5/'));
});

gulp.task('watch:6to5', ['6to5'], function() {
    return watch('src/**/*.js', function(files) {
        return files.pipe(to5())
            .pipe(gulp.dest('.es5/'));
    });

});

gulp.task('watch:build', ['6to5'], function() {

    var bundler = watchify(browserify({
        basedir: '.es5/',
        debug: true,
        // standalone: 'eve-view',
        entries: './eve-view/index.js'
    }));

    bundler.on('update', rebundle);

    function rebundle() {
        return bundler
            .bundle()
            .pipe(source('index.js'))
            .pipe(gulp.dest('./build/eve-view/'));
    }

    return rebundle();
});

gulp.task('watch:all', ['watch:6to5', 'watch:build']);