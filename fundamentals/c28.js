const API_URL='https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

const onPeopleResponse = function (person){
  console.log(`hi, i am, ${person.name}`);
}

function getCaracter(id){
  return new Promise ( (resolve, reject)=> {
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
    .get(url, opts ,function (data){
      resolve(data)
    })
    .fail(()=> reject(id))

  } )
}

function onError (id){
  console.log (`Sucedió un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes (){
  var ids =[1,2,3,4,5,6,7]
  var promesas = ids.map (id => getCaracter(id))
  try {
    var personajes = await Promise.all(promesas)
  }catch(id){
    onError(id)
  }

obtenerPersonajes()
  // Promise
  // .all(promesas)
  // .then(personajes => console.log(personajes))
  // .catch(onError)
}


// getCaracter(1)
// .then(function(personaje){
//   console.log (`personaje es ${personaje.name}`)
//   return getCaracter(2)
// })
// .then(function(personaje){
//   console.log (`personaje es ${personaje.name}`)
//   return getCaracter(3)
// })
// .then(function(personaje){
//   console.log (`personaje es ${personaje.name}`)
// })
// .catch(onError)
