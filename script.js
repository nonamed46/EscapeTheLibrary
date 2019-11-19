//Animation Funktionen
/*
function pause1() {
  console.log("pause image 1");
  document.getElementById('image1').classList.toggle('paused1');
}
function pause2() {
  console.log("pause img 2");
  document.getElementById('image2').classList.toggle('paused2');
}
*/
/*---------------------- simon says ----------------------*/
//audio Vars:
var sound_01;
var sound_02;
var sound_03;
var sound_04;
var sound_05;
var sound_06;
var sound_07;
var sound_failed;

//Plays Sound based on color input.
function playSound(col){
  sound_01 = $("#audio_01");
  sound_02 = $("#audio_02");
  sound_03 = $("#audio_03");
  sound_04 = $("#audio_04");
  sound_05 = $("#audio_05");
  sound_06 = $("#audio_06");
  sound_07 = $("#audio_07");
  sound_failed = $("#audio_failed");
  /*
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
  */
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
/*
var stage_00 = ["red","blue","red"];
var stage_01 = ["red","green","orange","blue"];
var stage_02 = ["turquoise","green","blue","orange","red"];
var stage_03 = ["blue","green","orange","turquoise","blue","green","blue"];
var stage_04 = ["red","blue","red"];
var stage_05 = ["red","green","orange","blue"];
var stage_06 = ["turquoise","green","blue","orange","red"];
var stage_07 = ["blue","green","orange","turquoise","blue","green","blue"];
*/
var stage_00 = ["red","blue","red"];
var stage_01 = ["green","orange", "green"];
var stage_02 = ["blue","turquoise", "blue"];
var stage_03 = ["orange", "red", "orange"];
var stage_04 = ["turquoise", "green", "turquoise"];
var stage_05 = ["red","blue","red"];
var stage_06 = ["green","orange", "green"];
var stage_07 = ["blue","turquoise", "blue"];



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
  setupPushingGame(currentStageID);
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
      currentStage = stage_04;
      currentStageID++;
      break;
    case 4:
      currentStage = stage_05;
      currentStageID++;
      break;
    case 5:
      currentStage = stage_06;
      currentStageID++;
      break;
    case 6:
      currentStage = stage_07;
      currentStageID++;
      break;
    case 7:
      //currentStage = stage_08;
      currentStageID++;
      clearInterval(switchTimer);
      clearTimeout(pauseTimer);
      document.getElementById('s_announcer').classList.replace(currentColor,'neutral');
      currentColor = 'neutral';
      break;
  }
}


/*---------------------- pushing game ----------------------*/
//slot content 3x3 map (012 345 678)
var slotContent = ["#pgi_04","#pgi_08","#pgi_07","#pgi_02","#pgi_06","#pgi_05","#pgi_09","#pgi_01",".empty"];
//winning setting. for easy checking
var slotFinal = ["#pgi_01","#pgi_02",".empty","#pgi_04","#pgi_05","#pgi_06","#pgi_07","#pgi_08","#pgi_09"];
var currImageID;
var currentSlot;
var ph0;//placeholders
var ph1;
var done = false;
var arrEquals = false;
//Setup pushing game.
function setupPushingGame(id){
  switch (id) {
    case 0:
      $("#pg1").append($("#pgi_04"));
      break;
    case 1:
      $("#pg2").append($("#pgi_08"));
      break;
    case 2:
      $("#pg3").append($("#pgi_07"));
      break;
    case 3:
      $("#pg4").append($("#pgi_02"));
      break;
    case 4:
      $("#pg5").append($("#pgi_06"));
      break;
    case 5:
      $("#pg6").append($("#pgi_05"));
      break;
    case 6:
      $("#pg7").append($("#pgi_09"));
      break;
    case 7:
      $("#pg8").append($("#pgi_01"));
      break;
  }
  /*
  $("#pg1").append($("#pgi_04"));
  $("#pg2").append($("#pgi_08"));
  $("#pg3").append($("#pgi_07"));
  $("#pg4").append($("#pgi_02"));
  $("#pg5").append($("#pgi_06"));
  $("#pg6").append($("#pgi_05"));
  $("#pg7").append($("#pgi_09"));
  $("#pg8").append($("#pgi_01"));
  */
}
function selectSlot(id){
  switch (slotContent.indexOf(id)) {
    case 0:
      return "#pg1";
    case 1:
      return "#pg2";
    case 2:
      return "#pg3";
    case 3:
      return "#pg4";
    case 4:
      return "#pg5";
    case 5:
      return "#pg6";
    case 6:
      return "#pg7";
    case 7:
      return "#pg8";
    case 8:
      return "#pg9";
  }
}
function compareArrays(){
  for(i = 0; i < slotContent.length; i++){
    if (slotContent[i] != slotFinal[i]){
      console.log(slotContent[i]);
      console.log(slotFinal[i]);
      return false;
    }
  }
  return true;
}
/*---------------------- START ----------------------*/
$(document).ready(function(){
  /* Simon says controls*/
  $('#sbtn0').on("click", function(){say("red");});
  $('#sbtn1').on("click", function(){say("green");});
  $('#sbtn2').on("click", function(){say("blue");});
  $('#sbtn3').on("click", function(){say("orange");});
  $('#sbtn4').on("click", function(){say("turquoise");});

  /* pushgame controls*/
  $('.pg-img').on("click", function(evt){
    if(!done){
      currImageID = evt.target.id; //Get the ID of the clicked element
      console.log(currImageID);
      currentSlot = selectSlot("#"+currImageID); //get the current slot based on that ID
      console.log(currentSlot);
      $(".empty").append($("#"+currImageID)); //move Image to empty slot
      $(".empty").removeClass("empty"); //remove Empty class form container.
      $(currentSlot).addClass("empty"); //add Empty class to old image location as new empty slot.

      ph0 = slotContent.indexOf("#"+currImageID);
      ph1 = slotContent.indexOf(".empty");
      slotContent[ph0] = ".empty";
      slotContent[ph1] = "#"+currImageID;
      console.log(slotContent);

      if(compareArrays()){
        done = true;
        $("#pg3").append($("#pgi_03"));
      }
      console.log(done);
    }
  });

  //setupPushingGame();
  runCurrentStage();

});
