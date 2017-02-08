if (Lang == "ca"){
	var days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var months=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
}
if (Lang == "en"){
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
}
if (Lang == "fr"){
	var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
	var months=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
}
if (Lang == "de"){
	var days = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
	var months=["Januar","Februar","Marz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];	
}

function updateClock(){ 
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
var currentYear = currentTime.getFullYear();
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h"){
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}
if (Clock == "12h"){
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}

document.getElementById("hour").innerHTML = currentHours;
document.getElementById("minute").innerHTML = currentMinutes;
document.getElementById("ampm").innerHTML = timeOfDay;

document.getElementById("weekday").innerHTML = days[currentTime.getDay()];
document.getElementById("date").innerHTML = currentDate;
document.getElementById("month").innerHTML = months[currentTime.getMonth()];
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}