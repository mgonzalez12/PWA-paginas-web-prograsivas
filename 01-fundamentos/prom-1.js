

function sumarUno(numero){
    var promesa = new Promise(function(resolve,reject){
        console.log(numero)
        if(numero >= 7 ){
            reject('El numero es muy alto');
        }

        setTimeout(function(){
            resolve(numero +1);
        },800);
    });

    return promesa;
}

sumarUno(5).then( nuevoNumero => sumarUno( nuevoNumero))
.then(sumarUno)
.then(sumarUno)
.then(nuevoNumero=>{
    return sumarUno(nuevoNumero);
}).catch(error =>{
    console.log("Error en promesa");
    console.log(error);
});



