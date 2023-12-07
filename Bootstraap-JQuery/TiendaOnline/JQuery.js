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
 let cantidad2 = 1
 let cantidad3 = 1
 let cantidad4 = 1
 let cantidad5 = 1
 let cantidad6 = 1
 let cantidad7 = 1
 let cantidad8 = 1

jQuery(() =>{
    $("#carrito").on("click", function () {
        $("#modal").modal("show");
    });

  

    // Añadir funcion para sumar 

    $("#pantalon1").on("click", function(){
        $("#añadido1").html(`
        <p><strong>Nombre:</strong> ${pantalon1.nombre}
        <strong>Precio:</strong> ${pantalon1.precio*cantidad}€;
        <strong> Cantidad: </strong> ${cantidad++} </p>`)
        

        carrito += pantalon1.precio
        $("#precioTotal").html(`<p> Precio total: ${carrito}`)
    }) 

    $("#pantalon2").on("click", function(){
      
        $("#añadido2").html(`
        <p><strong>Nombre:</strong> ${pantalon2.nombre}
        <strong>Precio:</strong> ${pantalon2.precio*cantidad2}€;
        <strong> Cantidad: </strong> ${cantidad2++} </p>`)

        carrito += pantalon2.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

    }) 

    $("#falda1").on("click", function(){
        $("#añadido3").html(`
        <p><strong>Nombre:</strong> ${falda1.nombre}
        <strong>Precio:</strong> ${falda1.precio*cantidad3}€;
        <strong> Cantidad: </strong> ${cantidad3++} </p>`)
        carrito += falda1.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)
    }) 

    $("#falda2").on("click", function(){
        $("#añadido4").html(`
        <p><strong>Nombre:</strong> ${falda2.nombre}
        <strong>Precio:</strong> ${falda2.precio*cantidad4}€;
        <strong> Cantidad: </strong> ${cantidad4++} </p>`)

        carrito += falda2.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)
    }) 

    $("#vestido1").on("click", function(){
        $("#añadido5").html(`
        <p><strong>Nombre:</strong> ${vestido1.nombre}
        <strong>Precio:</strong> ${vestido1.precio*cantidad5}€;
        <strong> Cantidad: </strong> ${cantidad5++} </p>`)

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)

    }) 

    $("#vestido2").on("click", function(){
        $("#añadido6").html(`
        <p><strong>Nombre:</strong> ${vestido2.nombre}
        <strong>Precio:</strong> ${vestido2.precio*cantidad6}€;
        <strong> Cantidad: </strong> ${cantidad6++} </p>`)
        carrito += vestido2.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)
    }) 

    $("#cardigan").on("click", function(){
        $("#añadido7").html(`
        <p><strong>Nombre:</strong> ${cardigan.nombre}
        <strong>Precio:</strong> ${cardigan.precio*cantidad7}€;
        <strong> Cantidad: </strong> ${cantidad7++} </p>`)
        carrito += cardigan.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)
    }) 

    $("#mono").on("click", function(){
        $("#añadido8").html(`
        <p><strong>Nombre:</strong> ${mono.nombre}
        <strong>Precio:</strong> ${mono.precio*cantidad8}€;
        <strong> Cantidad: </strong> ${cantidad8++} </p>`)
        carrito += mono.precio

        $("#precioTotal").html(`<p> Precio total: ${carrito}`)
    }) 

})
    


  
