class Pet {

    constructor(id, name, owner, animal_type, mood, phrase){
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.animal_type = animal_type;
        this.mood = mood;
        this.phrase = phrase;
    }

    
    renderPet(){
        let petInfo = document.getElementById('pet-info')

        petInfo.innerHTML +=

        `
        <ul>
        <label>Pet Name: </label> <li> ${this.name} </li>
        <label>Pet Owner: </label><li> ${this.owner}</li> 
        <label>Pet Type: </label><li> ${this.animal_type}</li> 
        <label>Mood: </label> <li>${this.mood}</li> 
        </ul>     
         `
    }


    
}