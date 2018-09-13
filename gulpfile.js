'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const SCSS_SRC = './src/Assets/scss/*.scss';
const SCSS_DEST = './src/Assets/css';

gulp.task('compile_scss', done => {
  gulp
    .src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
  done();
});

// gulp.task('sass', function() {
//   return gulp
//     .src('./src/Assets/scss/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./src/Assets/css'));
// });

gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
});

gulp.task('default', gulp.series('watch_scss'));
