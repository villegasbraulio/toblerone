var momentollegada = document.getElementById("momento-llegada");
var botonllegada = document.getElementById("boton-llegada");
var arrayllegada = [];
var arrayservicio = [];
var tiemposervicio = document.getElementById("tiempo-servicio");
var botonservicio = document.getElementById("boton-servicio");
var inicioservicio;
var abandonoservicio;
var filasespera = document.getElementById("filas-espera");
var arrayabandono = [];
var arrayinicio = [];
var arrayocio = [];
var arrayespera = [];
var botontabla = document.getElementById("mostrar-tabla");
var tiempoespera;
var tiempocio;
var count = 0;

const showAlert = () => {
  let alert = document.getElementById("alert");
  alert.classList.add("show");
};

const filasDEespera = () => {
  for (let i = 0; i < arrayllegada.length; i++) {
    if (i == 0) {
      inicioservicio = arrayllegada[i];
      arrayinicio.push(inicioservicio);
      console.log("arrayinicio 1 es " + arrayinicio);

      abandonoservicio = +arrayllegada[i] + +arrayservicio[i];
      arrayabandono.push(abandonoservicio);
      console.log("arrayabandono 1 es " + arrayabandono[i]);
      tiempoocio = 0;

      arrayocio.push(tiempoocio);
      console.log("tiempocio 1 es " + arrayocio[i]);

      tiempoespera = +arrayinicio[i] - +arrayllegada[i];
      arrayespera.push(+tiempoespera);

      console.log(arrayespera);
    } else {
      let compare1 = +arrayabandono[i - 1];
      let compare2 = +arrayllegada[i];

      inicioservicio = Math.max(+compare1, +compare2);
      arrayinicio.push(+inicioservicio);
      console.log("inicioservi 2 es " + inicioservicio);

      console.log("arrayinicio 2 es " + arrayinicio);

      abandonoservicio = +arrayinicio[i] + +arrayservicio[i];
      arrayabandono.push(abandonoservicio);
      console.log("arrayabandono 2 es " + arrayabandono[i]);

      tiempoocio = +arrayinicio[i] - arrayabandono[i - 1];
      arrayocio.push(tiempoocio);
      console.log("el ocio 2  es" + arrayocio[i]);

      tiempoespera = +arrayinicio[i] - +arrayllegada[i];
      arrayespera.push(tiempoespera);
      console.log("la espera 2 es " + arrayespera[i]);
    }
  }
};

const mostrarTabla = () => {
  filasDEespera();
  let tabla = document.getElementById("toblerone");

  for (let i = 0; i < arrayllegada.length; i++) {
    let row = tabla.insertRow(-1);

    // De ese row, insertas celdas y las guardas en variables
    let celdaLlegada = row.insertCell(0);
    let celdaTServicio = row.insertCell(1);
    let celdaIServicio = row.insertCell(2);
    let celdaAbandono = row.insertCell(3);
    let celdaOcio = row.insertCell(4);
    let celdaEspera = row.insertCell(5);

    // Le cambias el innerText a esas celdas
    celdaLlegada.innerText = arrayllegada[i];
    celdaTServicio.innerText = arrayservicio[i];
    celdaIServicio.innerText = arrayinicio[i];
    celdaAbandono.innerText = arrayabandono[i];
    celdaOcio.innerText = arrayocio[i];
    celdaEspera.innerText = arrayespera[i];
  }

  botontabla.disabled = true;
};

botontabla.addEventListener("click", function () {
  mostrarTabla();
});

botonllegada.addEventListener("click", function () {
  arrayllegada.push(momentollegada.value);
  console.log(arrayllegada);

  arrayservicio.push(tiemposervicio.value);
  console.log(arrayservicio);

  tiemposervicio.value = null;
  momentollegada.value = null;
  showAlert();
});
