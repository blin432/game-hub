var enterPlayerOne=document.getElementById("player-one");
var enterPlayerTwo=document.getElementById("player-two");
var playerSelect = document.getElementById("pselect-finish");
var startPlaying= document.getElementById("start-playing");
var beginStatement=document.getElementById("begin");
var playerOneInput=document.getElementById("player-one-input");
var playerTwoInput=document.getElementById("player-two-input");
var pickGame=document.getElementById("pickgame-text");

function onePlayer(){
    if (enterPlayerTwo.style=""){
     enterPlayerOne.style.setProperty("display","block");
     playerSelect.style.setProperty("display","block");
} else if(enterPlayerTwo.style="block"){
     enterPlayerOne.style.setProperty("display","block");
    enterPlayerTwo.style.setProperty("display","none");
    playerSelect.style.setProperty("display","block");
};

}

function twoPlayers(){
    enterPlayerOne.style.setProperty("display","block");
    enterPlayerTwo.style.setProperty("display","block");
    playerSelect.style.setProperty("display","block");
    
}

function begin(){
    startPlaying.style.setProperty("display","block");
    beginStatement.style.setProperty("display","none");

}

function done(){
    enterPlayerOne.style.setProperty("display","none");
    enterPlayerTwo.style.setProperty("display","none");
    playerSelect.style.setProperty("display","none");
    startPlaying.style.setProperty("display","none");
    beginStatement.style.setProperty("display","none");
  

    localStorage.setItem("player1_id",playerOneInput.value);
    localStorage.setItem("player2_id",playerTwoInput.value);
    pickGame.style.setProperty("display","block");

}

