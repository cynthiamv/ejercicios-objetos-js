//EJERCICIO 1

const user = {
    firstName: "Cynthia",
    lastName: "Vico",
    email: "cynthia.mvico@gmail.com",
    age: 23
}

console.log(`Hola, mi nombre es ${user.firstName} y tengo ${user.age} años`)



//EJERCICIO 2

const usuario1 = {
  id: 1,
  nombre: "Ada Lovelace",
  email: "ada@gmail.com",
  telefono: "1234567890"
}
const usuario2 = {
  id: 2,
  nombre: "Grace Hopper",
  email: "grace@hotmail.com",
  telefono: "0987654321"
}
const usuario3 = {
  id: 3,
  nombre: "Hedy Lamarr",
  email: "hedy@gmail.com",
  telefono: "6789054321"
}
const usuario4 = {
  id: 4,
  nombre: "Radia Perlman",
  email: "radia@yahoo.com",
  telefono: "1234509876"
}
const usuario5 = {
  id: 5,
  nombre: "Sheryl Sandberg",
  email: "sheryl@facebook.com",
  telefono: "5432167890"
}

console.log(usuario1, usuario2, usuario3, usuario4, usuario5)


//EJERCICIO 3

console.log(usuario1.nombre)
console.log(usuario2.id)
console.log(usuario3.email)
console.log(usuario4.id, usuario4.nombre)
console.log(usuario5.telefono)

//EJERCICIO 4
const disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
  };

console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`)


//EJERCICIO 5
// Crear un array llamado tecnologiasConocidas donde se listen las tecnologias que aprendiste durante el curso y las que ya supieras de antes
// Agregar al objeto creado en el ejercicio 1 dos propiedades:

user.sabeProgramar = true
user.tecnologiasConocidas = ["C", "HTML", "CSS", "SASS", "JAVASCRIPT"]
console.log(user)