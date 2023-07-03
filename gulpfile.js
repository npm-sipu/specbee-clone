const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("style.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["style.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);

// const gulp = require("gulp");
// const sass = require("gulp-sass");
// const autoprefixer = require("gulp-autoprefixer");
// const cleanCSS = require("gulp-clean-css");

// // Compile SCSS to CSS
// function compileSass() {
//   return gulp
//     .src("src/scss/*.scss") // Path to your main SCSS file(s)
//     .pipe(sass()) // Compile SCSS to CSS
//     .pipe(autoprefixer()) // Add vendor prefixes
//     .pipe(cleanCSS()) // Minify CSS
//     .pipe(gulp.dest("dist/css")); // Output directory for compiled CSS
// }

// // Watch for changes in SCSS files
// function watchFiles() {
//   gulp.watch("src/scss/**/*.scss", compileSass);
// }

// // Default task
// gulp.task("default", gulp.series(compileSass, watchFiles));
