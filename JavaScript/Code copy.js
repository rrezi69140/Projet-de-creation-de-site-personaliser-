

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


let TableauMembre = new Array() // creation du tableau ou seron stocker les membres


class Membre {
    constructor( ID, Nom, Prenom, AnnerNaissance, Portable, Majeur){ //      
        this.ID = ID;//
        this.Nom = Nom;//
        this.Prenom = Prenom;  //                                             // Creation de l'objet Membre
        this.AnnerNaissance = AnnerNaissance;//
        this.Portable = Portable;//
        this.Majeur = Majeur;//
    }
}

 
function CreationMembre(){


    AskCreationMembre = prompt("voulez vous crée un nouveau memrbe (Oui/Non) : "); // demande de creation de mmembre

    if (AskCreationMembre = "Oui") {
    
        NumIdMembre += 1; // comptage pour l'id du membre
        var nom = prompt("Entrer le nom du membre"); // saisie du nom du membre
        var prenom = prompt("Entrer le prenom du membre");//saisie du prenom du membre
        var annerNaissance = parseInt(prompt("Entrer l'anner de naissancce du membre"));  //saisie de l'anner de naissance du membre
        var portable = prompt("Entrer le portable du membre");//saisie du nemereau de telephone du mmembre
        var age = (2022 - annerNaissance);//Calcul de l'age du mmembre
        
        if( age >= 18) { // si membre majeur
                majeur = "oui";  // alors la variable majeur prend la valeur oui            
        }

        else { // sinon 
                majeur = "non"; //la variable majeur prend la valeur non
        }

    }

    else {
            
            if (AskCreationMembre === "Non") {                                            
                document.write("non");
            }
            
            else{
                document.write("Saisie incorecte");
            }
        }
    

    const nouveau = new Membre(NumIdMembre ,nom, prenom, annerNaissance, portable, majeur);  //creation avec l'objet membre avec les information saisie

    }

