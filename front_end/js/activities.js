class Activity  {

    constructor(name, pet_id) {
        this.name = name;
        this.pet_id = pet_id;
    }

     displayActivities(){
        let a = document.getElementById('activities')
        let w = "../front_end/css/images/leash.png";
        let f = "../front_end/css/images/foodBowl.jpg";
        let d = "../front_end/css/images/foodBowl.jpg";
        let m = "../front_end/css/images/foodBowl.jpg";
        
        a.innerHTML += 
        `
        <button> Walk me! <img ${a.src = w}/></button>
        <button> Discipline me! ${a.src = d}  </button>
        <button> Feed me! ${a.src = f} </button>
        <button> Medicine! ${a.src = m} </button>         
        `
    }
}

    
