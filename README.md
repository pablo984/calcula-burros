Proyecto que aspira ayudar a las personas a que resuelvan operaciones 
aritméticas cotidianas pero de forma automatizada. 

PROBLEMA 1: 
* En "precio.html" al darle clic al botón "CALCULAR" no mantenía el 
resultado. Lo mostraba por una fracción de segundo y desaparecía. 
El PROBLEMA estaba en que los datos ingresados por el usuario estaban
dentro de una etiqueta "form" y los formularios envían datos u obtienen
datos de forma diferente. 
La SOLUCIÓN: cambiar las etiquetas "form" por etiquetas "div". 

PROBLEMA 2:
* Tuve problemas con el width y max-width. Pero después de leer esto, lo
pude solucionar:
La propiedad de CSS max-width coloca el máximo ancho a un elemento. 
Además, impide que el valor de width sea más largo que el valor especificado 
en max-width.
Esto quiere decir que cuando el valor que nosotros especifiquemos en width sea 
mayor que max-width, este último sobrescribirá el ancho del elemento al valor que 
tiene max-width. Así max-width define el ancho máximo que un elemento puede tener.

PROBLEMA 3:
* Tuve problemas con los dispositivos móviles con poca resolución: se generaba un
margen derecho que hacía que la página principal se moviera horizontalmente unos 
pocos px. 
El PROBLEMA estaba en que le había puesto un "display:grid" al "body". También probé
con "display:flex" y el problema seguía. 
La SOLUCIÓN fue configurar el "body" de la siguiente manera: 

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
} 

Y el "container-general" de la siguiente manera: 
.container-general{         
    max-width: 725px;
    width: 100%;
}

Se usó "min-height: 100vh" para asegurarme de que el cuerpo tenga al menos 
la altura de la ventana gráfica del navegador, de modo que el contenido se mantenga 
centrado incluso si hay poco contenido.

Luego, en el selector ".container-general", se puede mantener el max-width: 725px; y 
width: 100%; para que el contenedor no se vuelva más ancho que 725px y se ajuste 
automáticamente al ancho de la pantalla cuando sea menor que 725px. No es necesario 
establecer "display: flex" ni "flex-direction: column" ya que eso ya se aplicó  
previamente en el "body".

PROBLEMA 4: 
* Al querer sumar 2 variables que contienen valores del tipo número, sus valores no 
se suman, sino que se concatenan.
La SOLUCIÓN es colocar "parseFloat" o "ParseInt" para convertir el valor en número decimal
o número entero. Ejemplo: parseFloat(variable1) + parseFloat(variable2).
