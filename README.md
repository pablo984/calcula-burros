Proyecto que aspira ayudar a las personas a que resuelvan operaciones 
aritméticas cotidianas pero de forma automatizada. 

PROBLEMA 1: 
* En "precio.html" al darle clic al botón "CALCULAR" no mantenía el 
resultado. Lo mostraba por una fracción de segundo y desaparecía. 
El PROBLEMA estaba en que los datos ingresados por el usuario estaban
dentro de una etiqueta "form" y los formularios envían datos u obtienen
datos de forma diferente. 
La SOLUCIÓN: cambiar las etiquetas "form" por etiquetas "div". 