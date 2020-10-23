var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCss = require("gulp-clean-css");
var rename = require("gulp-rename");
var inject = require("gulp-inject");
var merge = require("gulp-merge-json");
var langs = [
  "en",
  "de",
  "es",
  "fr",
  "he",
  "id",
  "ja",
  "km",
  "ko",
  "th",
  "vi",
  "zh-cn",
  "zh-tw",
  "pt",
  "ru"
];

const { _build_css_files, paths } = require("./config/_build_css_files");

console.log("Files CSS: ", _build_css_files);
// Compile and minify our master stylesheet.
gulp.task("sass", function(done) {
  gulp
    .src(_build_css_files)
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest(paths.src_CSS_Dir))
    .pipe(cleanCss({ keepSpecialComments: 0 }))
    .pipe(rename(paths.extName))
    .pipe(gulp.dest(paths.dest_CSS_Dir))
    .on("end", done);
});

// Collect and create imports for all scss in our project.
gulp.task("loadSass", function() {
  var sass = gulp.src(paths.sass, { read: false });

  var sassOptions = {
    addRootSlash: false,
    addPrefix: ".",
    transform: function(filepath) {
      return '@import "' + filepath + '";';
    }
  };

  gulp
    .src(".")
    .pipe(inject(sass, sassOptions))
    .pipe(gulp.dest(paths.dest_CSS_Dir));
});

// Watches for changes and compiles our scss files
gulp.task("watch", ["sass"], function() {
  gulp.watch([paths.sass], ["sass"]);
});
