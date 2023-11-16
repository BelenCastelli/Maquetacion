    let arrayDatos = []

function getDatos(){

    let datos = {
        nombre: document.getElementById("nombre").value,
        origen: document.getElementById("origen").value,
        destino: document.getElementById("destino").value,
        numPersonas: document.getElementById("personas").value,
        fecha: document.getElementById("date").value
    }
        let datosJson = JSON.stringify(datos)
        arrayDatos.push(datosJson)
        console.log(arrayDatos);
        return arrayDatos
}


// function filtrarDatos() {
//     let datosFiltrados = []

//     for(let i = 0; i < arrayDatos.length; i++){
//         let datos = JSON.parse(arrayDatos[i])
        
//         if(datos.destino.toUpperCase() == "MALLORCA" || datos.destino.toUpperCase() == "GALICIA" || 
//             datos.destino.toUpperCase() == "CANARIAS")
//             {datosFiltrados.push(datos)
//         } 
//     }
//     console.log(datosFiltrados);
// }

function filtrarDatos() {
    let datosFiltrados = []

    for(let i = 0; i < arrayDatos.length; i++){
        let datos = JSON.parse(arrayDatos[i])
        
        if(datos.destino.toUpperCase() == "MALLORCA" || datos.destino.toUpperCase() == "GALICIA" || 
            datos.destino.toUpperCase() == "CANARIAS")
            {datosFiltrados.push(datos)
        } 
    }
    let datosFiltradosJson = datosFiltrados.map ((dato) => JSON.stringify(dato))

    let myId = document.getElementById("boton")
    let newElement = document.createElement("p")
    myId.appendChild(newElement)
    newElement.textContent = datosFiltradosJson
    console.log(newElement.textContent = datosFiltradosJson);

    // document.getElementById("imprimir").innerHTML = datosFiltradosJson
}





