/*---------------------- intro --------------------------*/
var initTimer;
//Executed when pressing "Play" button. hides Intro text and shows and starts "simon says" and the "pushing game" frame.
function startGame(){
  $("#s_game").removeClass("hidden");
  $("#pushing-game").removeClass("hidden");
  $("#intro").addClass("hidden");

  //Professorium
  $("#gm1").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41091.087303546185!2d11.538935300197018!3d49.93272057815806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1a2c5a82d0319%3A0xda86df09d2d1e734!2sBayreuth!5e0!3m2!1sde!2sde!4v1576541176994!5m2!1sde!2sde");
  $("#gm2").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.50625324634558!2d11.593537730971038!3d49.95500025214987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1a2e05fef3db7%3A0x638cc8cc4abca155!2sSpielmobil%20Professorium!5e1!3m2!1sde!2sde!4v1576541415067!5m2!1sde!2sde");
  //Alexandria
  //"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109179.94647997755!2d29.884846034145003!3d31.224238672397384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Gouvernement%20al-Iskandariyya%2C%20%C3%84gypten!5e0!3m2!1sde!2sde!4v1574953841876!5m2!1sde!2sde"
  //"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.715573959166!2d29.90704421547005!3d31.200898769968404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38da1d9e919%3A0xf984e1832e425a82!2sGoethe-Institut%20German%20Cultural%20Center!5e0!3m2!1sde!2sde!4v1574954052622!5m2!1sde!2sde"
  //Kairo
  //"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564056191!2d31.22344491853406!3d30.0595580983343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sKairo%2C%20Gouvernement%20Al-Qahira%2C%20%C3%84gypten!5e0!3m2!1sde!2sde!4v1579484489125!5m2!1sde!2sde"
  //"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0956957141884!2d31.213162215450957!3d30.03411232601488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846d5dd4ed013%3A0x54d9d096301e4753!2sGoethe-Institut%20Kairo!5e0!3m2!1sde!2sde!4v1579484537565!5m2!1sde!2sde"
  //Tel Aviv
  //"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.90495520479!2d34.76222657736099!3d32.08799940302179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Jaffa%2C%20Israel!5e0!3m2!1sde!2sde!4v1579484596493!5m2!1sde!2sde"
  //"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.6702460293295!2d34.786876115485036!3d32.078166526594735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bb0c3de695d%3A0x78868c0641ea221!2sGoethe-Institut%20Tel%20Aviv!5e0!3m2!1sde!2sde!4v1579484633769!5m2!1sde!2sde"
  //Plays Setup animations for Simon Says
  $(".fade-in-fwd1").css("animation-play-state", "running");
  $(".fade-in-fwd2").css("animation-play-state", "running");
  $(".fade-in-fwd3").css("animation-play-state", "running");

  $("#red_circle").css("animation-play-state", "running");
  $("#green_circle").css("animation-play-state", "running");
  $("#blue_circle").css("animation-play-state", "running");
  $("#orange_circle").css("animation-play-state", "running");
  $("#turquoise_circle").css("animation-play-state", "running");

  $("#center_circle").css("animation-play-state", "running");

  initTimer = setTimeout(runCurrentStage, 8300);
}

