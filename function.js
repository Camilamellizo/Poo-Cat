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

    } else{
        alert("Escribe un Nombre para poder iniciar el Juego")
    }
    
}

function clean(){
    const auth =  document.getElementById("auth");
    auth.style.visibility = 'visible';    
   
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
   
        text_name.style.visibility = 'hidden';

        energy.style.visibility = 'hidden';  
        hungry.style.visibility = 'hidden';  
        sleep.style.visibility = 'hidden';  
        number1.style.visibility = 'hidden';  
        number2.style.visibility = 'hidden';
        number3.style.visibility = 'hidden';
        separador1.style.visibility = 'hidden';
        separador2.style.visibility = 'hidden';

        button_sleep.style.visibility = 'hidden';
        button_eat.style.visibility = 'hidden';
        button_play.style.visibility = 'hidden';
        button_sound.style.visibility = 'hidden';
         
       
}
    







/* cat_eat.removeAttribute("hidden");            
cat_sleep.removeAttribute("hidden"); 
cat_play.removeAttribute("hidden");      */