var saludo = prompt ("Cantidad de veces en la cual se repetira la frase:  ");
console.log (saludo);
saludo ++;
for(i=1; saludo != i; i++ ){
    document.write("Hola Mundo! ▶"+ i + "<br>");
}