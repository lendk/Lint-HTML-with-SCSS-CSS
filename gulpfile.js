/*!
 * gulp
 */
// Load plugins
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();

//Main Browsersync task
gulp.task('browser-sync', function() {
    //Browser sync
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Styles
gulp.task('styles', function() {
    return gulp.src('src/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(rename('lint.css'))
        .pipe(autoprefixer('last 12 version'))
        .pipe(gulp.dest('dist'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(plumber.stop())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(notify({ message: 'Styles task complete' }));
});
// Clean
gulp.task('clean', function() {
    return del(['dist/css']);
});
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});
// Watch
gulp.task('watch', ['browser-sync'], function() {
    // Watch .scss files
    gulp.watch('src/**/*.scss', ['styles']);
    // Browsersync for html 
    gulp.watch("*.html").on('change', browserSync.reload);
});
