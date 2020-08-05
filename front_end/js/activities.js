class Activity  {
    constructor(name, pet_id) {
        this.name = name;
        this.pet_id = pet_id;
    }

     displayActivities(){
        let activitiesDiv = document.getElementById('activities')
        activitiesDiv.style.backgroundColor = "purple";
        activitiesDiv.style.float = "right";

        activitiesDiv.setAttribute('data-id', this.pet_id)

        let activitiesHeader = document.getElementById('heading')
        activitiesHeader.style.display = "inline-block";
        activitiesHeader.innerHTML = `<h3> Activities:   </h3>`

        let walkImage = document.getElementById('walking')
        let walking = "../front_end/css/images/leash.png";
        walkImage.style.display = "inline-block";
        walkImage.src = walking;
        walkImage.setAttribute('data-mood', "happy")
        
        let timeoutImage = document.getElementById('discipline')
        let timeout = "../front_end/css/images/timeout.png";
        timeoutImage.style.display = "inline-block";
        timeoutImage.src = timeout;

        let feedingImage = document.getElementById('feeding')
        let feeding = "../front_end/css/images/foodBowl.png";
        feedingImage.style.display = "inline-block";
        feedingImage.src = feeding;
        
        let medicineImage = document.getElementById('medicine')
        let medicine = "../front_end/css/images/medicine.png";
        medicineImage.style.display = "inline-block";
        medicineImage.src = medicine;        
    }

    walkPet(){
        let petMood = document.getElementById('mood')
        text = petMood.textContent.split(':')
        mood = text[1] 
        mood = "Happy";    
     }



}


    
