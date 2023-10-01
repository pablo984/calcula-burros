//Transforma los datos obtenidos del JSON a objeto JavaScript:
let deJSONaObjetoJs;

//Los datos PUROS del JSON guardados en la siguiente variable:
let datosJSON;

let numeroIngresado = "";
let resultado;

let precioCompra = document.querySelector('.p-precio-compra');
let fecha = document.querySelector('.p-fecha');
let precioVenta = document.querySelector('.p-precio-venta');

const textoComprar = document.querySelectorAll('.comprar');
const textoVender = document.querySelectorAll('.vender');
const textoVenderPesos = document.querySelectorAll('.vender-p');

const botonComprar = document.querySelector('.boton-comprar');
const botonVender = document.querySelector('.boton-vender');
const botonVenderPesos = document.querySelector('.boton-vender-pesos');

const calculadora = document.querySelector(".container-main");
const iDBotonVender = document.getElementById('1');
const iDBotonVenderPesos = document.getElementById('2');
const datoNumero = document.getElementById('idCantidad');
const botonCalcular = document.querySelector('.boton-calcular');
const label = document.querySelector('.label');
const parrafoResultado = document.querySelector('.parrafo-resultado');
const spanResultado = document.querySelector('.span-resultado');
const seccionResultado = document.querySelector('.seccion-resultado');
const botonReset = document.querySelector('.boton-reset');

window.addEventListener('DOMContentLoaded', cargarJson);

async function cargarJson(){
    const response = await fetch('https://dolarapi.com/v1/dolares/blue');
    const data = await response.json();
    console.log('Status OK: se cargó el JSON exitosamente y se transformó en Objeto JS:');
    console.log(data);  
    deJSONaObjetoJs = data;
    datosJSON = JSON.stringify(data); //Transformación de Objeto Js a JSON
    console.log("Los datos transformados de Objeto JS a JSON son:");
    console.log(datosJSON);
    console.log("Se guardó el JSON transformado como Objeto JS en la variable GLOBAL 'deJSONaObjetoJs':");         
    //Estampado de precios en la aplicación:
    precioCompra.innerHTML = ("$" + deJSONaObjetoJs.compra);
    fecha.innerHTML = (deJSONaObjetoJs.fechaActualizacion.slice(0, 10));
    precioVenta.innerHTML = ("$" + deJSONaObjetoJs.venta);
}

botonComprar.addEventListener('click', comprarDolares);
botonVender.addEventListener('click', venderDolares);
botonVenderPesos.addEventListener('click', venderPesos);

botonCalcular.addEventListener('click', realizarOperacion);
botonReset.addEventListener("click", resetear);

//FUNCIONES PARA FORMATEAR MONEDAS: 
let pesosArgentinos = Intl.NumberFormat("de-DE", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

let dolares = Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

//FUNCIONES DE OPERACIONES:
function comprarDolares(){
    label.innerHTML = "Dólares a comprar:";
    iluminar(textoComprar, botonComprar);
    //Obtiene el ID del 'botonComprar':
    let idBoton = botonComprar.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton", idBoton); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(textoVender, botonVender);
    eliminarIluminacion(textoVenderPesos, botonVenderPesos);        
}

function venderDolares(){
    label.innerHTML = "Dólares a vender:";
    iluminar(textoVender, botonVender);
    //Obtiene el ID del 'botonComprar':
    let idBoton = botonVender.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton", idBoton);     
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(textoComprar, botonComprar);
    eliminarIluminacion(textoVenderPesos, botonVenderPesos);
}

function venderPesos(){
    label.innerHTML = "Pesos a vender:";
    iluminar(textoVenderPesos, botonVenderPesos);
    //Obtiene el ID del 'botonComprar':
    let idBoton = botonVenderPesos.id;
    //Agrega el id del botón al sessionStorage:
    sessionStorage.setItem("idBoton", idBoton); 
    //Remover las otras clases para apagar la iluminación: 
    eliminarIluminacion(textoComprar, botonComprar);
    eliminarIluminacion(textoVender, botonVender);
}

//FUNCIÓN PARA ILUMINAR TEXTO Y BOTONES:
function iluminar(texto, boton){
    texto.forEach(texto => texto.classList.toggle('iluminar-texto'));
    boton.classList.toggle('iluminar-boton');
}

//FUNCIÓN PARA APAGAR ILUMINACIÓN EN TEXTO Y BOTONES:
function eliminarIluminacion(texto, boton){
    texto.forEach(texto => texto.classList.remove('iluminar-texto'));
    boton.classList.remove('iluminar-boton');
}

//VERIFICACIÓN DE DATOS Y OPERACIONES ARITMÉTICAS:
function realizarOperacion(){
    cargarDatos();
    chequearSiHayDatos();
}

//Lee el valor que ingresa el usuario y lo guarda en la variable 'numeroIngresado':
function cargarDatos(){
    numeroIngresado = datoNumero.value;
}

//Chequea si están correctamente igresados los datos y luego ejecuta la operación:
function chequearSiHayDatos(){
    let idBoton = sessionStorage.getItem("idBoton");
    if(idBoton == null) {
        alert("Tenés que elegir una operación a ralizar");        
        console.log("Tenes que elegir una operación")
    }    
    else if(numeroIngresado == ""){
        alert("Tenés que ingresar un valor");
        datoNumero.focus();
        console.log("Tenes que ingresar un valor");
    }
    else{
        calcular();
    }
}

/*Calcula la operación seleccionada basándose en el id del botón presionado
el cual lo obtiene del sessionStorage: */
function calcular(){
    let idDelBoton = sessionStorage.getItem("idBoton");
    
    if(idDelBoton === "0"){
        resultado = numeroIngresado * deJSONaObjetoJs.venta;
        console.log("El precio a pagar es:", resultado);
        describirPrecio(idDelBoton);
        spanResultado.innerHTML = ("$ " + pesosArgentinos.format(resultado));
        calculadora.style.height="640px";
        seccionResultado.style.display="block"; 
    }
    else if(idDelBoton === "1"){
        resultado = numeroIngresado * deJSONaObjetoJs.compra;
        console.log("Pesos a obtener:", resultado);
        describirPrecio(idDelBoton);
        spanResultado.innerHTML = ("$ " + pesosArgentinos.format(resultado));
        calculadora.style.height="640px";
        seccionResultado.style.display="block";
    }
    else{
        resultado = numeroIngresado / deJSONaObjetoJs.venta;
        console.log("Dólares a obtener:", resultado);
        describirPrecio(idDelBoton);
        spanResultado.innerHTML = ("U$S " + dolares.format(resultado));
        calculadora.style.height="640px";
        seccionResultado.style.display="block";
    }
}

//Imprime el precio a pagar o a obtener según operación:
function describirPrecio(numeroDeId){
    if(numeroDeId === "0"){
        parrafoResultado.innerHTML = "Precio pagar en pesos:";
    }
    else if(numeroDeId === "1"){
        parrafoResultado.innerHTML = "Pesos a obtener:";
    }
    else{
        parrafoResultado.innerHTML = "Dólares a obtener:";
    }
}

//Resetea la página y eliminar el valor del sessionStorage:
function resetear(){
    location.reload()
    sessionStorage.clear();
}

