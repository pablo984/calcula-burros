const botonPorcentajeNumero = document.getElementById("boton-porcentaje-numero");
const botonPrecio = document.getElementById("boton-precio-gr");
const botonPrecioKg = document.getElementById("boton-precio-kg");
const botonAumentoPorcentaje = document.getElementById("boton-aumento-porcentaje");
const botonDescuentoPorcentaje = document.getElementById("boton-descuento-porcentaje");
const botonPorcentajeAumento = document.getElementById("boton-porcentaje-aumento");
const botonPorcentajeDescuento = document.getElementById("boton-porcentaje-descuento");
const botonCalcularPrecioDelKg = document.getElementById("boton-calcular-precio-del-kg");

botonPorcentajeNumero.addEventListener("click", irACalcularPorcentajeNumero);
botonPrecio.addEventListener("click", irAPrecioGr);
botonPrecioKg.addEventListener("click", irAPrecioKg);
botonAumentoPorcentaje.addEventListener("click", irAPorcentajeAumento);
botonDescuentoPorcentaje.addEventListener("click", irAPorcentajeDescuento);
botonPorcentajeAumento.addEventListener("click", irAAumentoPorcentaje);
botonPorcentajeDescuento.addEventListener("click", irADescuentoPorcentaje);
botonCalcularPrecioDelKg.addEventListener("click", irACalcularPrecioDelKg);


//FUNCIONES:
function irACalcularPorcentajeNumero(){
    window.location.href = "porcentaje-numero.html";
}

function irAPrecioGr(){
    window.location.href = "precio-gr.html";
}

function irAPrecioKg(){
    window.location.href = "precio-kg.html";
}

function irAPorcentajeAumento(){
    window.location.href = "aumento-porc.html";
}

function irAPorcentajeDescuento(){
    window.location.href = "descuento-porc.html";
}

function irAAumentoPorcentaje(){
    window.location.href = "porcentaje-aumento.html";
}

function irADescuentoPorcentaje(){
    window.location.href = "porcentaje-descuento.html";
}

function irACalcularPrecioDelKg(){
    window.location.href = "precio-del-kg.html";
}