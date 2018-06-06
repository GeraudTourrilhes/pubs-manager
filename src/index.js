import {listerPubs, listerPubsOuverte} from "./services/pubs.services";
import { Pub } from "./entite/Pub";

if(localStorage.getItem("pubsOpen") == null)
{
    localStorage.setItem("pubsOpen", JSON.stringify(listerPubsOuverte()));
}
 function ajouterPub(){
    let pubsOpen = JSON.parse(localStorage.getItem("pubsOpen"));
    let name = document.getElementById("name").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let pub = new Pub(name, firstName, lastName, "", "", "", "", "");
    let element = document.createElement('option');
    let texte = document.createTextNode(`Le  pub ${pub.name} appartient à ${pub.firstName} ${pub.lastName}`);
    element.appendChild(texte);
    document.getElementById("listePubs").appendChild(element);
    pubsOpen.push(pub);
    localStorage.setItem("pubsOpen", JSON.stringify(pubsOpen));
  }

window.ajouterPub=ajouterPub

function listePubs() {
    let pubsOpen = JSON.parse(localStorage.getItem("pubsOpen"));
    
    pubsOpen.forEach(pub => {
        console.log(pub);
        let element = document.createElement('option');
        let texte = document.createTextNode(`Le  pub ${pub._name} appartient à ${pub._firstName} ${pub._lastName}`);
        element.appendChild(texte);
        document.getElementById("listePubs").appendChild(element);
        
    });
    

}

listePubs();


  

