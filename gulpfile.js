var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require("gulp-sass")(require('sass'));
//var minify = require('gulp-minify');

var paths = {
	styles_scss: {
		 src: './src/scss/*.scss',
		 dest: './src/css'
		},
	styles_css: {
		 src: './src/css/*.css',
		 dest: './dist/css'
		 },
	    scripts: {
		          src: './src/js/*.js',
		          dest: './dist/js'
		        },
	    images: {
		          src: './src/images/*',
		          dest: './dist/images'
		        }
}

gulp.task('sass', function(cb) {                                 
 gulp.src( paths.styles_scss.src)
	.pipe(sass())
	.pipe(gulp.dest( paths.styles_scss.dest))
	.pipe(browserSync.stream())

cb()
});

// Static Server + watching scss/html files
 gulp.task('serve', gulp.series(['sass'],async function() {

   browserSync.init({
            server: "./src"
                });
//
await gulp.watch(paths.styles_scss.src, gulp.series(['sass']));
await gulp.watch("./src/*.html").on('change', gulp.series(browserSync.reload));

}));

gulp.task('default', gulp.series(['serve']));
