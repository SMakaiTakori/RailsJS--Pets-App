document.addEventListener("DOMContentLoaded", () => {
    createForm()
    activityEvents()
 
})

const BASE_URL = "http://localhost:3000"

function createForm(){
    let petForm = document.getElementById('create-pet')
    // console.log(petForm)
    petForm.innerHTML += 
    `
    <h2>Get Started by creating your pet below!</h2>
        <form name= "create-pet" class="form-inline">
            <div class="form-group">
            <input type="name" class="form-control" id="name" placeholder="Enter Pet Name">
            </div>
            <div class="form-group">
            <input type="owner" class="form-control" id="owner" placeholder="Enter Owner's Name">
            </div>
            <select id="options" class="custom-select" style='width:155px;'>
                <option selected>Select Pet Type</option>
                <option value="Dragon">Dragon</option>
                <option value="Dog">Dog</option>
                <option value="Fox">Fox</option>
                <option value="Lizard">Lizard</option>
            </select>          
            <button type="submit" class="btn btn-primary ">Create Pet!</button>
        </form>
    `
    //add event listener to form
    petForm.addEventListener('submit', petFormSubmission) 
   
}

function petFormSubmission() {
    event.preventDefault();
    //Grab values submitted by user
    let name = document.getElementById('name').value;
    let owner = document.getElementById('owner').value;
    let animal_type = document.getElementById('options').value;    
    //bundle these values so I can make a fetch POST request    
    let pet = {
        name: name,
        owner: owner,
        animal_type: animal_type,
    }
    //fetch Post request to subsist the input data to db
    if (pet.name != "" && pet.owner != "") {
        fetch(`${BASE_URL}/pets`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
        })
        .then(resp => resp.json())
        .then(pet => {
            let p = new Pet(pet.id, pet.name, pet.owner, pet.animal_type, pet.mood, pet.phrase)
                p.renderPet();
                p.displayPet();
                let petForm = document.querySelector('.form-inline')
                // console.log(petForm)
                petForm.reset()
                
            let a = new Activity("Walking", pet.id)  
                a.displayActivities();                  
                editForm();
        })
    }   
}

function activityEvents(){
    // debugger;
    let walk = document.getElementById('walking')
    let timeout = document.getElementById('discipline')
    let feeding = document.getElementById('feeding')
    let medicine = document.getElementById('medicine')

    walk.addEventListener('click', activitySubmission)
    timeout.addEventListener('click', activitySubmission)
    feeding.addEventListener('click', activitySubmission)
    medicine.addEventListener('click', activitySubmission)
}

function activitySubmission(){
    event.preventDefault();
   
    let petId = event.target.parentElement.parentElement.dataset.id

        fetch(`${BASE_URL}/pets/${petId}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({mood: event.target.dataset.mood}
            )
        })
        .then(resp => resp.json())
        .then(pet => {
            //grabs current neutral mood on DOM
            let petMood = document.querySelector('li#mood')   
            //update DOM mood 
            petMood.innerHTML = `<label>Mood: </label>${pet.mood}`
    })        
}

function editForm(){
    // let editForm = document.getElementById('edit-pet')
    let editForm = document.getElementById('edit-pet')

    editForm.innerHTML += 
    `   <form name= "edit-pet" id = "editForm" class="form-inline">
        <div class="form-group">
        <input type="name" class="form-control" id="editname" placeholder="Edit Pet Name">
        </div>
        <div class="form-group">
        <input type="owner" class="form-control" id="editowner" placeholder="Edit Owner's Name">
        </div>
        <button type="submit" class="btn btn-primary id= "edit">Edit Pet!</button>     
        </form>   
    `
    //add event listener to form
    editForm.addEventListener('submit', editFormSubmission)  
}

function editFormSubmission(){
    event.preventDefault();
    // debugger;
    let name = document.getElementById('editname').value;
    let owner = document.getElementById('editowner').value;
    let petId = document.querySelector('div#activities').dataset.id

        fetch(`${BASE_URL}/pets/${petId}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                owner
            })
        })
        .then(resp => resp.json())
        .then(pet => { 
            let petName = document.querySelector('li#name')   
            let petOwner = document.querySelector('li#owner')
            //update DOM 
            petName.innerHTML = `<label>Pet Name: </label>${pet.name} |`
            petOwner.innerHTML = `<label>Pet Owner: </label>${pet.owner} |`

            let petForm = document.getElementById('editForm')
            petForm.reset()            
        })        
}
