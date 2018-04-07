
var clock,date,hour, min, sec, backColor;

function digitalClock(){

	date= new Date();
	tdate= date.getDate();

	hour= date.getHours();
	min= date.getMinutes();
	sec= date.getSeconds();

if(hour <= 9){
	hour= '0' + hour;
}

if(min<= 9){
	min= '0' + min;
}

if(sec<= 9){
	sec= '0' + sec;
}

clock= hour + ":"+ min + ":"+ sec ;

//below variable will change the color based on the time change
backColor= "#"+ hour+ min+ sec;

document.getElementById("clock").innerHTML= clock;

document.body.style.background= backColor;

setTimeout(digitalClock);

//means the function will be called every second(1000)
}

digitalClock();