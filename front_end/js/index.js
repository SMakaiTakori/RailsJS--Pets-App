document.addEventListener("DOMContentLoaded", () => {
    // fetchPets()
    
})

    const BASE_URL = "http://localhost:3000"

// read - fetch pets index

function fetchPets(){
    fetch(`${BASE_URL}/pets`)
    .then(resp => resp.json())
    .then(pets => {
        console.log(pets)
    })
}

fetchPets()

// create - create a new pet

//edit  - edit pet info
