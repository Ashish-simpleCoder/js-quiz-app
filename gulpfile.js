const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// function styleBuilder(){
//     return src('./dist/styles/scss/quiz/quiz.page.scss').pipe(sass()).pipe(dest('dist/styles/css/quiz'))
// }
// function watcher(){
//     watch(['./dist/styles/scss/**/*.scss'],styleBuilder)
// }
function styleBuilder(){
    return src('./dist/styles/scss/home/home.page.scss').pipe(sass()).pipe(dest('dist/styles/css/home'))
}
function watcher(){
    watch(['./dist/styles/scss/**/*.scss'],styleBuilder)
}
exports.default = series(styleBuilder,watcher)