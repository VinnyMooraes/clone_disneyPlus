// importações
const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin'); //instalado uma versão especifica 7.0.1
const uglify = require('gulp-uglify');

// Criando função

 //minificar os arquivos .js
function scripts(){    
    return gulp.src('./src/js/*.js')   //recuperação dos arquivos
    .pipe(uglify()) //executando o uglify
    .pipe(gulp.dest('./dist/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss') //recuperação dos arquivos
    .pipe(sass(
        {outputStyle: 'compressed'}
    )) //arquivos comprimidos

    .pipe(gulp.dest('./dist/styles/css'))   //.pipe() --> Serve para encadear funcoes
}

// function images(){
//     return gulp.src('./src/images/**/*') //recuperação dos arquivos
//     .pipe(imagemin()) //arquivos comprimidos
//     .pipe(gulp.dest('./dist/images'))   //.pipe() --> Serve para encadear funcoes
// }

//ao executar a minificação das imagens elas estão corrompendo

// executando função
// exports.default = gulp.parallel(styles, images, scripts);
exports.default = gulp.parallel(styles, scripts);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //arquivos que serão observados
    gulp.watch('./src/js/*.js', gulp.parallel(scripts)) //observa os arquivos na pasta e executa uma função quando eles são modificados.
}