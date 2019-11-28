/*---------------------- intro --------------------------*/
//Executed when pressing "Play" button. hides Intro text and shows and starts "simon says" and the "pushing game" frame.
function startGame(){
  runCurrentStage();
  $("#s_game").removeClass("hidden");
  $("#pushing-game").removeClass("hidden");
  $("#intro").addClass("hidden");
}
/*---------------------- simon says ----------------------*/
//Plays Sound based on color input.
function playSound(col){
  switch (col) {
    case "red":
      $("#audio_01")[0].play();
      break;
    case "green":
      $("#audio_02")[0].play();
      break;
    case "blue":
      $("#audio_03")[0].play();
      break;
    case "yellow":
      $("#audio_04")[0].play();
      break;
    case "orange":
      $("#audio_05")[0].play();
      break;
    case "turquoise":
      $("#audio_06")[0].play();
      break;
    case "failed":
      $("#audio_failed")[0].play();
      break;
    default:
      $("#audio_failed")[0].play();
  }
}

/* Color Pool:
red
green
blue
orange
turquoise
neutral
*/

/*
var stage_00 = ["red","blue","red"];
var stage_01 = ["red","green","blue","red"];
var stage_02 = ["turquoise","green","blue","orange","red"];
var stage_03 = ["blue","green","orange","turquoise","blue","green","blue"];
var stage_04 = ["red","blue","red","green","orange","blue","turquoise"];
var stage_05 = ["red","green","orange","blue","turquoise","green","blue","orange"];
var stage_06 = ["turquoise","green","blue","orange","red","turquoise","green","blue","orange"];
var stage_07 = ["blue","green","orange","turquoise","blue","green","blue","red","green","blue"];
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

var sg_input_enabled = false;
var pg_input_enabled = false;
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
    $("#center_circle").attr('style', "fill:grey");
    currentColor = 'neutral';
    currentInput = -1;
    sg_input_enabled = true;
    pauseTimer = setTimeout(runCurrentStage,5000+(currentStageID*700));
  } else {
    sg_input_enabled = false;
    color = currentStage[colorCounter];
    $("#center_circle").attr('style', "fill:"+color);
    currentColor = color;
    colorCounter++;
    playSound(currentColor);
  }
}

//Button Input
function say(col){
  if(sg_input_enabled){
    console.log(col);
    currentInput++;
    if (currentStage[currentInput] == col) {
      playSound(col);
      console.log("richtig! " + currentInput);
      if(currentInput == (currentStage.length-1)){
        completeStage();
        currentInput = -1;
      }
    } else {
      console.log("leider falsch :(");
      currentInput = -1;
      playSound("failed");
    }
  }
}
//plays winning sound when stage is completed (called by a timeout delay)
function playWinSound(){
  if (currentStageID == 8) {
    $("#win")[0].play();
  } else {
    $("#stg_complete")[0].play();
  }
};
var winSoundTimer
//Switches on the StageID to set the next stage.
function completeStage(){
  console.log("Stage Completed! "+currentStageID);
  winSoundTimer = setTimeout(playWinSound,570);
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
      $("#center_circle").attr('style', "fill:grey");
      $("#s_game").addClass("hidden");
      $("#map_container").removeClass("hidden");
      currentColor = 'neutral';
      sg_input_enabled = false;
      pg_input_enabled = true;
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
/*---------------------- Map / End Game ----------------------*/
var pw1 = 31.200901;
var pw2 = 29.909194;
function checkPW(){
  console.log();
  if (($("#input1").val() == pw1) && ($("#input2").val() == pw2)) {
    $("#win")[0].play();
    $("#pushing-game").addClass("hidden");
    $("#map_container").addClass("hidden");
    $("#outro").removeClass("hidden");
  }
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
    if(!done && pg_input_enabled){
      $("#move_tile")[0].play();
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
        $("#win")[0].play();
        $("#pg3").append($("#pgi_03"));
      }
      console.log(done);
    }
  });

  //runCurrentStage(); //starting simon says
  $("#audio_01")[0].volume = 0.5;
  $("#audio_02")[0].volume = 0.5;
  $("#audio_03")[0].volume = 0.5;
  $("#audio_04")[0].volume = 0.5;
  $("#audio_05")[0].volume = 0.5;
  $("#audio_06")[0].volume = 0.5;
  $("#audio_07")[0].volume = 0.5;
  $("#audio_failed")[0].volume = 0.5;
});
