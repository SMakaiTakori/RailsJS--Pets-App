class Pet {

    constructor(id, name, owner, animal_type, mood = "neutral", phrase){
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
        <li><label>Pet Name: </label>  ${this.name} </li>
        <li><label>Pet Owner: </label> ${this.owner}</li> 
        <li><label>Pet Type: </label> ${this.animal_type}</li> 
        <li><label>Mood: </label> ${this.mood}</li> 
        </ul>     
         `
    }

   
   
   
}
