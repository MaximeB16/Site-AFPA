function openNav() {
    document.getElementById("mySidenav").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("active");
}

function suppPub(){
    document.getElementById("pub").remove();
}

function verifForm(){
    if (document.getElementById("nom").value.length==0){
        alert("Le Nom doit être renseigner !!");
    }else if (document.getElementById("prenom").value.length==0){
        alert("Le Prenom doit être renseigner !!");
    }else if (!(document.getElementById("sexeF").checked) && !(document.getElementById("sexeH").checked)){
        alert("Le Sexe doit être renseigner !!")
    }else if (document.getElementById("cp").value.length!=5){
        alert("Le Code postal doit être rensigner !!")
    }else if (isNaN(document.getElementById("cp").value)==true){
        alert("Le Code postal est invalide !!")
    }else if (document.getElementById("mail").value.length==0){
        alert("Le Mail doit être renseigner !!")
    }
}