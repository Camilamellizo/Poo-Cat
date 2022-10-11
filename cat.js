class cat {
    constructor(name) {
    this.name = "";
    this.age = 1;
    this.sound = null
    this.mood = "";
    this.hungry = 0;
    this.energy = 100;
    this.dormir = 100;
    }


    sleep(){
        if(dormir == 100){
            this.energy = 100
            this.hungry = 100
        } else {
            this.energy = 0
            this.hungry = 100
             
        }      
    }

    play(){
      if (this.energy == 0){
        return "Estoy cansad@, no tengo energia,necesito Dormir"
        } else {
        this.mood = "meow!! Estoy feliz, gracias por jugar conmigo!!"
        this.energy -= 50
        } 
    }
    
    feed(){
        if (this.hungry == 100){
            return "mmmm que llenit@ estoy, no tengo hambre"
        }else {
            this.energy -= 30
            this.hungry -= 40
            return "gracias por la comida"
        }
    }

    speak(){
        
    }

  }
  const pablo = new cat

  console.log(pablo)
  pablo.play
  console.log(pablo.energy)