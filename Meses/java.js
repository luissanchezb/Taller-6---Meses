
// Array de los meses
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Mostrar por pantalla el nombre de cada uno de los meses utilizando un bucle for.
function mostrar(meses){
	 for(var x=0; x<meses.length; x++){
	 	alert(meses[x]);
	 }
}

//Declaracion e inicializacion de objetos.
function Producto_alimenticio(codigo, nombre, precio){
	this.codigo = codigo;
	this.nombre = nombre;
	this.precio = precio;
	this.imprimeDatos = imprimeDatos;
}

//Instancia de los objetos. 
var productos = new Array(3);
productos[0] = new Producto_alimenticio('001','Arroz',' $ 1.50');
productos[1] = new Producto_alimenticio('002','Chuleta',' $ 2.00');
productos[2] = new Producto_alimenticio('003','Pan',' $ 1.00');

// Funcion que muestra los datos
function imprimeDatos(){
    alert('--------------------------\nProductos Alimenticios '+
	'\n--------------------------\nCódigo:      ' + this.codigo + '\n'
	 + 'Nombre:    '+this.nombre+ '\n' + 'Precio:       '+ this.precio +
	  '\n' +'--------------------------'+'\n');
}

//Funcion que llama el html de la cual se llama a la funcion imprimir datos, para que pueda mostrar los datos.
function for1(productos){
	for(var x=0; x<productos.length; x++){
	    var y = document.createElement("y");
	    y.innerHTML = productos[x].imprimeDatos();
	}
}