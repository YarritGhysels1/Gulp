const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

/* 
-- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Point to folder to output
  gulp.watch - Watch files and folders for changes
*/

gulp.task('test', async function () {
  return console.log('dit is een test')
});

gulp.task('default', async function () {
  return console.log('dit is de default functie')
});

exports.imagemin = () => (
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

exports.autoprefixer = () => (
  gulp.src('src/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
);