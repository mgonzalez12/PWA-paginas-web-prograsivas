
function sumarLento(numero){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            //resolve(numero + 1);
            reject('sumar Lento fallo');
        },800)
    })
}

let sumarRapido = (numero) =>{
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>resolve(numero + 1),300);
    });
}

let cosas = [ sumarLento(5),sumarRapido(10),true,'Hola mundo'];

Promise.all(cosas)
.then(respuestas =>{
    console.log(respuesta);
});


//sumarLento(10).then(console.log);
//sumarRapido(10).then(console.log);