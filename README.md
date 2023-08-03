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
en max-width .
Esto quiere decir que cuando el valor que nosotros especifiquemos en width sea 
mayor que max-width, este último sobrescribirá el ancho del elemento al valor que 
tiene max-width. Así max-width define el ancho máximo que un elemento puede tener.

PROBLEMA 3:
* Tuve problemas con los dispositivos móviles con poca resolución: se generaba un
margen derecho que hacía que la página principal se moviera horizontalmente unos 
pocos px. 
El PROBLEMA estaba en que le había puesto un "display:grid" al "body". También probé
con "display:flex" y el problema seguía. 
No se en concreto cual es el problema, pero la SOLUCIÓN fue no poner el body flex ni
grid, así que configuré cada sección del documento por separado.  

PROBLEMA 4: 
* Al querer sumar 2 variables que contienen valores del tipo número, sus valores no 
se suman, sino que se concatenan.
La SOLUCIÓN es colocar "parseFloat" o "ParseInt" para convertir el valor en número decimal
o número entero. Ejemplo: parseFloat(variable1) + parseFloat(variable2).
