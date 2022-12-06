

var Anee = new Date()
AnéeRecuperer = Anee.getFullYear()


function Conexion() {
var Utilisateur = prompt("Entrer le nom d'utilisateur : ") // creation de la variable utilisateur
var Mdp = prompt("Entrer votre Mot de passe: ")//creation de la variable du mot de passe
if (Utilisateur ==="Admin" && Mdp === "Root"){ // si l'utilisateur est egale a admin et le mdp est egale a root 
    window.open("Pages/PageAdmin/indexAdmin.html")// alors redirection vesr la page d'aceuile admin
    
    

}
else if  (Utilisateur ==="Admin"){ // si seul l'utilisatuer est bon 
    alert("Mot de passe eronner")//alors afficher mdp erroner
}
else if  (Mdp ==="Root"){ // si seul mdp erronner
    alert("Utilisateur  eronner")  // alors afficher  utilisateur erroner             
}
    
else{
    alert("Utilisateur et MDP  erroner") // sinon afficher utilisateur et mdp faux
}
   
}
function ConexionBis() {
    var Utilisateur = prompt("Entrer le nom d'utilisateur : ") // creation de la variable utilisateur
    var Mdp = prompt("Entrer votre Mot de passe: ")//creation de la variable du mot de passe
    if (Utilisateur ==="Admin" && Mdp === "Root"){ // si l'utilisateur est egale a admin et le mdp est egale a root 
        window.open("PageAdmin/indexAdmin.html")// alors redirection vesr la page d'aceuile admin
        
        
    
    }
    else if  (Utilisateur ==="Admin"){ // si seul l'utilisatuer est bon 
        alert("Mot de passe eronner")//alors afficher mdp erroner
    }
    else if  (Mdp ==="Root"){ // si seul mdp erronner
        alert("Utilisateur  eronner")  // alors afficher  utilisateur erroner             
    }
        
    else{
        alert("Utilisateur et MDP  erroner") // sinon afficher utilisateur et mdp faux
    }
       
    }


function Deconexion() {
    var Saisie = prompt("Voulez vous vous deconectez ? Oui/Non ") // creation de la variable utilisateur
    if (Saisie ==="Oui" ){ // si l'utilisateur est egale a admin et le mdp est egale a root 
        window.open("../../index.html")// alors redirection vesr la page d'aceuile admin
     
    }
}
    


