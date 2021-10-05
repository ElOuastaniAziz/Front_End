 /* */
 function Producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;

    if(precio<0){
        throw RangeError('No se puede crear el producto '+nombre+' con un'+ 
        ' precio negativo');
    }

    return this;
}

function Comida(nombre,precio){
    Producto.call(this,nombre,precio);
    this.categoria='comida';
}

Comida.prototype=new Producto();


function Juguete(nombre,precio){
    Producto.call(this,nombre,precio);
    this.categoria='juguete';
}

Juguete.prototype = new Producto();

var queso = new Comida('feta', 5);

var diversion = new Juguete('robot', 40);

console.log(queso,diversion)