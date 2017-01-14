// Initialize all of our variables
var app, base, concat, directory, gulp, gutil, hostname, path, refresh, sass, uglify, imagemin, minifyCSS, del, browserSync, autoprefixer, gulpSequence, shell, sourceMaps, plumber, lost, postcss, browserify, webserver, source, babel, babelify;

// Autoprefixer browser specifications
var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

// Load all of our dependencies
gulp = require('gulp');
gutil = require('gulp-util');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
sass = require('gulp-sass');
sourceMaps = require('gulp-sourcemaps');
imagemin = require('gulp-imagemin');
minifyCSS = require('gulp-minify-css');
browserSync = require('browser-sync');
autoprefixer = require('gulp-autoprefixer');
gulpSequence = require('gulp-sequence').use(gulp);
shell = require('gulp-shell');
plumber = require('gulp-plumber');
lost = require('lost');
postcss = require('gulp-postcss');
babelify = require('babelify');
browserify = require('browserify');
webserver = require('gulp-webserver');
source = require('vinyl-source-stream');
babel = require('gulp-babel');

// Fires up browserSync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "app/"
        },
        options: {
            reloadDelay: 250
        },
        notify: false
    });
});

// Creating webserver doing development
gulp.task('webserver', function() {
  gulp.src('app/')
    .pipe(webserver({
      directoryListing: true,
      open: true
    }));
});

// Compressing images & handle SVG files
gulp.task('images', function(tmp) {
    gulp.src(['app/images/*.jpg', 'app/images/*.png'])
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('app/images'));
});

// Compressing images & handle SVG files
gulp.task('images-deploy', function() {
    gulp.src(['app/images/**/*', '!app/images/README'])
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist/images'));
});

// Compiling our Javascripts
gulp.task('scripts', function() {
    // This is where our dev JS scripts going though the browserify and babelify transpiler
    return browserify({entries: 'app/scripts/src/_app.js', debug: true})
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('keepreading.js'))
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        // Catch errors
        .on('error', gutil.log)
        // Where we will store our finalized, compressed script
        .pipe(gulp.dest('app/scripts'))
        // Notify browserSync to refresh
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Compiling our Javascripts for deployment
gulp.task('scripts-deploy', function() {
    // This is where our dev JS scripts are
    return gulp.src('app/scripts/keepreading.js')
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        // The final filename of our compressed js file
        .pipe(concat('keepreading.min.js'))
        // Compress :D
        .pipe(uglify())
        // Where we will store our finalized, compressed script
        .pipe(gulp.dest('dist/scripts'));
});

// Compiling our SCSS files
gulp.task('styles', function() {
    // The initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src('app/styles/scss/init.scss')
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err);
                this.emit('end');
            }
        }))
        // Get sourceMaps ready
        .pipe(sourceMaps.init())
        // Include SCSS and list every "include" folder
        .pipe(sass({
            errLogToConsole: true,
            includePaths: [
                'app/styles/scss/'
            ]
        }))
        .pipe(postcss([
            lost()
        ]))
        .pipe(autoprefixer({
            browsers: autoPrefixBrowserList,
            cascade: true
        }))
        // Catch errors
        .on('error', gutil.log)
        // The final filename of our combined css file
        .pipe(concat('styles.css'))
        // Get our sources via sourceMaps
        .pipe(sourceMaps.write())
        // Where to save our final, compressed css file
        .pipe(gulp.dest('app/styles'))
        // Notify browserSync to refresh
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Compiling our SCSS files for deployment
gulp.task('styles-deploy', function() {
    // The initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src('app/styles/scss/init.scss')
        .pipe(plumber())
        // Include SCSS includes folder
        .pipe(sass({
            includePaths: [
                'app/styles/scss',
            ]
        }))
        .pipe(autoprefixer({
            browsers: autoPrefixBrowserList,
            cascade: true
        }))
        // The final filename of our combined css file
        .pipe(concat('styles.css'))
        .pipe(minifyCSS())
        // Where to save our final, compressed css file
        .pipe(gulp.dest('dist/styles'));
});

// Basically just keeping an eye on all HTML files
gulp.task('html', function() {
    // Watch any and all HTML files and refresh when something changes
    return gulp.src('app/*.html')
        .pipe(plumber())
        .pipe(browserSync.reload({
            stream: true
        }))
        // Catch errors
        .on('error', gutil.log);
});

// Migrating over all HTML files for deployment
gulp.task('html-deploy', function() {
    // Grab everything, which should include htaccess, robots, etc
    gulp.src('app/*')
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist'));

    // Grab any hidden files too
    gulp.src('app/.*')
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist'));

    gulp.src('app/fonts/**/*')
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist/fonts'));

    // Grab all of the styles
    gulp.src(['app/styles/*.css', '!app/styles/styles.css'])
        // Prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest('dist/styles'));
});

// Cleans our dist directory in case things got deleted
gulp.task('clean', function() {
    return shell.task([
        'rm -rf dist'
    ]);
});

// Create folders using shell
gulp.task('scaffold', function() {
    return shell.task([
        'mkdir dist',
        'mkdir dist/fonts',
        'mkdir dist/images',
        'mkdir dist/scripts',
        'mkdir dist/styles'
    ]);
});

// This is our master task when you run `gulp` in CLI / Terminal
// This is the main watcher to use when in active development
// This will:
// Startup the web server,
// Start up browserSync
// Compress all scripts and SCSS files
gulp.task('default', ['browserSync', 'scripts', 'styles'], function() {
    gulp.watch('app/scripts/src/**', ['scripts']);
    gulp.watch('app/styles/scss/**', ['styles']);
    gulp.watch('app/images/**', ['images']);
    gulp.watch('app/*.html', ['html']);
});

// This is our deployment task, it will set everything for deployment-ready files
gulp.task('deploy', gulpSequence('clean', 'scaffold', ['scripts-deploy', 'styles-deploy', 'images-deploy'], 'html-deploy'));
