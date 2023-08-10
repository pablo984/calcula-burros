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

/*Variable que contiene el código para formatear el resultado con puntos
y comas decimales: */
let pesosArgentinos = Intl.NumberFormat("de-DE", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

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
    else if(porcentajeDeDescuento == ""){
        alert("Ingresá el valor del % de descuento");
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
    spanResultado.innerHTML = signoPeso + pesosArgentinos.format(resultado);
    calculadora.style.height="640px";
    seccionResultado.style.display="block"; 
}

function resetear(){
    location.reload()
}