var racer1 = document.getElementById("racer1");
var racer2 = document.getElementById("racer2");
var racer1Winner = document.getElementById("racer1Winner");
var racer2Winner = document.getElementById("racer2Winner");
var greenLight = document.getElementById("greenLight");
var redLight = document.getElementById("redLight");

//the distance the images must move to win the race.
const RACE_LENGTH = 1200;

var racer1Distance = 0;
var racer2Distance = 0;

racer1Winner.addEventListener("click",restartRace);
racer2Winner.addEventListener("click",restartRace);
redLight.addEventListener("click",startRace);

racer1.style.left = racer1Distance + "px";
racer2.style.left = racer2Distance + "px";
//moves the images accross the screen
function moveImages(){
    var racer1MoveSpeed = Math.ceil(Math.random() * 3);
    var racer2MoveSpeed = Math.ceil(Math.random() * 3);

    racer1.style.left = racer1Distance + "px";
    racer2.style.left = racer2Distance + "px";

    racer1Distance += racer1MoveSpeed;
    racer2Distance += racer2MoveSpeed;
}

//starts an interval timer to move the images and check for winners.
function startRace(){
    greenLight.className = "showImage";
    redLight.className = "hideImage";
    raceTimer = setInterval(raceImages,10);
}

//stops the interval timer
function stopRace(){
    clearInterval(raceTimer);
}

//resets anything that is changed when the race occurs back to how it was at the start of the race.
function restartRace(){
    racer1Distance = 0;
    racer2Distance = 0;

    racer1.style.left = racer1Distance + "px";
    racer2.style.left = racer2Distance + "px";

    racer1Winner.className = "hideImage";
    racer2Winner.className = "hideImage";

    greenLight.className = "hideImage";
    redLight.className = "showImage";
}

//checks if either image has moved at least the distance of the race length variable
function checkForWinner(){
    if(racer1Distance >= RACE_LENGTH){
        console.log("racer1 wins");
        racer1Winner.className = "showImage";
        //TODO show the first racer winning image
        stopRace();
    }
    else if(racer2Distance >= RACE_LENGTH){
        console.log("racer2 wins");
        racer2Winner.className = "showImage";
        //TODO show the second racer winning image       
        stopRace();
    }
}

function raceImages(){
    moveImages();
    checkForWinner();
}
