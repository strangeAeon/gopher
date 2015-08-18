var gulp = require("gulp"),
    browserify = require("browserify"),
    reactify = require("reactify"),
    source = require("vinyl-source-stream"),
    browserSync = require("browser-sync"),
    proxy = require("proxy-middleware"),
    url = require("url"),
    jshint = require('gulp-jshint'),
    path = require("path"),
    pckage = require("./package.json"), 
    del = require('del');


function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('lint', function() {
  return gulp.src(['app/js/**/*.js', '!app/js/**/__tests__/*'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean', function(cb) {
  del(['dist/**'], cb);
});

gulp.task('copy', function() {
    gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));

  gulp.src('app/css/*.css')
      .pipe(gulp.dest('dist/css'));
});

gulp.task("js", ["lint"], function () {
  // note that we don't need to exclude the i18n modules from the main build
  // because they're not directly require'd

  var reactifyOpts = {
    stripTypes: true,
    es6: false
  };
  return browserify(pckage.paths.app)
      .transform(reactify, reactifyOpts)
      .bundle()
      .on("error", handleError)
      .pipe(source(pckage.dest.app))
      .pipe(gulp.dest(pckage.dest.dist));
});

gulp.task("server", ["build"], function () {
    // Forward requests to /api to the API server
    var proxyOptions = url.parse("http://10.21.67.21:8080");
    proxyOptions.route = "/api";

    browserSync({
	server: {
	    baseDir: "./dist",
            middleware: [proxy(proxyOptions)]
	}
    });
});

gulp.task("watch", ["server"], function () {
    return gulp.watch([pckage.paths.js, pckage.paths.jsx,
		       pckage.paths.html],
		      ["js", "copy", browserSync.reload]);
});

gulp.task("build", ["js", "copy"]);

gulp.task("default", ["watch"]);
