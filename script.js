//Animation Funktionen
function pause1() {
  console.log("pause image 1");
  document.getElementById('image1').classList.toggle('paused1');
}
function pause2() {
  console.log("pause img 2");
  document.getElementById('image2').classList.toggle('paused2');
}

// Button Funktionen
function g1(){
  document.getElementById('gbtn1').classList.toggle('activated');
}
function g2(){
  document.getElementById('gbtn2').classList.toggle('activated');
}
function g3(){
  document.getElementById('gbtn3').classList.toggle('activated');
}
function g4(){
  document.getElementById('gbtn4').classList.toggle('activated');
}
function g5(){
  document.getElementById('gbtn5').classList.toggle('activated');
}
function g6(){
  document.getElementById('gbtn6').classList.toggle('activated');
}
function g7(){
  document.getElementById('gbtn7').classList.toggle('activated');
}
function g8(){
  document.getElementById('gbtn8').classList.toggle('activated');
}
function g9(){
  document.getElementById('gbtn9').classList.toggle('activated');
}


//Simon Says Minigame
//audio Vars:
var sound_01;
var sound_02;
var sound_03;
var sound_04;
var sound_05;
var sound_06;
var sound_07;
var sound_failed;

function playSound(col){
  sound_01 = document.getElementById('audio_01');
  sound_02 = document.getElementById('audio_02');
  sound_03 = document.getElementById('audio_03');
  sound_04 = document.getElementById('audio_04');
  sound_05 = document.getElementById('audio_05');
  sound_06 = document.getElementById('audio_06');
  sound_07 = document.getElementById('audio_07');
  sound_failed = document.getElementById('audio_failed');
  switch (col) {
    case "red":
      sound_01.play();
      break;
    case "green":
      sound_02.play();
      break;
    case "blue":
      sound_03.play();
      break;
    case "yellow":
      sound_04.play();
      break;
    case "orange":
      sound_05.play();
      break;
    case "turquoise":
      sound_06.play();
      break;
    case "failed":
      sound_failed.play();
      break;
    default:
      sound_failed.play();
  }
}

/* Color Pool:
red
green
blue
yellow
orange
turquoise
neutral
*/
var stage_00 = ["red","blue","red"];
var stage_01 = ["red","green","orange","blue"];
var stage_02 = ["turquoise","yellow","blue","yellow","red"];
var stage_03 = ["blue","green","orange","yellow","blue","green","blue"];
//Announcer Output
var currentStage = stage_00;
var currentStageID = 0;
var currentInput = -1;
var currentColor = 'neutral';

var switchTimer;
var pauseTimer;
var colorCounter;
var color;

//takes in the stage to play, resets the counter and begins the interval for changing announcer colors.
function runCurrentStage(){
  //console.log("starting Stage" + currentStage);
  colorCounter = 0;
  currentInput = -1;
  switchTimer = setInterval(updateColor, 1500);
}

//checks if all colors have been shown then either replaces the current color with the next of the currentStage array,
// or ends the loop and starts the refresh timer.
function updateColor(){
  if (colorCounter == currentStage.length) {
    //console.log("stage is done. resetting.");
    clearInterval(switchTimer);
    document.getElementById('s_announcer').classList.replace(currentColor,'neutral');
    currentColor = 'neutral';
    pauseTimer = setTimeout(runCurrentStage,6000);
  } else {
    color = currentStage[colorCounter];
    document.getElementById('s_announcer').classList.replace(currentColor,color);
    currentColor = color;
    colorCounter++;
    playSound(currentColor);
  }
}

//Button Input
function say(col){
  console.log(col);
  currentInput++;
  if (currentStage[currentInput] == col) {
    //positiven sound abspielen?
    console.log("richtig! " + currentInput);
    if(currentInput == (currentStage.length-1)){
      completeStage();
    }
  } else {
    console.log("leider falsch :(");
    currentInput = -1;
    playSound("failed");
  }
}

//Switches on the StageID to set the next stage.
function completeStage(){
  console.log("Stage Completed! "+currentStageID);
  switch (currentStageID) {
    case 0:
      currentStage = stage_01;
      currentStageID++;
      break;
    case 1:
      currentStage = stage_02;
      currentStageID++;
      break;
    case 2:
      currentStage = stage_03;
      currentStageID++;
      break;
    case 3:
      currentStage = stage_03;
      currentStageID++;
      break;
  }
}

runCurrentStage();
