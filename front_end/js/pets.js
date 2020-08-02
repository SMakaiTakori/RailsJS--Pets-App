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
        // petInfo.empty();
        petInfo.innerHTML = " "
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

    displayPet(){
        let petImage = document.getElementById('pet-image')
        let petData = document.getElementById('pet-info')
        let animal_type = document.getElementById('options').value; 
        
        let dragon = "../front_end/css/images/cutestDragon.png"; 
        let wolf = "../front_end/css/images/wolf.jpg"
        let panther = "../front_end/css/images/wolf.jpg"
        let lizard = "../front_end/css/images/wolf.jpg"

        // console.log(animal_type)
        // can be converted to a switch statement

            if (animal_type === 'Dragon'){     
                petImage.src = dragon;
            } else if (animal_type === 'Wolf'){
                petImage.src = wolf;
            } else if (animal_type === 'Panther'){
                petImage.src = panther;
            } else if (animal_type === 'Lizard'){
                petImage.src = lizard;
            } else {
                petImage.src = "";
            }
    }  
   
}
