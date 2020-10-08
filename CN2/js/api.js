function data(jsonData){
  var cnt=0;
  
  for(var i=0;i<=7;i++){
    for(var j=0;j<50;j++){
    if((jsonData["matches"][j]["team-1"]=="Mumbai Indians") && i==0 && jsonData["matches"][j]["matchStarted"]==false ){
      var node = document.createElement("LI");
      var textnode=document.createTextNode("versus "+jsonData["matches"][j]["team-2"]);
      node.appendChild(textnode);
      document.getElementById("kartiklist"+i).appendChild(node)
    }
    if(jsonData["matches"][j]["team-1"]=="Kolkata Knight Riders" && i==1 && jsonData["matches"][j]["matchStarted"]==false ){
      var node = document.createElement("LI");
      var textnode=document.createTextNode("versus "+jsonData["matches"][j]["team-2"]);
      node.appendChild(textnode);
      document.getElementById("kartiklist"+i).appendChild(node)
    }
    if(jsonData["matches"][j]["team-1"]=="Rajasthan Royals" && i==2 && jsonData["matches"][j]["matchStarted"]==false ){
      var node = document.createElement("LI");
      var textnode=document.createTextNode("versus "+jsonData["matches"][j]["team-2"]);
      node.appendChild(textnode);
      document.getElementById("kartiklist"+i).appendChild(node)
    }
    if(jsonData["matches"][j]["team-1"]=="Royal Challengers Bangalore" && i==3 && jsonData["matches"][j]["matchStarted"]==false ){
      var node = document.createElement("LI");
      var textnode=document.createTextNode("versus "+jsonData["matches"][j]["team-2"]);
      node.appendChild(textnode);
      document.getElementById("kartiklist"+i).appendChild(node)
    }
    if(jsonData["matches"][j]["team-1"]=="Sunrisers Hyderabad" && i==4 && jsonData["matches"][j]["matchStarted"]==false ){
      var node = document.createElement("LI");
      var textnode=document.createTextNode("versus "+jsonData["matches"][j]["team-2"]);
      node.appendChild(textnode);
      document.getElementById("kartiklist"+i).appendChild(node)
    }
    
    if(jsonData["matches"][j]["team-1"]=="Kings XI Punjab" && i==6 && jsonData["matches"][j]["matchStarted"]==false ){
      var node = document.createElement("LI");
      var textnode=document.createTextNode("versus "+jsonData["matches"][j]["team-2"]);
      node.appendChild(textnode);
      document.getElementById("kartiklist"+i).appendChild(node)
    }
    if(jsonData["matches"][j]["team-1"]=="Chennai Super Kings" && i==7 && jsonData["matches"][j]["matchStarted"]==false ){
      var node = document.createElement("LI");
      var textnode=document.createTextNode("versus "+jsonData["matches"][j]["team-2"]);
      node.appendChild(textnode);
      document.getElementById("kartiklist"+i).appendChild(node)
    }
    }
  }

}


async function fetchTopFive() {
    const URL = `https://cricapi.com/api/matches?apikey=ZVGdKnFu0DXGRcUcDK3sWCV3XYG2`; 
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      data(jsonData);
    } else {
      throw Error(response.statusText);
    }
  }
  
  fetchTopFive();
  