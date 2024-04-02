let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let browserSync = require('browser-sync').create()
//const cssmin = require('gulp-cssmin');
//const rename = require('gulp-rename');
let sass = require("gulp-sass")(require('sass'));
//const minify = require('gulp-minify');

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

gulp.task('sass',()=>{

return gulp.src(style_scss.src)
	.pipe(sass())
	.pipe(gulp.desc(style_scss.desc))
	.pipe(browserSync.stream())

})

gulp.task('serve',gulp.series(['sass' ],()=>{

browserSync.init({

	server:'./'

})

	gulp.watch(style.scss.src,gulp.parallel(['sass']))
	gulp.watch('./*.html').on('change',gulp.parallel(browserSync.reload))

} ))


gulp.task('default',gulp.series(['serve']))
