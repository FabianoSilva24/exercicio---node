const  fs = require('fs');
const lista = [];

function inserir(){
    console.log('inserir')
}
function listar(){
    console.log('listar')
}
function fazer(){
    console.log('fazer')
}
function limpar(){
    console.log('limpar')
}

if(process.argv[2] === 'inserir' ){
    inserir();

}
else if(process.argv[2] === 'listar'){
    listar();
}
else if( process.argv[2] === 'fazer'){
    fazer();

}
else(process.argv[2] === 'limpar'){
    limpar();
}