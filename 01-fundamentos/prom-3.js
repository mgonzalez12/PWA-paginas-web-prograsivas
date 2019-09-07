
function sumarLento(numero){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(numero + 1);
            //reject('sumar Lento fallo');
        },800);
    });
}

let sumarRapido = (numero) =>{
    return new Promise( (resolve,reject)=>{
        reject('Error suma Rapido');
    },1000);
}

Promise.race([ sumarLento(5),sumarRapido(10)])
.then(respuestas =>{
    console.log(respuesta);
})
.catch(console.log);


//sumarLento(10).then(console.log);
//sumarRapido(10).then(console.log);