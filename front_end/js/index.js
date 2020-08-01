document.addEventListener("DOMContentLoaded", () => {
    fetchPets()
    createForm()

    
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

// create a form for user to input pet info for new pet

function createForm(){
    let petForm = document.getElementById('create-pet')
    // console.log(petForm)
    petForm.innerHTML += 
    `
    <h2>Get Started by creating your pet below!</h2>
        <form class="form-inline">
            <div class="form-group">
            <label for="name" class="sr-only">Pet Name</label>
            <input type="name" class="form-control" id="name" placeholder="Enter Pet Name">
            </div>
            <div class="form-group">
            <label for="owner" class="sr-only">Owner Name</label>
            <input type="owner" class="form-control" id="owner" placeholder="Enter Owner's Name">
            </div>
            <select id= 'pet-options' style='width:150px;' class="custom-select  ">
                <option selected>Select Pet Type</option>
                <option value="1">Dog</option>
                <option value="2">Lizard</option>
                <option value="3">Dragon</option>
            </select>
            <button type="submit" class="btn btn-primary ">Create Pet!</button>
        </form>
    `
    //add event listener to form
    petForm.addEventListener('submit', petFormSubmission)
}

function petFormSubmission() {
    // debugger;
    event.preventDefault();
    //Grab values submitted by user
    let petName = document.getElementById('name').value;
    let owner = document.getElementById('owner').value;
    let pet_type = document.getElementById('pet-options').value;
  

    console.log(petName, owner, pet_type)
}



//edit  - edit pet info
