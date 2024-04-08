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

let tsass = (cb)=>{

gulp.src(paths.styles_scss.src)
	.pipe(sass())
	.pipe(gulp.dest(paths.styles_scss.dest))
	.pipe(browserSync.stream())

	cb()
}


let tcssmin= (cb)=>{
 gulp.src(paths.styles_css.src)
	.pipe(cssmin())
	.pipe(rename({extname:'.min.css'}))
	.pipe(gulp.dest(paths.styles_css.dest))
	.pipe(browserSync.stream())

	cb()
}

let serve=  (cb)=>{

browserSync.init({

	server:'./src/'

})

gulp.watch(paths.styles_scss.src,gulp.parallel(tsass,tcssmin))     
console.log('t')
gulp.watch('./src/*.html',gulp.parallel(browserSync.reload))
cb()

} 

gulp.task('default',gulp.series(serve))
