'use strict';

var gulp     = require( 'gulp'        );
var concat   = require( 'gulp-concat' );
var server   = require( 'gulp-express');
var uglify   = require('gulp-uglify'  );

var config = { bowerDir: './vendor' };

gulp.task( 'default',
    [ 'build']
);

gulp.task( 'build',
    [ 'game', 'views', 'asset', 'css', 'serve' ]
);

gulp.task( 'prod',
    [ 'gameProd', 'views', 'asset', 'css' ]
);


/**
 * Start server
 */
gulp.task('serve', function () {
    server.run(['backend/webServer.js'])
});

/**
 * Merge game files (Without compressing it)
 */
gulp.task( 'game', function() {
    gulp.src(
        [
            config.bowerDir + '/phaser/build/phaser.min.js',
            'frontend/**/*.js'
        ])
        .pipe( concat('game.js') )
        .pipe( gulp.dest( 'dist/public/js' ) );
});

/**
 * Merge & Compress game files (More Longer, using in Prod env)
 */
gulp.task( 'gameProd', function() {
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
 * Dump Views
 */
gulp.task( 'views', function() {
    gulp.src(
        [
            'frontend/index.html',
            'frontend/error.html'
        ])
        .pipe( gulp.dest( 'dist' ) );
});

/**
 * Dump Images, Icons & Audios assets
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
    gulp.src(
        [
            'frontend/**/*.xml'
        ])
        .pipe( gulp.dest('dist/public') );
});

/**
 * Merge Css
 */
gulp.task( 'css', function() {
    gulp.src(
        [
            'frontend/**/*.css'
        ])
        .pipe( concat( 'style.css' ) )
        .pipe( gulp.dest('dist/public/css') );
});

/**
 * Watch Change in Js, Css & Html Files
 */
gulp.task('watch', function () {
    gulp.watch('frontend/*.html', ['views', 'serve']);
    gulp.watch('frontend/**/*.css', ['css', 'serve']);
    gulp.watch('frontend/**/*.js', ['game', 'serve']);
});
