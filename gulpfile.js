'use strict';

var gulp     = require( 'gulp'        );
var concat   = require( 'gulp-concat' );
var server   = require( 'gulp-express');
var uglify   = require('gulp-uglify'  );

var config = { bowerDir: './vendor' };

gulp.task( 'default',
    [ 'build', 'buildProd', 'serve']
);

gulp.task( 'build',
    [ 'game', 'views', 'asset', 'css', 'serve' ]
);

gulp.task( 'prod',
    [ 'gameProd', 'views', 'asset', 'css', 'serveProd' ]
);

/**
 * Start server
 */
gulp.task('serve', function () {
    server.run(['backend/webServer.js'])
});

/**
 * Merge game files (without compiling)
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
 * Merge & Compile game files (More Longer)
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
