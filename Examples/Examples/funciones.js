function alerta(){
    alert("hola mundo");
}

function consolelog(){
    console.log("Hola Mundo");
}

function pruebaconfirm(){
    let respuesta;
    respuesta = confirm("Desea cancelar la suspripcion?");
    alert("Usted ha respondido que " + respuesta);
}

function pruebaprompt(){
    let provincia;
    provincia = prompt("Introduzca la provincia","Malaga");
    alert("Usted ha introducido " + provincia);
    console.log("Operación realizada con exito");
}

function operadoresaritmeticos(){
    let num1 = 3;
    let num2 = 5;
    console.log(num2 += num1);
    console.log(num2 -= num1);
    console.log(num2 *= num1);
    console.log(num2 /= num1);
    console.log(num2 %= num1);

}

function operadoresasignacion(){
    let num1 = 5, num2 = 8, resultado1, resultado2;
    console.log(resultado1 = ((num1+num2)*200)/100);
    console.log(resultado2 = resultado1%3);
    console.log(resultado1 =++ num1);
    console.log(resultado2 = num2++);
    console.log(resultado1 =-- num1);
    console.log(resultado2 = num2--);
    console.log(resultado1 = resultado2);

}