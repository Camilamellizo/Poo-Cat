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
        const sleep =  document.getElementById("sleep");
        const number1 =  document.getElementById("number1");
        const number2 =  document.getElementById("number2");
        const number3 =  document.getElementById("number3");
        const separador1 =  document.getElementById("separador1");
        const separador2 =  document.getElementById("separador2");
        const restablecer =  document.getElementById("restablecer");
    
        auth.style.visibility = 'hidden';  
        text_name.removeAttribute("hidden");

        energy.removeAttribute("hidden");  
        hungry.removeAttribute("hidden");  
        sleep.removeAttribute("hidden");  
        number1.removeAttribute("hidden");  
        number2.removeAttribute("hidden");  
        number3.removeAttribute("hidden"); 
        separador1.removeAttribute("hidden"); 
        separador2.removeAttribute("hidden");   
        
        button_sleep.removeAttribute("hidden"); 
        button_eat.removeAttribute("hidden");               
        button_play.removeAttribute("hidden");            
        button_sound.removeAttribute("hidden");
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
    const sleep =  document.getElementById("sleep");
    const number1 =  document.getElementById("number1");
    const number2 =  document.getElementById("number2");
    const number3 =  document.getElementById("number3");
    const separador1 =  document.getElementById("separador1");
    const separador2 =  document.getElementById("separador2");
   
        auth.style.visibility = 'visible';  

        text_name.hidden = true;
        energy.hidden = true;  
        hungry.hidden = true;  
        sleep.hidden = true;  
        number1.hidden = true;  
        number2.hidden = true;
        number3.hidden = true;
        separador1.hidden = true;
        separador2.hidden = true;

        button_sleep.hidden = true;
        button_eat.hidden = true;
        button_play.hidden = true;
        button_sound.hidden = true;
}

const number1 =  document.getElementById("number1"); 
const number2 =  document.getElementById("number2");
const number3 =  document.getElementById("number3");


function catsleep(){
   
    const cat_sleep =  document.getElementById("cat-sleep"); 
        
    if (gato.energy == 0){
    alert("Me tomare una pequeña siesta");
    cat_sleep.removeAttribute("hidden"); 
    gato.sleep()
    }else{
    cat_sleep.hidden = true;
    alert("Tengo muuucha energia, Que haremos ahora?")
    } 
    number1 = document.getElementById("number1").value;
    document.getElementById("number1").innerHTML = number1;

}

function catPlay(){  

    const cat_play =  document.getElementById("cat-play");

    if(gato.energy == 0){
        cat_play.hidden = true;
        alert("Estoy muyyyy cansado, necesito Dormir") 

    }else{
        gato.play()
        cat_play.removeAttribute("hidden");
        
    }
}
    
function cateat(){
    const cat_eat =  document.getElementById("cat-eat");

    if(gato.hungry == 100){
       cat_eat.removeAttribute("hidden");
       alert("Tengo mucha hambre nececito mas Comida¡¡¡¡")
       gato.feed()
    }
    if(gato.hungry >= 50){
        cat_eat.hidden = true;
        alert("No tengo hambre, que haremos ahora?")
    }
        
}
