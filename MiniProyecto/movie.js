
class Professional {
    constructor(name, age, weight, height,isRetired, nationality,
        oscarNumber, profession, photo) {   
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarNumber = oscarNumber
        this.profession = profession
        this.photo = photo

        
        }
        printAll() {
            let propiedades = "";
            for (let propiedad in this) {
                if (typeof this[propiedad] !== "function") {
                    propiedades += `${propiedad}: ${this[propiedad]}\n`;
                }
            }
            return propiedades;
        }
}


class Movie {
    constructor (title, releaseYear, nationality, genre, actors, writer, director, photo) {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.actors = actors
        this.writer = writer
        this.director = director
        this.photo = photo

    }

    printAll() {
        let propiedades = "";
        for (let propiedad in this) {
            if (typeof this[propiedad] !== "function") {
                if (propiedad === "actors") {
                    propiedades += `Actors:\n`;
                    for (let actor of this[propiedad]) {
                        propiedades += `  ${actor.printAll()}\n`;
                    }
                } else if (propiedad === "writer") {
                    propiedades += `Guionista:\n`;
                    for (let writerProp in this.writer) {
                        propiedades += `  ${writerProp}: ${this.writer[writerProp]}\n`;
                    }
                } else if (propiedad === "director") {
                    propiedades += `Director:\n`;
                    for (let directorProp in this.writer) {
                        propiedades += `  ${directorProp}: ${this.director[directorProp]}\n`;
                    }
                } else {
                    propiedades += `${propiedad}: ${this[propiedad]}\n`;
                }
            }
        }
        console.log(propiedades);
        return propiedades;
    }
}
 


// Trainspotting
let actor1Trains = new Professional ("Ewan Mcgregor",52,80,177,false,"Británica",0,"actor");
let actor2Trains  = new Professional ("Jonny Lee Miller", 51, 80, 177, false, "británica", 0, "actor");
let actor3Trains = new Professional ("Robert Carlyle", 62, 82, 173, false, "británica", 0, "actor")
let actor4Trains = new Professional ("Ewen Bremmer", 51, 75, 173, true, "britanica", 0, "actor" )
let direcTrains= new Professional ("Danny Boyle", 67, 80, 184, false, "británico", 1, "director");
let writTrains = new Professional ("Irvin Welsh", 65, 80, 182, false, "britanica", 0, "guionista");
let photoTrains = "img/trainspotting.jpg"
let movie1 = new Movie("Trainspotting",1996,"británica","drama/crimen", [actor1Trains,actor2Trains, actor3Trains, actor4Trains], writTrains, direcTrains, photoTrains)

// El club de la lucha

let actor1Club = new Professional ("Edward Norton", 54, 80, 183, false, "estadunidense", 0, "actor")
let actor2Club = new Professional ("Brad Pitt", 59, 80, 180, false, "estadunidense", 2, "actor")
let actor3Club = new Professional ("Helena Bonham Carter", 57, 55, 157, false, "británica", 0, "actor" )
let direcCub = new Professional ("David Fincher", 61, 80, 184, false, "estadunidense", 0, "director")
let writClub = new Professional ("Jim Uhls", 66, 75, 178, false, "estadunidense", 0, "guionista" )
let photoClub = "img/clubdelalucha.jpg"
let movie2 = new Movie("El club de la lucha", 1990, "estadunidense", "Drama/Thriller/Satira", [actor1Club, actor2Club, actor3Club], writClub, direcCub, photoClub)
// La naranja mecanica


let actor1Nar = new Professional ("Malcolm John Taylor", 80, 81, 174, true, "británica", 0, "actor")
let actor2Nar = new Professional ("Adrienne Corri", 85, 60, 165, true, "británica", 0, "actor")
let actor3Nar = new Professional ("Patrick George McGee", 60, 80, 185, true, "británica", 0, "actor")
let actor4Nar = new Professional ("Alan James Clark", 67, 90, 180, true, "británica", 0, "actor")
let direNar = new Professional ("Stanley Kubrick", 71, 85, 190, true, "estadunidense", 1, "director")
let writNar = new Professional ("Stanley Kubrick", 71, 85, 190, true, "estadunidense", 1, "guionista")
let photoNar = "img/naranjaMecanica.jpg"
let movie3 = new Movie ("La naranja mecánica", 1975, "británica", "Drama/Crimen/Thriller psicológico",[actor1Nar,actor2Nar,actor3Nar,actor4Nar], writNar, direNar, photoNar)

// Requiem por un sueño

let actor1Req = new Professional ("Jared Leto", 51, 80, 182, false, "estadunidense", 0, "actor")
let actor2Req = new Professional ("Jennifer Connelly", 52, 60, 170, false, "estadunidense", 0, "actor")
let actor3Req = new Professional ("Ellen Burstyn", 90, 65, 168, true, "estadunidense", 1, "actor")
let direcReq = new Professional ("Darren Aronofsky", 54, 78, 180, false, "estadunidense", 0, "director")
let writReq = new Professional ("Hubert Selby Jr", 76, 75, 180, true, "estadunidense", 0, "guionista")
let photoReq = "img/requierporunsueno.jpg"
let movie4 = new Movie ("Requiem por un sueño", 2000, "estadunidense", "drama/drogas", [actor1Req, actor2Req, actor3Req], writReq, direcReq, photoReq)


