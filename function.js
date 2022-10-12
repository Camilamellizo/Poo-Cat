const gato = new cat

function init(){
    const name = document.getElementById("name").value;
    document.getElementById("text-name").innerHTML = name;
    
    if (name.length){
        const auth =  document.getElementById("auth");
        const button_sleep =  document.getElementById("button_sleep");
        const button_eat =  document.getElementById("button_eat");
        const text_name =  document.getElementById("text-name");
        const cat_eat =  document.getElementById("cat-eat");
        const cat_sleep =  document.getElementById("cat-sleep");
        const cat_play =  document.getElementById("cat-play");
        const button_play =  document.getElementById("button_play");
        const energy =  document.getElementById("energy");
        const hungry =  document.getElementById("hungry");
        const number1 =  document.getElementById("number1");
        const number2 =  document.getElementById("number2");
        const separador1 =  document.getElementById("separador1");
        const restablecer =  document.getElementById("restablecer");
    
        auth.style.visibility = 'hidden';  
        text_name.removeAttribute("hidden");

        energy.removeAttribute("hidden");  
        hungry.removeAttribute("hidden");  
        number1.removeAttribute("hidden");  
        number2.removeAttribute("hidden");  
        separador1.removeAttribute("hidden"); 
        
        button_sleep.removeAttribute("hidden"); 
        button_eat.removeAttribute("hidden");               
        button_play.removeAttribute("hidden");            
        restablecer.removeAttribute("hidden"); 
    
        gato.name = name
        

    } else{
        alert("Escribe un Nombre para poder iniciar el Juego")
    }
    
}


function clean(){
    
    const auth =  document.getElementById("auth")     
    const button_sleep =  document.getElementById("button_sleep");
    const button_eat =  document.getElementById("button_eat");
    const text_name =  document.getElementById("text-name");
    const button_play =  document.getElementById("button_play");
    const energy =  document.getElementById("energy");
    const hungry =  document.getElementById("hungry");
    const number1 =  document.getElementById("number1");
    const number2 =  document.getElementById("number2");
    const separador1 =  document.getElementById("separador1");
   
        auth.style.visibility = 'visible';  

        text_name.hidden = true;
        energy.hidden = true;  
        hungry.hidden = true;  
        number1.hidden = true;  
        number2.hidden = true;
        separador1.hidden = true;

        button_sleep.hidden = true;
        button_eat.hidden = true;
        button_play.hidden = true;
}




function catsleep(){
   
    const cat_sleep =  document.getElementById("cat-sleep"); 
    const number1 =  document.getElementById("number1");
    const number2 =  document.getElementById("number2");
    
    const status = gato.sleep()
    number1.innerHTML = gato.energy;
    number2.innerHTML = gato.hungry;
        
    if(status){
        cat_sleep.removeAttribute("hidden"); 
        alert("Me tomare una pequeña siesta");
    }else{
        cat_sleep.hidden = true;
        alert("Tengo muuucha energia, Que haremos ahora?")
    }
}

function catPlay(){ 
    const cat_play =  document.getElementById("cat-play");
    const number1 =  document.getElementById("number1");
    const number2 =  document.getElementById("number2");

    const status = gato.play()
    number1.innerHTML = gato.energy;
    number2.innerHTML = gato.hungry;

    if(status) { 
        cat_play.removeAttribute("hidden");
        alert("Gracias por jugar, conmigo¡¡¡¡")
    } else {
        cat_play.hidden = true;
        alert("Estoy muyyyy cansado, necesito Dormir") 

    }
}
    
function cateat(){
    const cat_eat =  document.getElementById("cat-eat");
    const number1 =  document.getElementById("number1");
    const number2 =  document.getElementById("number2");

    const status = gato.feed()
    number1.innerHTML = gato.energy;
    number2.innerHTML = gato.hungry;

    if(status){
       cat_eat.removeAttribute("hidden");
       alert("Tengo mucha hambre nececito mas Comida¡¡¡¡")
    } else {   
        cat_eat.hidden = true;
        alert("No tengo hambre, que haremos ahora?")
    }
        
}
