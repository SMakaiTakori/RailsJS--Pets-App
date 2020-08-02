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
        let animal_type = document.getElementById('options').value; 
        
        let dragon = "../front_end/css/images/cutestDragon.png"; 
        let fox = "../front_end/css/images/fox.png"
        let dog = "../front_end/css/images/dog.jpg"
        let lizard = "../front_end/css/images/lizard.jpg"

        // console.log(animal_type)
        // can be converted to a switch statement

            if (animal_type === 'Dragon'){
                petImage.style.display = "inline-block";     
                petImage.src = dragon;
            } else if (animal_type === 'Dog'){
                petImage.style.display = "inline-block"; 
                petImage.src = dog;
            } else if (animal_type === 'Fox'){
                petImage.style.display = "inline-block"; 
                petImage.src = fox;
            } else if (animal_type === 'Lizard'){
                petImage.style.display = "inline-block"; 
                petImage.src = lizard;
            } else {
                petImage.src = "";
            }
    }  
   
}
