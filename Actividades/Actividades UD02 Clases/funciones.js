class telefono {
    //constructor
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    //Metodo set
    set setMarca(newMarca) {
        this.marca = newMarca;
    }

    //Metodo get
    get getMarca() {
        return ("La marca del telefono es: " + this.marca);
    }

    //Metodos
    anuncio(miMarca) {
        if (telefono.marca == miMarca) {
            return ("El telefono de esa marca esta disponible.");
        } else {
            return ("El telefono de esa marca no esta disponible.");
        }
    }


}

class Modelo {
    //constructor
    telefono(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    //Metodos
    anuncioCompleto() {
        if (Modelo.marca == miMarca && Modelo.modelo == miModelo) {
            return ("El telefono de esa marca y modelo esta disponible");
        }
    }
}

class persona {
    //constructor
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    //Metodos
    nombreCompleto() {
        return (this.nombre + " " + this.apellido);
    }

}

class rectangulo {
    //constructor
    constructor(base, lado) {
        this.base = base;
        this.lado = lado;
    }

    calcularArea() {
        let area = this.base * this.lado;
        return ("El area del rectangulo es: " + area);
    }
    calcularPerimetro() {
        return ("El perimetro del rectangulo es: " + (this.base * 2 + this.lado * 2));
    }
}

class Vehiculo{
    //constructor
    constructor(color,marca,modelo,velocidad){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    //metodos
    encender(){
        return "Encender motor";
    }
    apagar(){
        return "Apagar motor";
    }
    distanciaMax(){
        let tiempo = prompt("Introduce el tiempo: ");
        let distancia = tiempo*this.velocidad;
        return distancia;
    }

    mostrar(){
        return this.marca+" "+this.modelo+" "+this.color+". "+this.velocidad+"km/h.";
    }
}

class coche extends Vehiculo{
    constructor(color,marca,modelo,velocidad){
        super(color,marca,modelo);
        this.velocidad=120;
    }
    apagar(){
        return "Aparcar";
    }
}

class avion extends Vehiculo{
    constructor(color,marca,modelo,velocidad){
        super(color,marca,modelo);
        this.velocidad = 1000;
    }
    encender(){
        return "Despegar";
    }
    apagar(){
        return "Aterrizar";
    }
}

function Ej01() {

    //Crear instancias
    let miTelefono = new telefono("Xiaomi", "Mi5");
    let persona1 = new persona("Alvaro", "Ramirez");

    //Mostrar por consola los datos
    console.log(miTelefono);
    console.log(persona1);
    console.log(persona1.nombreCompleto());
}

function Ej02() {
    //Crear instancia
    let miTelefono = new telefono("Xiaomi", "Mi5");

    //Mostrar por consola la marca
    console.log(miTelefono.getMarca);

    //Modificamos la marca
    miTelefono.setMarca = prompt("Introduce una nueva marca: ");

    //Mostramos el cambio
    console.log(miTelefono.getMarca);
}

function Ej03() {
    //Crear instancias
    let miTelefono = new telefono("Xiaomi", "Mi5");
    let miTelefono2 = new telefono("Samsung", "Note");
    let miTelefono3 = new telefono("iPhone", "10");

    let marca = prompt("Introduce una marca: ");
    let modelo = prompt("Introduce un modelo: ");

    if (((miTelefono.marca || miTelefono2.marca || miTelefono3.marca) == marca) && ((miTelefono.modelo || miTelefono2.modelo || miTelefono3.modelo) == modelo)) {
        return console.log("El telefono y marca estan disponibles");
    } else {
        return console.log("El telefono y marca no estan disponibles");
    }
}

function Ej04() {

    let miRectangulo = new rectangulo(5, 5);

    console.log(miRectangulo.calcularArea());
    console.log(miRectangulo.calcularPerimetro());
}

function Ej05(){
    let miCoche = new coche("azul","Fiat","Punto");
    let miAvion = new avion("blanco","A","B");

    document.write("Encender coche: "+miCoche.encender());
    document.write("<br/>Parar coche: "+miCoche.apagar());
    document.write("<br/>Velocidad maxima del coche: "+miCoche.velocidad);
    document.write("<br/>Distancia recorrida: "+miCoche.distanciaMax()+" kms");
    document.write("<br/>Datos del coche: "+miCoche.mostrar());

    document.write("<br/><br/>Encender avión: "+miAvion.encender());
    document.write("<br/>Parar avión: "+miAvion.apagar());
    document.write("<br/>Velocidad maxima del avión: "+miAvion.velocidad);
    document.write("<br/>Distancia recorrida: "+miAvion.distanciaMax()+" kms");
    document.write("<br/>Datos del avión: "+miAvion.mostrar());
}

