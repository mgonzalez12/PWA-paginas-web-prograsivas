
self.addEventListener('fetch', event =>{

   if(event.request.url.includes('main.jpg')){
       event.respondWith(fetch('img/main-patas-arriba.jpg'));
   }
})



//manipulacion de css 

/*
  if(event.request.url.includes('style.css')){
        let respuesta = new Response(
            `body {
                background-color:red !important;
                color: pink;
            }`,{
                headers:{
                    'Content-Type': 'text/css'
                }
            });

        event.respondWith(respuesta);
    }

*/