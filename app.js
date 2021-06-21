var momentollegada = document.getElementById('momento-llegada')
var botonllegada = document.getElementById('boton-llegada')
var arrayllegada = []
var aux = 9
var arrayservicio = []
var tiemposervicio = document.getElementById ('tiempo-servicio')
var botonservicio = document.getElementById('boton-servicio')
var inicioservicio = []
var abandonoservicio = []
var tiempoocio = []
var tiempoespera = []
var filasespera = document.getElementById('filas-espera')
// var objetivo = document.getElementById('texto');
// objetivo.innerHTML = aux;



botonllegada.addEventListener('click',function(){

    momentollegadanew = arrayllegada.push(momentollegada.value); 
    console.log(arrayllegada);

    momentoservicionew = arrayservicio.push(tiemposervicio.value)
    console.log(arrayservicio);

    mostrarTabla();




    }
    )


    function mostrarTabla(){
        var cuerpoTabla = "";
        var tablaLlena = "";


        for (var i =0; i< arrayservicio.length; i++){
            tablaLlena += "<tr><td>" + arrayservicio[i]; 
        }
        cuerpoTabla.innerHTML = tablaLlena;
      }

    
filasespera.addEventListener('click',function() {

    for(let i=0; i<arrayllegada.length; i++){

        if (i==0) {

        inicioservicio[i] = arrayllegada [i];
        abandonoservicio[i] = arrayllegada[i] + arrayservicio[i];
        tiempoocio[i] = 0;
        tiempoespera[i] = inicioservicio[i] - arrayllegada[i];
        console.log (tiempoespera)
        console.log ("inicioservicio:"+inicioservicio[i])
    }
        else{

        inicioservicio[i] = Math.max(abandonoservicio[i-1],arrayservicio[i]);
        abandonoservicio[i] = inicioservicio[i] + arrayservicio [i];
        tiempoocio[i] = inicioservicio[i] - abandonoservicio[i-1];
        tiempoespera[i] = inicioservicio[i] - arrayllegada[i];
        console.log (tiempoespera[i])


    }



}



    
})
