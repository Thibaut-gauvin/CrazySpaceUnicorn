'use strict';

var gulp     = require( 'gulp'        );
var concat   = require( 'gulp-concat' );
var server   = require( 'gulp-express');
var uglify   = require('gulp-uglify'  );

var config = { bowerDir: './vendor' };

gulp.task( 'default',
    [ 'build', 'serve']
);

gulp.task( 'build',
    [ 'game', 'html', 'asset', 'css' ]
);

/**
 * Start server
 */
gulp.task('serve', function () {
    server.run(['backend/webServer.js'])
});

/**
 * Compile game files
 */
gulp.task( 'game', function() {
    gulp.src(
        [
            config.bowerDir + '/phaser/build/phaser.min.js',
            'frontend/**/*.js'
        ])
        .pipe( concat('game.js') )
        .pipe(uglify())
        .pipe( gulp.dest( 'dist/public/js' ) );
});

/**
 * Dump Html
 */
gulp.task( 'html', function() {
    gulp.src(
        [
            'frontend/index.html',
            'frontend/error.html'
        ])
        .pipe( gulp.dest( 'dist' ) );
});

/**
 * Dump Img & Audio asset
 */
gulp.task( 'asset', function() {
    gulp.src(
        [
            'frontend/**/*.jpg',
            'frontend/**/*.gif',
            'frontend/**/*.png'
        ])
        .pipe( gulp.dest('dist/public') );
    gulp.src(
        [
            'frontend/**/*.m4a',
            'frontend/**/*.mp3',
            'frontend/**/*.ogg'
        ])
        .pipe( gulp.dest('dist/public') );
});

/**
 * CSS
 */
gulp.task( 'css', function() {
    gulp.src(
        [
            'frontend/**/*.css'
        ])
        .pipe( concat( 'style.css' ) )
        .pipe( gulp.dest('dist/public/css') );
});
