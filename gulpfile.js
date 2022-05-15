"use strict";

var server = require('browser-sync').create();

var gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'));
var plumber = require("gulp-plumber");
var sourcemap =  require("gulp-sourcemaps");

gulp.task("css", function() {
    return gulp.src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"));
});

gulp.task("server", function(){
    server.init({
        server: {
            baseDir: "build/"
        }
    });

    gulp.watch("source/scss/**/*.scss", gulp.series("css", "refresh"));
    gulp.watch("source/*.html", gulp.series("copy", "refresh"));
    gulp.watch("source/js/*.js", gulp.series("copy", "refresh"));
    gulp.watch("source/img/**/*.{png,jpg,svg}", gulp.series("copy-img"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
  });

gulp.task("copy", function () {
  return gulp.src([
    "source/*.html",
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
  ], 
    {
      base: "source"
    })
  .pipe(gulp.dest("build"));
});

gulp.task("copy-img", function () {
  return gulp.src(["source/img/**"], 
    {
      base: "source"
    })
  .pipe(gulp.dest("build"));
});

gulp.task("start", gulp.series("copy", "css", "server"));