class cat {
    constructor(name) {
    this.name = name;
    this.sound = null
    this.mood = "";
    this.hungry = 0;
    this.energy = 100;
    this.dormir = 100;
    }


    sleep(){
        if(this.energy <=75 ){            
            this.energy += 25
        } 
        if(this.hungry <=50){
            this.hungry +=50
        }      
    }

    play(){
        if (this.energy >= 50) {
            this.mood = "meow!! Estoy feliz, gracias por jugar conmigo!!"
            this.energy -= 50
            this.hungry += 50
        } 
    }
    
    feed(){
        if (this.hungry <= 60){          
            this.energy += 25
            this.hungry -= 50
          }              
        }
    }
   
    
  
 /*  const pablo = new cat

  console.log(pablo)
  pablo.play
  console.log(pablo.energy) */