let movies = [movie1, movie2, movie3, movie4]

let anadido = false
function nombreActores(movie){
    let nombre = ""
    for (let actor of movie.actors){
        nombre += actor.name + ", "
    }
    nombre = nombre.slice(0, -2);

    return nombre
}


function anadirDatos() {
    if (!anadido) {
        anadido = true;
        let contenedor = document.getElementById("peliculas");
        for (let movie of movies) {
            // crear card
            let card = document.createElement("div");
            // añadir clase
            card.classList.add("card");
            // Titulo
            let titulo = document.createElement("h2");
            let tituloContent = document.createTextNode(movie.title);
            titulo.appendChild(tituloContent);
            // imagen
            let img = document.createElement("img");
            img.src = movie.photo;  
            img.alt = `Portada ${movie.title}`;
            img.width = 350;
            img.classList.add("imgCss")
            // Fecha de estreno
            let estreno = document.createElement("p")
            let estrenoContent = document.createTextNode(`Fecha de estreno: ${movie.releaseYear}`)
            estreno.appendChild(estrenoContent)
            estreno.classList.add("contenido")
            // Nacionalidad
            let nacionalidad = document.createElement("p")
            let nacionalidadContent = document.createTextNode(`Nacionalidad: ${movie.nationality}`)
            nacionalidad.appendChild(nacionalidadContent)
            nacionalidad.classList.add("contenido")
            // Genero
            let genero = document.createElement("p")
            let generoContent = document.createTextNode(`Género: ${movie.genre}`)
            genero.classList.add("contenido")
            genero.appendChild(generoContent)

            // Actores
            let actores = document.createElement("p")
            let actoresContent = document.createTextNode(`actores principales: ${nombreActores(movie)}`)
            actores.classList.add("contenido")
            actores.appendChild(actoresContent)

            // Director
            let director = document.createElement("p")
            let directorContent = document.createTextNode(`Director: ${movie.director.name}`)
            director.classList.add("contenido")
            director.appendChild(directorContent)

            // Guionista
            let guionista = document.createElement("p")
            let guionistaContent = document.createTextNode(`Guionista: ${movie.writer.name}`)
            guionista.classList.add("contenido")
            guionista.appendChild(guionistaContent)
   



        card.appendChild(titulo)
        card.appendChild(img);
        card.appendChild(estreno)
        card.appendChild(nacionalidad)
        card.appendChild(genero)
        card.appendChild(actores)
        card.appendChild(director)
        card.appendChild(guionista)
        card.style.fontWeight = "bold"
        card.style.fontFamily='Cinzel';
        

    
        contenedor.appendChild(card);
        }
    }
}


function anadirPelicula(){

    let datos = {
        titulo: document.getElementById("titulo").value,
        estreno: document.getElementById("estreno").value,
        nacionalidad: document.getElementById("nacionalidad").value,
        genero: document.getElementById("genero").value, 
        actores: document.getElementById("actores").value,
        director: document.getElementById("director").value,
        guionista: document.getElementById("guionista").value,
        portada: document.getElementById("imagen").files[0]

    }
  
    let contenedor = document.getElementById("peliculas");

    let card = document.createElement("div");
    // añadir clase
    card.classList.add("card");
     // Titulo
     let titulo = document.createElement("h2");
     let tituloContent = document.createTextNode(datos.titulo);
     titulo.appendChild(tituloContent);
     // imagen
     let img = document.createElement("img");
     let urlImagen = URL.createObjectURL(new Blob([datos.portada], { type: datos.portada.type }));
     img.src = urlImagen 
     img.width = 350;
     img.classList.add("imgCss")
     // Fecha de estreno
     let estreno = document.createElement("p")
     let estrenoContent = document.createTextNode(`Fecha de estreno: ${datos.estreno}`)
     estreno.appendChild(estrenoContent)
     estreno.classList.add("contenido")
     // Nacionalidad
     let nacionalidad = document.createElement("p")
     let nacionalidadContent = document.createTextNode(`Nacionalidad: ${datos.nacionalidad}`)
     nacionalidad.appendChild(nacionalidadContent)
     nacionalidad.classList.add("contenido")
     // Genero
     let genero = document.createElement("p")
     let generoContent = document.createTextNode(`Género: ${datos.genero}`)
     genero.classList.add("contenido")
     genero.appendChild(generoContent)

    // Actores
    let actores = document.createElement("p")
    let actoresContent = document.createTextNode(`actores principales: ${datos.actores}`)
    actores.classList.add("contenido")
    actores.appendChild(actoresContent)

    // Director
    let director = document.createElement("p")
    let directorContent = document.createTextNode(`Director: ${datos.director}`)
    director.classList.add("contenido")
    director.appendChild(directorContent)

    // Guionista
    let guionista = document.createElement("p")
    let guionistaContent = document.createTextNode(`Guionista: ${datos.guionista}`)
    guionista.classList.add("contenido")
    guionista.appendChild(guionistaContent)

     

     card.appendChild(titulo)
     card.appendChild(img);
     card.appendChild(estreno)
     card.appendChild(nacionalidad)
     card.appendChild(genero)
     card.appendChild(actores)
     card.appendChild(director)
     card.appendChild(guionista)
   
     card.style.fontWeight = "bold"
     card.style.fontFamily='Cinzel';
     

 
     contenedor.appendChild(card);
    

}