var  TableauPrenomMembre = new Array();// creation du tableau ou seron stocker les membres
var  TableauNomMembre = new Array();// creation du tableau ou seron stocker les membres
var  TableauAgeMembre = new Array();// creation du tableau ou seron stocker les membres
var TableIdMembre = new Array();// creation du tableau ou seron stocker les membres



 
function CreationMembre(){ // creation de la donction qui va gerer la creation d'un nouveau membre


    var CreationMembre = prompt("voulez vous crée un nouveau membre (Oui/Non) : "); // demande de creation de mmembre
    

    if (CreationMembre = "Oui") {
        var IdMembre = 0; // initialisation de la variable ID
        var Indice = 0 // initialisation de la variable Indice
        var NombreMembre = parseInt(prompt("Combient de membre voulez vous crée"));// demande du nombre de mmebre a crée
        
        for (Indice; Indice < NombreMembre;Indice++){ // Tant que l'indice est plus petit que le nombres de membre que l'on veut entrer on repete la boucle de saisie et de contage des membres
            IdMembre = IdMembre+1;
            var prenom = prompt("Entrer le prenom du membre n°"+IdMembre);//saisie du prenom du membre
            var Nom = prompt("Entrer le nom du membre n°"+IdMembre)//saisie du nom du membre
            var AneeNaissance = prompt("Entrer l'année de naissance du membre n°"+IdMembre)//saisie de l'anner de naissance  du membre
            var Majoriter = ( AnéeRecuperer - AneeNaissance); 
            
                          
                          if( Majoriter >= 18) {
                                  majeur = "Oui";             // verification de l'age
                          }

                          else {
                                  majeur = "Non";
                          }


            TableauPrenomMembre.push(prenom+"<br>"); // ajout du prenom dans le tableau 
            TableIdMembre.push(IdMembre+"<br>");// ajout de l'id dans le tableau 
            TableauAgeMembre.push(majeur+"<br>");// ajout de la majoriter  dans le tableau 
            TableauNomMembre.push(Nom+"<br>");// ajout du nom dans le tableau 
        
        }
       

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

   

function AfficherMembre(){  //creation de la fonction qui va venir afficher les mmebre 
    
    var TablePrenomMembreString = TableauPrenomMembre.join(""); // coversio du tableau en chaine de caractère pour suprimer la virgule a l'affichage
    var TableIdMembreString = TableIdMembre.join("");// coversion du tableau en chaine de caractère pour suprimer la virgule a l'affichage
    var TableNomMembreString = TableauNomMembre.join("");// coversion du tableau en chaine de caractère pour suprimer la virgule a l'affichage
    var TableAgeMembreString = TableauAgeMembre.join("");// coversion du tableau en chaine de caractère pour suprimer la virgule a l'affichage
    document.getElementById("ZoneAffichageId").innerHTML=TablePrenomMembreString; //Afficher letableau dans la zone identifier ici ZoneAficchageX
    document.getElementById("ZoneAffichagePrenomMembre").innerHTML=TableIdMembreString;//Afficher letableau dans la zone identifier ici ZoneAficchageX
    document.getElementById("ZoneAffichageNomMembre").innerHTML=TableNomMembreString;//Afficher letableau dans la zone identifier ici ZoneAficchageX
    document.getElementById("ZoneAffichageAgeMembre").innerHTML=TableAgeMembreString;//Afficher letableau dans la zone identifier ici ZoneAficchageX

    
   
}

function FonctionRecherche() {
    
    let input = document.getElementById('BareRecherche').value //recuperation de ce qui a été entrer dans la bare de recherche
    input=input.toLowerCase(); //coversion en minuscule
    window.open("Pages/"+input+".html") // ouvrire la page corespondante
    
}   

function FonctionRechercheBis() {
    
    let input = document.getElementById('BareRecherche').value
    input=input.toLowerCase();
    window.open(input+".html")
    
}   

function FonctionRechercheAdmin() {
    
    let input = document.getElementById('BareRecherche').value
    input=input.toLowerCase();
    window.open(input+"Admin.html")
}




var  TableauNomArticle = new Array();// creation du tableau ou seron stocker les noms des article
var  TableauQuantiterArticle = new Array();// creation du tableau ou seron stocker les quantiter
var TablePrixUniter = new Array();// creation du tableau ou seron stocker les prix a l'uniter
var TablePrixLot = new Array();// creation du tableau ou seron stocker lex prix au lot
var PrixTotal = 0; // initialisation de la variable PrixTotal


function InsertionValeur(){ // creation de la fonction qui va gerer l'insertion de valeur


    var DemandeInsertionValeur = prompt("voulez vous insrer des nouvelles valeurs (Oui/Non) : "); // demande d'insertion d'une nouvelle valeur
    

    if (DemandeInsertionValeur = "Oui") {
        var IdArticle = 0; // initialisation de la variable IDArticle
        var Indice = 0 // initialisation de la variable Indice
        var NombreArticle = parseInt(prompt("Combient d'article voulez vous inserer"));// demande du nombre d'article   crée
        
        for (Indice; Indice < NombreArticle;Indice++){ // Tant que l'indice est plus petit que le nombres d'article que l'on veut entrer on repete la boucle de saisie et  on compte le nombre d'artilce
            IdArticle = IdArticle+1;
            var NomArticle = prompt("Entrer le nom de l'article n°"+IdArticle);//saisie du nom de l'article
            var QuantiterArticle = parseFloat(prompt("Entrer la quantier de l'article  n°"+IdArticle))//saisie de la quatiter d'article
            var PrixUniter = parseFloat(prompt("Entrer le prix a l'uniter de l'article n°"+IdArticle))//saisie du prixs a l'uniter
            var PrixLot = (QuantiterArticle*PrixUniter);  //Calcul du pix du lot 
            PrixTotal = PrixTotal+PrixLot; // calcul du prix total (somme des prix du lot)
                          
                          


            TableauNomArticle.push(NomArticle+"<br>"); // ajout du  nom de l'article dans le taleau
            TableauQuantiterArticle.push(QuantiterArticle+"<br>");// ajout de la quantiter de l'article
            TablePrixUniter.push(PrixUniter+"€"+"<br>");// ajout des prix a l'uniter dans le tableau
            TablePrixLot.push(PrixLot+"€"+"<br>");// ajout des prix des lot dans le tableau
        
        }

        

    }

    else {
            
            if ( DemandeInsertionValeur === "Non") {                                            
                document.write("non");
            }
            
            else{
                document.write("Saisie incorecte");
            }
        }
    

    

    }

   

function CalculerValeurs(){  //creation de la fonction qui va venir afficher les valeurs 
    
    var TableauNomArticleString = TableauNomArticle.join(""); // coversio du tableau en chaine de caractère pour suprimer la virgule a l'affichage
    var TableauQuantiterString = TableauQuantiterArticle.join("");// coversion du tableau en chaine de caractère pour suprimer la virgule a l'affichage
    var TablePrixUniterString = TablePrixUniter.join("");// coversion du tableau en chaine de caractère pour suprimer la virgule a l'affichage
    var TablePrixLotString = TablePrixLot.join("");// coversion du tableau en chaine de caractère pour suprimer la virgule a l'affichage
    document.getElementById("ZoneAffichageNomArticle").innerHTML=TableauNomArticleString; //Afficher letableau dans la zone identifier ici ZoneAficchageX
    document.getElementById("ZoneAffichageQuatiter").innerHTML=TableauQuantiterString;//Afficher letableau dans la zone identifier ici ZoneAficchageX
    document.getElementById("ZoneAffichagePrixUniter").innerHTML=TablePrixUniterString;//Afficher letableau dans la zone identifier ici ZoneAficchageX
    document.getElementById("ZoneAffichageAgePrixLot").innerHTML=TablePrixLotString;//Afficher letableau dans la zone identifier ici ZoneAficchageX
    document.getElementById("ZoneAffichageAgePrixTotal").innerHTML="PrixTotal:"+PrixTotal+"€";//Afficher letableau dans la zone identifier ici ZoneAficchageX

    
   
}
