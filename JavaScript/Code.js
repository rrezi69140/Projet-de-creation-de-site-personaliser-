

function Test() {
var Utilisateur = prompt("Entrer le nom d'utilisateur : ")
var Mdp = prompt("Entrer votre Mot de passe: ")
if (Utilisateur ==="Admin" && Mdp === "Root"){
    window.open("Pages/PageAdmin/indexAdmin.html")
    
    

}
else if  (Utilisateur ==="Admin"){
    alert("Mot de passe eronner")
}
else if  (Mdp ==="Root"){
    alert("Utilisateur  eronner")
}
    
else{
    alert("Utilisateur et MDP  erroner")
}
   
}


var  TableauMembre = new Array() // creation du tableau ou seron stocker les membres




 
function CreationMembre(){


    var CreationMembre = prompt("voulez vous crée un nouveau memrbe (Oui/Non) : "); // demande de creation de mmembre

    if (CreationMembre = "Oui") {
    
        var prenom = prompt("Entrer le prenom du membre");//saisie du prenom du membre
        TableauMembre.push(prenom);
      
    }

    else {
            
            if ( CreationMembre === "Non") {                                            
                document.write("non");
            }
            
            else{
                document.write("Saisie incorecte");
            }
        }
    

    

    }

function AfficherMembre(){
    
    document.getElementById("ZoneAffichage").innerHTML="Voici la liste des membres: " +TableauMembre;
}