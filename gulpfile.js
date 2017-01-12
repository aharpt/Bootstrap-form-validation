var gulp = require("gulp");
var jslint = require("gulp-jslint");


gulp.task("jslint", function () {
  return gulp.src("./javascript/script.js")
  .pipe(jslint({
    browser: true,
    devel: true,
    global: ["window, console, $"],
    for: true
  }))
  .pipe(jslint.reporter("default"));
});
