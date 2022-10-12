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
        let status = false
        if (this.energy < 100 && this.energy >= 0) {
            this.energy += 50  
            status = true                    
        }
        if (this.hungry < 100 && this.hungry >= 0){
            this.hungry += 50
            status = true
        }
        return status
    }

    play(){
        let status = false

        if (this.energy <= 100 && this.energy > 0) {
            this.energy -= 50  
            status = true      
        }
        if (this.hungry < 100 && this.hungry >= 0){
            this.hungry += 50
            status = true
        }
        return status
    }
    
    feed(){
        let status = false

        if (this.energy < 100 && this.energy >= 0) {
            this.energy += 50  
            status = true

        }
        if (this.hungry <= 100 && this.hungry > 0){
            this.hungry -= 50
            status = true
        }
        return status
    }
}