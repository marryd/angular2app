const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tsconfig = require('tsconfig-glob');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist');
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function() {
  return gulp.src(['app/**/*', 'styles.css', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

// copy dependencies
gulp.task('copy:libs', function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/angular2/bundles/http.dev.js'
    ])
    .pipe(gulp.dest('dist/lib/'))
});


// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src(tscConfig.files)
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

// update the tsconfig files based on the glob pattern
gulp.task('tsconfig-glob', function () {
  return tsconfig({
    configPath: '.',
    indent: 2
  });
});

gulp.task('build', ['compile', 'copy:libs', 'copy:assets']);
gulp.task('default', ['build']);
