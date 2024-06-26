let menuVisible = false
//funcion que oculta menu (no anda)
function mostrarOcultarMenu(){
    if(menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}