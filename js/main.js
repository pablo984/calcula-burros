const botonPrecio = document.getElementById("boton-precio-gr");
const botonPrecioKg = document.getElementById("boton-precio-kg");

botonPrecio.addEventListener("click", irAPrecioGr);
botonPrecioKg.addEventListener("click", irAPrecioKg);

function irAPrecioGr(){
    window.location.href = "precio-gr.html";
}

function irAPrecioKg(){
    window.location.href = "precio-kg.html";
}