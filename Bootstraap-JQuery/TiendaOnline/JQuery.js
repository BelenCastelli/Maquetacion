class Prendas {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio 
        this.cantidad;
    }
}

let pantalon1 = new Prendas("pantalon suelto gris", 20)
let pantalon2 = new Prendas("Pantalon Ancho", 24)
let vestido1 = new Prendas("vestido túnico", 18)
let vestido2 = new Prendas("vestido jersey", 20)
let falda1 = new Prendas("Falda Mid Print", 12)
let falda2 = new Prendas("Falda Mini Zebra", 16)
let cardigan = new Prendas("Cardigan Largo Rayas", 22)
let mono = new Prendas("mono", 24)


 let carrito = 0

 let cantidad = 1

jQuery(() =>{
    $("#carrito").on("click", function () {
        $("#modal").modal("show");
    });

    // Añadir funcion para sumar 

    $("#pantalon1").on("click", function(){
        $("#añadido").append(`
        <p><strong>Nombre:</strong> ${pantalon1.nombre}
        <strong> Cantidad: </strong> ${cantidad} <strong>Precio:</strong> ${pantalon1.precio}€</p>
        <p></p>
        `);

        carrito += pantalon1.precio
        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

        $("#modal").modal("show");

    }) 

    $("#pantalon2").on("click", function(){
        $("#añadido").append(`
        <p><strong>Nombre:</strong> ${pantalon2.nombre} 
        <strong>Precio:</strong> ${pantalon2.precio}€</p>
        <p></p>
        `);

        carrito += pantalon2.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

        $("#modal").modal("show");

    }) 

    $("#falda1").on("click", function(){
        $("#añadido").append(`
        <p><strong>Nombre:</strong> ${falda1.nombre} 
        <strong>Precio:</strong> ${falda1.precio}€</p>
        <p></p>
        `);

        carrito += falda1.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

        $("#modal").modal("show");

    }) 

    $("#falda2").on("click", function(){
        $("#añadido").append(`
        <p><strong>Nombre:</strong> ${falda2.nombre} 
        <strong>Precio:</strong> ${falda2.precio}€</p>
        <p></p>
        `);

        carrito += falda2.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

        $("#modal").modal("show");

    }) 

    $("#vestido1").on("click", function(){
        $("#añadido").append(`
        <p><strong>Nombre:</strong> ${vestido1.nombre} 
        <strong>Precio:</strong> ${vestido1.precio}€</p>
        <p></p>
        `);
        carrito += vestido1.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

        $("#modal").modal("show");

    }) 

    $("#vestido2").on("click", function(){
        $("#añadido").append(`
        <p><strong>Nombre:</strong> ${vestido2.nombre} 
        <strong>Precio:</strong> ${vestido2.precio}€</p>
        <p></p>
        `);
        carrito += vestido2.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

        $("#modal").modal("show");

    }) 

    $("#cardigan").on("click", function(){
        $("#añadido").append(`
        <p><strong>Nombre:</strong> ${cardigan.nombre} 
        <strong>Precio:</strong> ${cardigan.precio}€</p>
        <p></p>
        `);
        carrito += cardigan.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

        $("#modal").modal("show");

    }) 

    $("#mono").on("click", function(){
        $("#añadido").append(`
        <p><strong>Nombre:</strong> ${mono.nombre} 
        <strong>Precio:</strong> ${mono.precio}€</p>
        <p></p>
        `);
        carrito += mono.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

        $("#modal").modal("show");

    }) 

})
    


  
