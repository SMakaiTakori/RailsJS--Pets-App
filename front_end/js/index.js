document.addEventListener("DOMContentLoaded", () => {
    fetchPets()
    
})

    const BASE_URL = "http://localhost:3000"

// read - fetch pets index

function fetchPets(){
    fetch(`${BASE_URL}/pets`)
    .then(resp => resp.json())
    .then(pets => {        
        for (const pet of pets){
            let p = new Pet(pet.id, pet.name, pet.owner, pet.animal_type, pet.mood, pet.phrase)    
            p.renderPet().last;
        }   
    })
}



// create - create a new pet

//edit  - edit pet info
