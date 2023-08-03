const botonPrecio = document.getElementById("boton-precio-gr");
const botonPrecioKg = document.getElementById("boton-precio-kg");
const botonAumentoPorcentaje = document.getElementById("boton-aumento-porcentaje");
const botonDescuentoPorcentaje = document.getElementById("boton-descuento-porcentaje");

botonPrecio.addEventListener("click", irAPrecioGr);
botonPrecioKg.addEventListener("click", irAPrecioKg);
botonAumentoPorcentaje.addEventListener("click", irAPorcentajeAumeto);
botonDescuentoPorcentaje.addEventListener("click", irAPorcentajeDescuento);


//FUNCIONES:
function irAPrecioGr(){
    window.location.href = "precio-gr.html";
}

function irAPrecioKg(){
    window.location.href = "precio-kg.html";
}

function irAPorcentajeAumeto(){
    window.location.href = "aumento-porc.html";
}

function irAPorcentajeDescuento(){
    window.location.href = "descuento-porc.html";
}