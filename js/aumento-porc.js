//Variables que almacenan la selección del usuario:
const datoPrecioOriginal = document.getElementById("idPrecioOriginal");
const datoPorcentajeDeAumento = document.getElementById("idAumento");
const botonCalcular = document.querySelector(".boton-calcular");
const seccionResultado = document.querySelector(".seccion-resultado");
const spanResultado = document.querySelector(".span-resultado");
const calculadora = document.querySelector(".container-main");
const botonReset = document.querySelector(".boton-reset");

//Variables que almacenan la info del usuario:
let precioOriginal = "";
let porcentajeDeAumento = "";
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
    else if(porcentajeDeAumento == ""){
        alert("Ingresá el valor del precio por kilo");
        datoPorcentajeDeAumento.focus();
    }
    else{
        calcular();
    }
}

function cargarDatos(){
    precioOriginal = datoPrecioOriginal.value;
    porcentajeDeAumento = datoPorcentajeDeAumento.value;        
}

function calcular(){
    realizarCalculos();
    mostrarResultado();
}

function realizarCalculos(){
    let resultadoParcial = (precioOriginal * porcentajeDeAumento) / 100;
    resultado = (parseFloat(precioOriginal) + parseFloat(resultadoParcial)).toFixed(2);
}

function mostrarResultado(){
    spanResultado.innerHTML = signoPeso + resultado;
    calculadora.style.height="640px";
    seccionResultado.style.display="block"; 
}

function resetear(){
    location.reload()
}