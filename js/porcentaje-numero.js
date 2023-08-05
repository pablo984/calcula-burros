//Variables que almacenan la selección del usuario:
const datoNumero = document.getElementById("idNumero");
const datoPorcentaje = document.getElementById("idPorcentaje");
const botonCalcular = document.querySelector(".boton-calcular");
const seccionResultado = document.querySelector(".seccion-resultado");
const spanResultado = document.querySelector(".span-resultado");
const calculadora = document.querySelector(".container-main");
const botonReset = document.querySelector(".boton-reset");

//Variables que almacenan la info del usuario:
let numero = "";
let porcentaje = "";
let resultado;

/*Eventos al hacer click: */
botonCalcular.addEventListener("click", chequearSiHayDatos);
botonReset.addEventListener("click", resetear);

/*FUNCIONES:*/
function chequearSiHayDatos(){
    cargarDatos();

    if(numero == "") {
        alert("Ingresá un número");
        datoPrecioOriginal.focus();
    }
    else if(porcentaje == ""){
        alert("Ingresá un porcentaje a calcular");
        datoPorcentajeDeAumento.focus();
    }
    else{
        calcular();
    }
}

function cargarDatos(){
    numero = datoNumero.value;
    porcentaje = datoPorcentaje.value;        
}

function calcular(){
    realizarCalculos();
    mostrarResultado();
}

function realizarCalculos(){
    resultado = ((porcentaje * numero) / 100).toFixed(2); 
}

function mostrarResultado(){
    spanResultado.innerHTML = resultado;
    calculadora.style.height="640px";
    seccionResultado.style.display="block"; 
}

function resetear(){
    location.reload()
}