/*---------------------- simon says ----------------------*/
//Play Sound based on id
function playSound(note){
  switch (note) {
    case "red01":
      $("#audio_01")[0].currentTime = 0;
      $("#audio_01")[0].play();
      break;
    case "blue01":
      $("#audio_02")[0].currentTime = 0;
      $("#audio_02")[0].play();
      break;
    case "green01":
      $("#audio_03")[0].currentTime = 0;
      $("#audio_03")[0].play();
      break;
    case "orange01":
      $("#audio_04")[0].currentTime = 0;
      $("#audio_04")[0].play();
      break;
    case "turquoise01":
      $("#audio_05")[0].currentTime = 0;
      $("#audio_05")[0].play();
      break;
    case "turquoise02":
      $("#audio_06")[0].currentTime = 0;
      $("#audio_06")[0].play();
      break;
    case "orange02":
      $("#audio_07")[0].currentTime = 0;
      $("#audio_07")[0].play();
      break;
    case "orange03":
      $("#audio_08")[0].currentTime = 0;
      $("#audio_08")[0].play();
      break;
    case "green02":
      $("#audio_09")[0].currentTime = 0;
      $("#audio_09")[0].play();
      break;
    case "blue02":
      $("#audio_10")[0].currentTime = 0;
      $("#audio_10")[0].play();
      break;
    case "red02":
      $("#audio_11")[0].currentTime = 0;
      $("#audio_11")[0].play();
      break;
    case "turquoise03":
      $("#audio_12")[0].currentTime = 0;
      $("#audio_12")[0].play();
      break;
    case "green03":
      $("#audio_13")[0].currentTime = 0;
      $("#audio_13")[0].play();
      break;
    case "turquoise04":
      $("#audio_14")[0].currentTime = 0;
      $("#audio_14")[0].play();
      break;
    case "orange04":
      $("#audio_15")[0].currentTime = 0;
      $("#audio_15")[0].play();
      break;
    case "red03":
      $("#audio_16")[0].currentTime = 0;
      $("#audio_16")[0].play();
      break;
    case "blue03":
      $("#audio_17")[0].currentTime = 0;
      $("#audio_17")[0].play();
      break;
    case "red04":
      $("#audio_18")[0].currentTime = 0;
      $("#audio_18")[0].play();
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
var stageTiming_00 =[0.6, 0.6, 1.2, 1.2, 1.2];
var stageTiming_01 =[0.8, 0.8, 0.8, 0.8, 0.8, 0.8];
var stageTiming_02 =[1.2, 0.7, 0.7, 0.7, 0.7];
var stageTiming_03 =[1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 1.2];

//Sounds within the Stage:
var stageSound_00 = ["red01","blue01","green01","orange01","turquoise01"];
var stageSound_01 = ["red01","blue01","turquoise02","blue01","orange02","blue01"];
var stageSound_02 = ["orange03","green02","blue02","red02","turquoise03"];
var stageSound_03 = ["green03","turquoise04","orange04","red03","blue03","red04","green03"];

//Stage inputs.
var stage_00 = ["red","blue","green","orange","turquoise"];
var stage_01 = ["red","blue","turquoise","blue","orange","blue"];
var stage_02 = ["orange","green","blue","red","turquoise"];
var stage_03 = ["green","turquoise","orange","red","blue","red","green"];

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

var retries = 0; //used to count how many times the Stage reset has been delayed.

//Language Selection
function switchar(){
  $("#ar_header").removeClass("hidden");
  $("#ar_intro").removeClass("hidden");
  $("#ar_play").removeClass("hidden");
  $("#ar_data").removeClass("hidden");
  $("#ar_outro").removeClass("hidden");
  $("#de_header").addClass("hidden");
  $("#heb_header").addClass("hidden");
  $("#de_intro").addClass("hidden");
  $("#heb_intro").addClass("hidden");
  $("#de_play").addClass("hidden");
  $("#heb_play").addClass("hidden");
  $("#de_data").addClass("hidden");
  $("#heb_data").addClass("hidden");
  $("#de_outro").addClass("hidden");
  $("#heb_outro").addClass("hidden");
}
function switchde(){
  $("#de_header").removeClass("hidden");
  $("#de_intro").removeClass("hidden");
  $("#de_play").removeClass("hidden");
  $("#de_data").removeClass("hidden");
  $("#de_outro").removeClass("hidden");
  $("#ar_header").addClass("hidden");
  $("#heb_header").addClass("hidden");
  $("#ar_intro").addClass("hidden");
  $("#heb_intro").addClass("hidden");
  $("#ar_play").addClass("hidden");
  $("#heb_play").addClass("hidden");
  $("#ar_data").addClass("hidden");
  $("#heb_data").addClass("hidden");
  $("#ar_outro").addClass("hidden");
  $("#heb_outro").addClass("hidden");
}
function switchheb(){
  $("#heb_header").removeClass("hidden");
  $("#heb_intro").removeClass("hidden");
  $("#heb_play").removeClass("hidden");
  $("#heb_data").removeClass("hidden");
  $("#heb_outro").removeClass("hidden");
  $("#de_header").addClass("hidden");
  $("#ar_header").addClass("hidden");
  $("#de_intro").addClass("hidden");
  $("#ar_intro").addClass("hidden");
  $("#de_play").addClass("hidden");
  $("#ar_play").addClass("hidden");
  $("#de_data").addClass("hidden");
  $("#ar_data").addClass("hidden");
  $("#de_outro").addClass("hidden");
  $("#ar_outro").addClass("hidden");
}

//takes in the stage to play, resets the counter and begins the interval for changing announcer colors.
function runCurrentStage(){
  //if player has input the third sound correctly, extend the pause duration until resetting.
  if ( (currentInput>1) && (retries<3) ) {
    retries++;
    clearTimeout(pauseTimer);
    pauseTimer = setTimeout(runCurrentStage,3500);
  } else {
    retries = 0;
    colorCounter = 0;
    currentInput = -1;
    switchTimer = setTimeout(updateColor, 1500);
  }
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
    pauseTimer = setTimeout(runCurrentStage,11000);
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
    currentInput++;
    if (currentStage[currentInput] == col) {
      playSound(currentStageSound[currentInput]);
      if(currentInput == (currentStage.length-1)){
        completeStage();
        currentInput = -1;
      }
    } else {
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
  winSoundTimer = setTimeout(playWinSound,420);
  setupPushingGame(currentStageID);
  switch (currentStageID) {
    case 0:
      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(runCurrentStage,2500);
      currentStage = stage_01;
      currentTiming = stageTiming_01;
      currentStageSound = stageSound_01;
      currentStageID++;
      break;
    case 1:
      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(runCurrentStage,2500);
      currentStage = stage_02;
      currentTiming = stageTiming_02;
      currentStageSound = stageSound_02;
      currentStageID++;
      break;
    case 2:
      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(runCurrentStage,2500);
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
      $("#map_container").css("animation-play-state", "running");
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
      return false;
    }
  }
  return true;
}
/*---------------------- Map / End Game ----------------------*/
//var pw1 = 31.200901; //Alexandria
//var pw2 = 29.909194;
var pw1 = 49.954954; //Bayreuth
var pw2 = 11.593674;
function checkPW(){
  if (($("#input1").val() == pw1) && ($("#input2").val() == pw2)) {
    $("#win")[0].play();
    $("#pushing-game").addClass("hidden");
    $("#map_container").addClass("hidden");
    $("#outro").removeClass("hidden");
    $("#gm2").css("animation-play-state", "running");
    $("#outro_text").css("animation-play-state", "running");
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
    setTimeout(carousel, 3500); // Change image every 3.5 seconds
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
      $("#move_tile")[0].currentTime = 0;
      $("#move_tile")[0].play();
      currImageID = evt.target.id; //Get the ID of the clicked element
      currentSlot = selectSlot("#"+currImageID); //get the current slot based on that ID

      $(".empty").append($("#"+currImageID)); //move Image to empty slot
      $(".empty").removeClass("empty"); //remove Empty class form container.
      $(currentSlot).addClass("empty"); //add Empty class to old image location as new empty slot.

      ph0 = slotContent.indexOf("#"+currImageID);
      ph1 = slotContent.indexOf(".empty");
      slotContent[ph0] = ".empty";
      slotContent[ph1] = "#"+currImageID;

      if(compareArrays()){
        done = true;
        $("#win")[0].play();
        $("#pg3").append($("#pgi_03"));
      }
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
  $("#audio_08")[0].volume = 0.5;
  $("#audio_09")[0].volume = 0.5;
  $("#audio_10")[0].volume = 0.5;
  $("#audio_11")[0].volume = 0.5;
  $("#audio_12")[0].volume = 0.5;
  $("#audio_13")[0].volume = 0.5;
  $("#audio_14")[0].volume = 0.5;
  $("#audio_15")[0].volume = 0.5;
  $("#audio_16")[0].volume = 0.5;
  $("#audio_17")[0].volume = 0.5;
  $("#audio_18")[0].volume = 0.5;
  $("#audio_failed")[0].volume = 0.3;
});
