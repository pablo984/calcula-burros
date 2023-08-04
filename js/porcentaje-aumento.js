//Variables que almacenan la selección del usuario:
const datoPrecioOriginal = document.getElementById("idPrecioOriginal");
const datoPrecioConAumento = document.getElementById("idAumento");
const botonCalcular = document.querySelector(".boton-calcular");
const seccionResultado = document.querySelector(".seccion-resultado");
const spanResultado = document.querySelector(".span-resultado");
const calculadora = document.querySelector(".container-main");
const botonReset = document.querySelector(".boton-reset");

//Variables que almacenan la info del usuario:
let precioOriginal = "";
let precioConAumento = "";
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
    else if(precioConAumento == ""){
        alert("Ingresá el valor del precio con aumento");
        datoPrecioConAumento.focus();
    }
    else{
        calcular();
    }
}

function cargarDatos(){
    precioOriginal = datoPrecioOriginal.value;
    precioConAumento = datoPrecioConAumento.value;        
}

function calcular(){
    realizarCalculos();
    mostrarResultado();
}

function realizarCalculos(){
    let aumento = (precioConAumento - precioOriginal);
    resultado = ((aumento / precioOriginal) * 100).toFixed(1);
}

function mostrarResultado(){
    spanResultado.innerHTML = resultado + signoPorciento;
    calculadora.style.height="640px";
    seccionResultado.style.display="block"; 
}

function resetear(){
    location.reload()
}