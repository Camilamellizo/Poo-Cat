

function init(){
    const name = document.getElementById("name").value;

    document.getElementById("text-name").innerHTML = name;
    
    const auth =  document.getElementById("auth")
    const oculto =  document.getElementById("oculto").style.visibility = "hidden";
   
    if (name.length){
        auth.style.visibility = 'hidden';
        oculto.style.visibility = 'visible';
        
    } else{
        alert ("Escriba un Nombre para poder iniciar el juego")
    }

    
}


