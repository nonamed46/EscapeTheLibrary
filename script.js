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
/*function playSound(col){
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
*/
//Play Sound based on id
function playSound(note){
  switch (note) {
    case "a5_2-4":
      $("#audio_03")[0].play();
      break;
    case "fs5_1-4":
      $("#audio_01")[0].play();
      break;
    case "g5_2-4":
      $("#audio_02")[0].play();
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
//Stage Timings in Seconds
var stageTiming_00 =[0.8, 0.4, 0.4,0.8, 0.4, 0.4, 0.8];
var stageTiming_01 =[0.8, 0.4, 0.4,0.8, 0.4, 0.4, 0.8];
var stageTiming_02 =[0.8, 0.4, 0.4,0.8, 0.4, 0.4, 0.8];
var stageTiming_03 =[0.8, 0.4, 0.4,0.8, 0.4, 0.4, 0.8];

//Sounds within the Stage:
var stageSound_00 = ["a5_2-4","fs5_1-4","g5_2-4","a5_2-4","fs5_1-4","g5_2-4","a5_2-4"];
var stageSound_01 = ["a5_2-4","fs5_1-4","g5_2-4","a5_2-4","fs5_1-4","g5_2-4","a5_2-4"];
var stageSound_02 = ["a5_2-4","fs5_1-4","g5_2-4","a5_2-4","fs5_1-4","g5_2-4","a5_2-4"];
var stageSound_03 = ["a5_2-4","fs5_1-4","g5_2-4","a5_2-4","fs5_1-4","g5_2-4","a5_2-4"];

//Stage inputs.
var stage_00 = ["red","green","blue","red","green","blue","red"];
var stage_01 = ["red","green","blue","red","green","blue","red"];
var stage_02 = ["red","green","blue","red","green","blue","red"];
var stage_03 = ["red","green","blue","red","green","blue","red"];


//var stage_04 = ["turquoise", "green", "turquoise"];
//var stage_05 = ["red","blue","red"];
//var stage_06 = ["green","orange", "green"];
//var stage_07 = ["blue","turquoise", "blue"];

//Announcer Output
var currentStage = stage_00;
var currentStageSound = stageSound_00;
var currentTiming = stageTiming_00;
var currentStageID = 0;
var currentInput = -1; //position within the currentStage array.
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
  switchTimer = setTimeout(updateColor, 1500);
}

//checks if all colors have been shown then either replaces the current color with the next of the currentStage array,
// or ends the loop and starts the refresh timer.
function updateColor(){
  if (colorCounter == currentStage.length) {
    //console.log("stage is done. resetting.");
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
    playSound(currentStageSound[colorCounter]);
    switchTimer = setTimeout(updateColor, currentTiming[colorCounter] *1000);
    colorCounter++;
  }
}

//Button Input checks if input is enabled. Then Checks if input and currentStage at the curretPart is the same.
  //plays the needed sound if correct or the failed sound if not.
function say(col){
  if(sg_input_enabled){
    console.log(col);
    currentInput++;
    if (currentStage[currentInput] == col) {
      playSound(currentStageSound[currentInput]);
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
  if (currentStageID == 4) {
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
      currentTiming = stageTiming_01;
      currentStageSound = stageSound_01;
      currentStageID++;
      break;
    case 1:
      currentStage = stage_02;
      currentTiming = stageTiming_02;
      currentStageSound = stageSound_02;
      currentStageID++;
      break;
    case 2:
      currentStage = stage_03;
      currentTiming = stageTiming_03;
      currentStageSound = stageSound_03;
      currentStageID++;
      break;
    case 3:
      currentStageID++;
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
      $("#pg2").append($("#pgi_08"));
      break;
    case 1:
      $("#pg3").append($("#pgi_07"));
      $("#pg4").append($("#pgi_02"));
      break;
    case 2:
      $("#pg5").append($("#pgi_06"));
      $("#pg6").append($("#pgi_05"));
      break;
    case 3:
      $("#pg7").append($("#pgi_09"));
      $("#pg8").append($("#pgi_01"));
      break;
  }
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
  /* Setup Carousel */
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
  }

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
