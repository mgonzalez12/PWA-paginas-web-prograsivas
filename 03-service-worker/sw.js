
// Ciclo de vida del SW

self.addEventListener('install',event => {
    console.log('hola sw'); 

    setTimeout(()=>{
        console.log('SW: Instalaciones terminadas.');
    });

     self.skipWaiting();  // actualiza automaticamente el SW
});

//  cuando se activa
self.addEventListener('activate',event =>{

    console.log('activo service worker 2');
});

// Manejo de peticiones
self.addEventListener('fetch',event =>{

    //console.log('SW:',event.request.url);
});


// SYNC: Recuperamos conexion a internet
self.addEventListener('sync',event =>{
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);
});

// PUSH : manejar las push

self.addEventListener('push',event =>{
    console.log('push');
});

