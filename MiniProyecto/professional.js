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
let photo1Trains = "img/ewan.jpg"
let actor1Trains = new Professional ("Ewan Mcgregor",52,80,177,false,"Británica",0,"actor", photo1Trains);
let photo2Trains = "img/jonny.jpg"
let actor2Trains  = new Professional ("Jonny Lee Miller", 51, 80, 177, false, "británica", 0, "actor", photo2Trains);
let photo3Trains = "img/robert.jpg"
let actor3Trains = new Professional ("Robert Carlyle", 62, 82, 173, false, "británica", 0, "actor", photo3Trains)
let photo4Trains = "img/ewen.jpg"
let actor4Trains = new Professional ("Ewen Bremmer", 51, 75, 173, true, "britanica", 0, "actor", photo4Trains )
let photo1Club = "img/norton.jpg"
let actor1Club = new Professional ("Edward Norton", 54, 80, 183, false, "estadunidense", 0, "actor", photo1Club)
let photo2Club = "img/brad.jpg"
let actor2Club = new Professional ("Brad Pitt", 59, 80, 180, false, "estadunidense", 2, "actor", photo2Club)
let photo3Club = "img/helena.jpg"
let actor3Club = new Professional ("Helena Bonham Carter", 57, 55, 157, false, "británica", 0, "actor", photo3Club )
let photo1Nar = "img/malcolm.jpg"
let actor1Nar = new Professional ("Malcolm John Taylor", 80, 81, 174, true, "británica", 0, "actor", photo1Nar)
let photo2Nar = "img/adrianne.jpeg"
let actor2Nar = new Professional ("Adrienne Corri", 85, 60, 165, true, "británica", 0, "actor", photo2Nar)
let photo3Nar = "img/patrick.jpg"
let actor3Nar = new Professional ("Patrick George McGee", 60, 80, 185, true, "británica", 0, "actor", photo3Nar)
let photo4Nar = "img/warren.jpeg"
let actor4Nar = new Professional ("Alan James Clark", 67, 90, 180, true, "británica", 0, "actor", photo4Nar)
let photo1Req = "img/jared.jpg"
let actor1Req = new Professional ("Jared Leto", 51, 80, 182, false, "estadunidense", 0, "actor", photo1Req)
let photo2Req = "img/jenny.jpg"
let actor2Req = new Professional ("Jennifer Connelly", 52, 60, 170, false, "estadunidense", 0, "actor", photo2Req)
let photo3Req = "img/ellen.jpg"
let actor3Req = new Professional ("Ellen Burstyn", 90, 65, 168, true, "estadunidense", 1, "actor", photo3Req)
let photodireTrains = "img/boyle.jpg"
let direcTrains= new Professional ("Danny Boyle", 67, 80, 184, false, "británico", 1, "director", photodireTrains);
let photowritTrains = "img/irvin.jpg"
let writTrains = new Professional ("Irvin Welsh", 65, 80, 182, false, "britanica", 0, "guionista",photowritTrains);
let photodireclub = "img/david.jpg"
let direcCub = new Professional ("David Fincher", 61, 80, 184, false, "estadunidense", 0, "director",photodireclub)
let photowritclub = "img/jim.jpg"
let writClub = new Professional ("Jim Uhls", 66, 75, 178, false, "estadunidense", 0, "guionista", photowritclub)
let photodireNar = "img/stanley.jpg"
let direNar = new Professional ("Stanley Kubrick", 71, 85, 190, true, "estadunidense", 1, "director y guionista",photodireNar)
let photodireReq = "img/darren.jpg"
let direcReq = new Professional ("Darren Aronofsky", 54, 78, 180, false, "estadunidense", 0, "director", photodireReq)
let photowritReq = "img/selby.jpg"
let writReq = new Professional ("Hubert Selby Jr", 76, 75, 180, true, "estadunidense", 0, "guionista",photowritReq)


let profesionales = [actor1Trains,actor2Trains,actor3Trains,actor4Trains, actor1Club,actor2Club,actor3Club, 
    actor1Nar,actor2Nar,actor3Nar, actor4Nar, actor1Req, actor2Req,actor3Req, direNar, direcCub, direcTrains, direcReq, 
writClub, writTrains, writReq] 



function anadirProfesionales() {

        let contenedor = document.getElementById("main");
        for (let profesional of profesionales) {
            // crear card
            let card = document.createElement("div");
            // añadir clase
            card.classList.add("card");

            // Nombre
            let nombre = document.createElement("h1");
            let nombreContent = document.createTextNode(profesional.name);
            nombre.appendChild(nombreContent);

            // imagen
            let img = document.createElement("img");
            img.src = profesional.photo;  
            img.width = 350;
            img.classList.add("imgCss")

            // Edad
            let edad = document.createElement("p");
            let edadContent = document.createTextNode(`Edad: ${profesional.age}`);
            edad.appendChild(edadContent);
            edad.classList.add("contenido")

            // Nacionalidad
            let nacionalidad = document.createElement("p");
            let nacionalidadContent = document.createTextNode(`Nacionalidad: ${profesional.nationality}`);
            nacionalidad.appendChild(nacionalidadContent);
            nacionalidad.classList.add("contenido")

            // Profesion 
            let profesion = document.createElement("p");
            let profesionContent = document.createTextNode(`Profesión: ${profesional.profession}`);
            profesion.appendChild(profesionContent);
            profesion.classList.add("contenido")

            // Número de Oscars

            let oscars = document.createElement("p");
            let oscarsContent = document.createTextNode(`Número de Oscars: ${profesional.oscarNumber}`);
            oscars.appendChild(oscarsContent);
            oscars.classList.add("contenido")
            // Peso
            let peso = document.createElement("p");
            let pesoContent = document.createTextNode(`Peso: ${profesional.weight} Kg`);
            peso.appendChild(pesoContent);
            peso.classList.add("contenido")

            // Altura
            let altura = document.createElement("p");
            let alturaContent = document.createTextNode(`Altura: ${profesional.height}`);
            altura.appendChild(alturaContent);
            altura.classList.add("contenido")


        card.appendChild(nombre)
        card.appendChild(img);
        card.appendChild(edad)
        card.appendChild(nacionalidad)
        card.appendChild(profesion)
        card.appendChild(oscars)
        card.appendChild(peso)
        card.appendChild(altura)

        card.style.fontWeight = "bold"
        card.style.fontFamily='Cinzel';
        

    
        contenedor.appendChild(card);
        }
    }


