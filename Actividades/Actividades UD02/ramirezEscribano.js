function holamundo() {
    console.log("Hola Mundo");
    alert("Hola Mundo");
    document.write("Hola mundo");

}

function cuentaNumero() {

    var num;
    let cadena = "";
    let contador = 0;

    num = prompt("Introduce un numero(0 para terminar): ");
    ;
    while (num != 0) {
        if (num == 0) {
            break;
        } else {
            if (parseInt(num) >= 10) {
                cadena = cadena + num + " ";
                contador = contador + 1;
                console.log(cadena);
                console.log(contador);
            }
        }
        num = prompt("Introduce un numero(0 para terminar):");
    }

    document.write("Ha introducido " + contador + " numeros mayores que 10: " + cadena);

}

function compruebaFecha(){
    let fecha = prompt("Introduce la fecha dd/mm:");
    if(fecha == "25/12"){
        document.write("Es navidad!");
    }else{
        document.write("No es navidad");
    }
}

function calculaSalario(){
    let salario = prompt("Introduce tu salario: ");
    let antiguedad = prompt("Introduce tu antiguedad:");

    if(salario < 500 && antiguedad > 10){
        document.write("Tu nuevo salario es: "+(salario*3));
    }else if(salario < 500 && antiguedad < 10){
        document.write("Tu nuevo salario es: "+(salario*2));
    }else{
        document.write("Tu salario es el mismo: "+salario);
    }
}

function calcularNota(){
    let nota = prompt("Introduce tu nota: ");
    if(nota == 0){
        document.write("Espabila");
    }else if(nota >= 1 && nota < 3){
        document.write("Deficiente");
    }else if(nota >=3 && nota < 5){
        document.write("Insuficiente");
    }else if(nota >= 5 && nota < 6){
        document.write("Bien");
    }else if(nota >= 6 && nota < 9){
        document.write("Notable");
    }else if(nota >= 9 && nota <= 10){
        document.write("Sobresaliente");
    }
}

function secuenciaPares(){
    let cadena = "";
    let num = prompt("Introduce un numero: ");

    for(i = 2; i <= num; i++){
        if(i%2 == 0){
            cadena= cadena + i +" ";
        }
    }
    document.write("Los numeros pares son: "+cadena);
}

function secuenciaImpares(){
    let num= prompt("Introduce un numero:");
    let cadena = "";
    for(i = 1; i <= num; i++){
        if(i%2 != 0){
            cadena= cadena + i +" ";
        }
    }
    document.write("Los numeros impares son: "+cadena);
}

function tablaMultiplicar(){
    let num = prompt("Introduce un numero: ");

    for(i = 0; i < 11; i++){
        document.write(num+" x "+i+" = "+(i*num)+"<br/>");
    }
}

function tabla(){
    let fila = prompt("Introduce las filas: ");
    let columna = prompt("Introduce las columnas: ");
    document.write("<table border = 2px>");

    for(var i = 1; i <= fila; i++){
        document.write("<tr>")

        for(var j = 1; j <= columna; j++){
            document.write("<td>");
            document.write("Fila "+i+", columna "+j);
            document.write("</td>")
        }

        document.write("</tr>");
    }
    document.write("</table>");
}

function pideNumero(){
    return num=prompt("Introduce un numero: ");
}

function esPrimo(){
    let num = pideNumero();
    test = true;

    if(num < 2){
        document.write("Es primo");
    }else{
        for(i = 2; i < num; i++){
            if(num%i == 0){
                test = false;
            }
        }
    }
    if(test){
        document.write("Es primo");
    }else{
        document.write("No es primo");
    }
}

function sumaNumeros(num1, num2){
    return parseInt(num1)+parseInt(num2);
}

function llamaFuncion(){
    let num1 = pideNumero();
    let num2 = pideNumero();

    document.write(num1+" + "+num2+" = "+sumaNumeros(num1,num2));
}

function calcularBisiesto(){
    let fecha = prompt("Introduce un año: ");
    if(fecha%4 == 0){document.write("Este año es bisiesto");}
    else document.write("Este año no es bisiesto");
}

function perimetroTriangulo(){
    let base = prompt("Introduce la base del rectangulo: ");
    let altura = prompt("Introduce la altura del rectangulo: ");
    document.write("El perimetro es "+((2*base)+(2*altura)));
}

function factorial(){
    let num = pideNumero();
    let r= 1;
    let cadena = "";
    for (i=1; i<=num; i++) {
		r = r * i; 
        cadena += r + ", ";
	}
    document.write(num+"! = "+cadena);
}