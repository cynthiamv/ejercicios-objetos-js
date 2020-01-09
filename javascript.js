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

//EJERCICIO 6
const mostrarTecnologias = usuario => {
  if (usuario.sabeProgramar) {
    console.log(`Hola, mi nombre es ${user.firstName} y programo en ${user.tecnologiasConocidas}`)
  }
}

mostrarTecnologias(user)


//EJERCICIO 7

// Agregar el string "Proximamente DOM" al array dentro del objeto "user".


let str = "Proximamente DOM"
user.tecnologiasConocidas.push(str)

mostrarTecnologias(user)


//EJERCICIO 8

const newUser = {
  name : {
      first: user.firstName,
      last: user.lastName
  },
 email: user.email,
 age: user.age,
 sabeProgramar: user.sabeProgramar,
 tecnologiasConocidas: user.tecnologiasConocidas 
}


console.log(newUser)


//EJERCICIO 9

const ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
  },
  { nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg'
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
  }
];

// Dentro de la funcion, recorrer el array utilizando un ciclo for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6
const mostrarGanadoras = listadoDeGanadoras => {
  for (let i = 0; i < listadoDeGanadoras.length; i++) {
    console.log(`${listadoDeGanadoras[i].nombre} ganó la temporada ${listadoDeGanadoras[i].temporada}`)
  }
}

mostrarGanadoras(ganadoras)


//EJERCICIO 10

const nevermind = [
  { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
  { id: 2, nombre: "In Bloom", duracion: 255 },
  { id: 3, nombre: "Come As You Are", duracion: 219 },
  { id: 4, nombre: "Breed", duracion: 184 },
  { id: 5, nombre: "Lithium", duracion: 257 }
];

const calcularDuracionTotal = disco => {
  let total = 0;
  for (let i = 0; i < disco.length; i++) {
    total += disco[i].duracion
    
  }
  return total
}

console.log(calcularDuracionTotal(nevermind))


const calcularPromedioPorCancion = disco => {
  
  let duracion = calcularDuracionTotal(disco)
  let promedio = duracion / disco.length
  return promedio
}

console.log(calcularPromedioPorCancion(nevermind))



//EJERCICIO 11
const bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

const bandaActiva = listaDeBandas => {
  for (let i = 0; i < listaDeBandas.length; i++) {
    if (listaDeBandas[i].activa === true) {
      console.log(`${listaDeBandas[i].nombre} está activa desde el año ${listaDeBandas[i].fundacion}`)
    } else {
      console.log(`${listaDeBandas[i].nombre} no está activa`)
    }
  }
}

bandaActiva(bandas)