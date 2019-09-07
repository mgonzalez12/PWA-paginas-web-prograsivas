
let usuario ={
    nombre: 'Marcos',
    edad: 32
};

fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify(usuario),
    headers:{
        'Content-Type':'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(console.log(error));