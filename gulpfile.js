// importações
const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin'); //instalado uma versão especifica 7.0.1


// Criando função
function styles(){
    return gulp.src('./src/styles/*.scss') //recuperação dos arquivos
    .pipe(sass(
        {outputStyle: 'compressed'}
    )) //arquivos comprimidos

    .pipe(gulp.dest('./dist/styles/css'))   //.pipe() --> Serve para encadear funcoes
}

function images(){
    return gulp.src('./src/images/**/*') //recuperação dos arquivos
    .pipe(imagemin()) //arquivos comprimidos
    .pipe(gulp.dest('./dist/images'))   //.pipe() --> Serve para encadear funcoes
}


// executando função
exports.default = gulp.parallel(styles, images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //arquivos que serão observados
}