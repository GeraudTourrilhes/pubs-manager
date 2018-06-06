var pubsJSON = require("../../mocks/pubs.json");
import {Pub} from "../entite/Pub.js";



export function listerPubs() {

  var pubs = [];
  pubsJSON.forEach(pub => {
   
      pubs.push(new Pub(pub.name, pub.owner.firstName, 
        pub.owner.lastName, pub.owner.mail, 
        pub.openDays, pub.openHours.start, 
        pub.openHours.end, pub.beers));
    
  });

  return pubs;

}

export function listerPubsOuverte() {
var date_jour=new Date();
var tab_jour=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var jour = tab_jour[date_jour.getDay()];
  var res = [];
  pubsJSON.forEach(pub => {
    if(pub.openDays.includes(jour))
    {
      
      res.push(new Pub(pub.name, pub.owner.firstName, 
        pub.owner.lastName, pub.owner.mail, 
        pub.openDays, pub.openHours.start, 
        pub.openHours.end, pub.beers));
    }
    
  });
  return res;
}
