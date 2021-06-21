var momentollegada = document.getElementById("momento-llegada");
var botonllegada = document.getElementById("boton-llegada");
var arrayllegada = [];
var aux = 9;
var arrayservicio = [];
var tiemposervicio = document.getElementById("tiempo-servicio");
var botonservicio = document.getElementById("boton-servicio");
var inicioservicio = [];
var abandonoservicio = [];
var tiempoocio = [];
var tiempoespera = [];
var filasespera = document.getElementById("filas-espera");
// var objetivo = document.getElementById('texto');
// objetivo.innerHTML = aux;

const mostrarTabla = () => {
  // Agarras tabla por ID
  let tabla = document.getElementById('toblerone');

  // Insertas row en la posicion -1 (ultima)
  let row = tabla.insertRow(-1);

  // De ese row, insertas celdas y las guardas en variables
  let celdaLlegada = row.insertCell(0);
  let celdaTServicio = row.insertCell(1);

  // Le cambias el innerText a esas celdas
  celdaLlegada.innerText = arrayllegada[arrayllegada.length - 1];
  celdaTServicio.innerText = arrayservicio[arrayservicio.length - 1];
};

botonllegada.addEventListener("click", function () {
  momentollegadanew = arrayllegada.push(momentollegada.value);
  console.log(arrayllegada);

  momentoservicionew = arrayservicio.push(tiemposervicio.value);
  console.log(arrayservicio);

  mostrarTabla();
});

filasespera.addEventListener("click", function () {
  for (let i = 0; i < arrayllegada.length; i++) {
    if (i == 0) {
      inicioservicio[i] = arrayllegada[i];
      abandonoservicio[i] = arrayllegada[i] + arrayservicio[i];
      tiempoocio[i] = 0;
      tiempoespera[i] = inicioservicio[i] - arrayllegada[i];
      console.log(tiempoespera);
      console.log("inicioservicio:" + inicioservicio[i]);
    } else {
      inicioservicio[i] = Math.max(abandonoservicio[i - 1], arrayservicio[i]);
      abandonoservicio[i] = inicioservicio[i] + arrayservicio[i];
      tiempoocio[i] = inicioservicio[i] - abandonoservicio[i - 1];
      tiempoespera[i] = inicioservicio[i] - arrayllegada[i];
      console.log(tiempoespera[i]);
    }
  }
});
