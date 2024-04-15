// importações
const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));



// Criando função
function styles(){
    return gulp.src('./src/styles/*.scss') //recuperação dos arquivos
    .pipe(  //para encadear funcoes
        sass({
            outputStyle: 'compressed'   //arquivos comprimidos
        })) 
    .pipe(
        gulp.dest(
            './dist/styles/css'
        )   
    )
}

// executando função
exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //arquivos que serão observados
}