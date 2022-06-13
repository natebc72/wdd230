//this is for the windchill in the weather box
var temp= 50;
var wSpeed= 10;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

document.getElementById('temp').innerHTML= temp;
document.getElementById('windS').innerHTML= wSpeed;

if (temp <= 50){
    var windChill= Math.round(windChill);
    document.getElementById("windChill").innerHTML= windChill; 
} else{
    var windChill= "None";
    document.getElementById("windChill").innerHTML= windChill;
}
