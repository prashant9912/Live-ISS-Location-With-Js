
var a=0;
var flag=0;

function setup(){
    createCanvas(800,500);

    //loadJSON('http://api.open-notify.org/iss-now.json', yoo,'jsonp');
    setInterval(lol,1000);
}

function lol(){

    loadJSON('http://api.open-notify.org/iss-now.json', yoo,'jsonp');
   
    if(flag==1){
    if(a==0){
    document.getElementById("del").style.color = "red";
    a=1;
    }
    else if(a==1){
        document.getElementById("del").style.color = "green";
        a=0;
    }
    }
}
function yoo(data){
    flag=1;
 document.getElementById("del").innerHTML = "LIVE! ISS Position";  
 document.getElementById("del").style.backgroundColor = "lightgrey";     
 document.getElementById("lon").innerHTML = data.iss_position.longitude;
    
    document.getElementById("lat").innerHTML = data.iss_position.latitude;

    document.getElementById("iss").style.display = "block";
    
       
}
