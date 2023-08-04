//Variables que almacenan la selección del usuario:
const datoPrecioOriginal = document.getElementById("idPrecioOriginal");
const datoPrecioConDescuento = document.getElementById("idDescuento");
const botonCalcular = document.querySelector(".boton-calcular");
const seccionResultado = document.querySelector(".seccion-resultado");
const spanResultado = document.querySelector(".span-resultado");
const calculadora = document.querySelector(".container-main");
const botonReset = document.querySelector(".boton-reset");

//Variables que almacenan la info del usuario:
let precioOriginal = "";
let precioConDescuento = "";
let resultado;
let signoPorciento = " %"

/*Eventos al hacer click: */
botonCalcular.addEventListener("click", chequearSiHayDatos);
botonReset.addEventListener("click", resetear);

/*FUNCIONES:*/
function chequearSiHayDatos(){
    cargarDatos();

    if(precioOriginal == "") {
        alert("Ingresá el valor del precio original");
        datoPrecioOriginal.focus();
    }
    else if(precioConDescuento == ""){
        alert("Ingresá el valor del precio con descuento");
        datoPrecioConDescuento.focus();
    }
    else{
        calcular();
    }
}

function cargarDatos(){
    precioOriginal = datoPrecioOriginal.value;
    precioConDescuento = datoPrecioConDescuento.value;        
}

function calcular(){
    realizarCalculos();
    mostrarResultado();
}

function realizarCalculos(){
    let descuento = (precioOriginal - precioConDescuento);
    resultado = ((descuento / precioOriginal) * 100).toFixed(1);
}

function mostrarResultado(){
    spanResultado.innerHTML = resultado + signoPorciento;
    calculadora.style.height="640px";
    seccionResultado.style.display="block"; 
}

function resetear(){
    location.reload()
}