//Variables que almacenan la selección del usuario:
const datoPrecioOriginal = document.getElementById("idPrecioOriginal");
const datoPorcentajeDeDescuento = document.getElementById("idDescuento");
const botonCalcular = document.querySelector(".boton-calcular");
const seccionResultado = document.querySelector(".seccion-resultado");
const spanResultado = document.querySelector(".span-resultado");
const calculadora = document.querySelector(".container-main");
const botonReset = document.querySelector(".boton-reset");

//Variables que almacenan la info del usuario:
let precioOriginal = "";
let porcentajeDeDescuento = "";
let resultado;
let signoPeso = "$ "

/*Eventos al hacer click: */
botonCalcular.addEventListener("click", chequearSiHayDatos);
botonReset.addEventListener("click", resetear);

/*FUNCIONES:*/
function chequearSiHayDatos(){
    cargarDatos();

    if(precioOriginal == "") {
        alert("Ingresá el valor del peso");
        datoPrecioOriginal.focus();
    }
    else if(porcentajeDeDescuento == ""){
        alert("Ingresá el valor del precio por kilo");
        datoPorcentajeDeDescuento.focus();
    }
    else{
        calcular();
    }
}

function cargarDatos(){
    precioOriginal = datoPrecioOriginal.value;
    porcentajeDeDescuento = datoPorcentajeDeDescuento.value;        
}

function calcular(){
    realizarCalculos();
    mostrarResultado();
}

function realizarCalculos(){
    let resultadoParcial = (precioOriginal * porcentajeDeDescuento) / 100;
    resultado = (precioOriginal - resultadoParcial).toFixed(2);
}

function mostrarResultado(){
    spanResultado.innerHTML = signoPeso + resultado;
    calculadora.style.height="640px";
    seccionResultado.style.display="block"; 
}

function resetear(){
    location.reload()
}