//Variables que almacenan la selección del usuario:
const datoPeso = document.getElementById("idPeso");
const datoPrecio = document.getElementById("idPrecio");
const botonCalcular = document.querySelector(".boton-calcular");
const seccionResultado = document.querySelector(".seccion-resultado");
const spanResultado = document.querySelector(".span-resultado");
const calculadora = document.querySelector(".container-main");
const botonReset = document.querySelector(".boton-reset");

//Variables que almacenan la info del usuario:
let peso = "";
let precio = "";
let resultado;
let signoPeso = "$ "

/*Eventos al hacer click: */
botonCalcular.addEventListener("click", chequearSiHayDatos);
botonReset.addEventListener("click", resetear);

/*FUNCIONES:*/
function chequearSiHayDatos(){
    cargarDatos();

    if(peso == "") {
        alert("Ingresá el valor del peso en gramos");
        datoPeso.focus();
    }
    else if(precio == ""){
        alert("Ingresá el valor del precio por kilo");
        datoPrecio.focus();
    }
    else{
        calcular();
    }
}

function calcular(){
    realizarCalculos();
    mostrarResultado();
}

function cargarDatos(){
    peso = datoPeso.value;
    precio = datoPrecio.value;        
}

function realizarCalculos(){
    resultado = ((peso * precio) / 1000).toFixed(2);
}

function mostrarResultado(){
    spanResultado.innerHTML = signoPeso + resultado;
    calculadora.style.height="640px";
    seccionResultado.style.display="block"; 
}

function resetear(){
    location.reload()
}







