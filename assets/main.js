/**
 * DOM Adventure Game
 */

/*document.querySelector('#game').textContent = 'DOM Adventure Game';*/

/*starting game room*/
function start(){
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("end").hidden = true;
  document.getElementById("Form").hidden = true;
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("adventure").hidden = true;
  document.getElementById("school").hidden = false;
  document.getElementById("text").hidden = false;
  document.getElementById("text2").hidden = false;
  document.getElementById("start").hidden = true;
  document.getElementById("left").hidden = false;
  document.getElementById("middle").hidden = false;
  document.getElementById("right").hidden = false;
}

/*press spacebar to start game*/
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      document.getElementById("start").hidden = true;
      document.getElementById("end").hidden = true;
      document.getElementById("Form").hidden = true;
      document.getElementById("move").hidden = true;
      document.getElementById("poke").hidden = true;
      document.getElementById("moveDesk").hidden = true;
      document.getElementById("school").hidden = false;
      document.getElementById("text").hidden = false;
      document.getElementById("text2").hidden = false;
      document.getElementById("left").hidden = false;
      document.getElementById("middle").hidden = false;
      document.getElementById("right").hidden = false;
    }
}

/*left room from starting room*/
function clicksL(){
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("end").hidden = true;
  document.getElementById("left").hidden = true;
  document.getElementById("middle").hidden = true;
  document.getElementById("right").hidden = true;
  document.getElementById("school").hidden = true;
  document.getElementById("text").hidden = true;
  document.getElementById("text2").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("text3").hidden = false;
  document.getElementById("text4").hidden = false;
  document.getElementById("class").hidden = false;
  document.getElementById("Form").hidden = false;
  document.getElementById("move").hidden = false;
  document.getElementById("poke").hidden = false;
}

/*options to poke or move in the class room*/
  function next(){
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("text3").hidden = true;
  document.getElementById("text4").hidden = true;
  document.getElementById("class").hidden = true;
  document.getElementById("start").hidden = true;
  document.getElementById("Form").hidden = true;
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("moveDesk").hidden = false;
  document.getElementById("down").hidden = false;
}

/*move desk sceen*/
function down(){
  document.getElementById("class").hidden = true;
  document.getElementById("start").hidden = true;
  document.getElementById("Form").hidden = true;
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("down").hidden = true;
  document.getElementById("nextRooms").hidden = false;
  document.getElementById("left2").hidden = false;
  document.getElementById("right2").hidden = false;
}

/*walking to doors in basment*/
function straight(){
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("down").hidden = true;
  document.getElementById("nextRooms").hidden = true;
  document.getElementById("left2").hidden = true;
  document.getElementById("right2").hidden = true;
  document.getElementById("straight").hidden = true;
  document.getElementById("openDoor").hidden = false;
  document.getElementById("yes").hidden = false;
  document.getElementById("no").hidden = false;
}

/*basment doors*/
function left(){
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("down").hidden = true;
  document.getElementById("nextRooms").hidden = true;
  document.getElementById("left2").hidden = true;
  document.getElementById("right2").hidden = true;
  document.getElementById("dead2").hidden = false;
  document.getElementById("end").hidden = false;
}

function right(){
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("down").hidden = true;
  document.getElementById("nextRooms").hidden = true;
  document.getElementById("left2").hidden = true;
  document.getElementById("right2").hidden = true;
  document.getElementById("straight").hidden = false;
}

/*yes option for right basment door*/
function yes(){
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("down").hidden = true;
  document.getElementById("nextRooms").hidden = true;
  document.getElementById("left2").hidden = true;
  document.getElementById("right2").hidden = true;
  document.getElementById("straight").hidden = true;
  document.getElementById("openDoor").hidden = true;
  document.getElementById("yes").hidden = true;
  document.getElementById("no").hidden = true;
  document.getElementById("yes2").hidden = false;
  document.getElementById("yes3").hidden = false;
  document.getElementById("crate1").hidden = false;
  document.getElementById("crate2").hidden = false;
}

function crate1(){
  document.getElementById("crate1").hidden = true;
  document.getElementById("straight").hidden = true;
  document.getElementById("openDoor").hidden = true;
  document.getElementById("yes").hidden = true;
  document.getElementById("no").hidden = true;
  document.getElementById("yes2").hidden = true;
  document.getElementById("yes3").hidden = true;
  document.getElementById("num1").hidden = false;
  document.getElementById("end").hidden = false;
}

function crate2(){
  document.getElementById("openDoor").hidden = true;
  document.getElementById("yes").hidden = true;
  document.getElementById("no").hidden = true;
  document.getElementById("yes2").hidden = true;
  document.getElementById("yes3").hidden = true;
  document.getElementById("num1").hidden = true;
  document.getElementById("crate1").hidden = true;
  document.getElementById("crate2").hidden = true;
  document.getElementById("num2").hidden = false;
  document.getElementById("num3").hidden = false;
  document.getElementById("end").hidden = false;
}

/*no option for right basment door*/
function no(){
  document.getElementById("nextRooms").hidden = true;
  document.getElementById("left2").hidden = true;
  document.getElementById("right2").hidden = true;
  document.getElementById("straight").hidden = true;
  document.getElementById("openDoor").hidden = true;
  document.getElementById("yes").hidden = true;
  document.getElementById("no").hidden = true;
  document.getElementById("no2").hidden = false;
  document.getElementById("end").hidden = false;
}

function dead(){
  document.getElementById("text3").hidden = true;
  document.getElementById("text4").hidden = true;
  document.getElementById("class").hidden = true;
  document.getElementById("start").hidden = true;
  document.getElementById("Form").hidden = true;
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("pokePerson").hidden = false;
  document.getElementById("end").hidden = false;
}

/*middle door in starting room*/
function clicksM(){
  document.getElementById("middle").hidden = true;
  document.getElementById("left").hidden = true;
  document.getElementById("middle").hidden = true;
  document.getElementById("right").hidden = true;
  document.getElementById("school").hidden = true;
  document.getElementById("text").hidden = true;
  document.getElementById("text2").hidden = true;
  document.getElementById("text3").hidden = true;
  document.getElementById("text4").hidden = true;
  document.getElementById("Form").hidden = true;
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("side").hidden = false;
  document.getElementById("outSide").hidden = false;
  document.getElementById("end").hidden = false;
}

/*restart button for death sceens*/
function restart(){
  document.getElementById("bad").hidden = true;
  document.getElementById("good").hidden = true;
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("end").hidden = true;
  document.getElementById("side").hidden = true;
  document.getElementById("outSide").hidden = true;
  document.getElementById("Form").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("dead2").hidden = true;
  document.getElementById("no2").hidden = true;
  document.getElementById("num1").hidden = true;
  document.getElementById("num2").hidden = true;
  document.getElementById("num3").hidden = true;
  document.getElementById("dow").hidden = true;
  document.getElementById("windowText").hidden = true;
  document.getElementById("start").hidden = false;
}

/*right door in starting room*/
function clicksR(){
  document.getElementById("end").hidden = true;
  document.getElementById("middle").hidden = true;
  document.getElementById("left").hidden = true;
  document.getElementById("right").hidden = true;
  document.getElementById("school").hidden = true;
  document.getElementById("text").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("text2").hidden = true;
  document.getElementById("text3").hidden = true;
  document.getElementById("text4").hidden = true;
  document.getElementById("side").hidden = true;
  document.getElementById("outSide").hidden = true;
  document.getElementById("principle").hidden = false;
  document.getElementById("office").hidden = false;
  document.getElementById("dow").hidden = false;
  document.getElementById("closet").hidden = false;
}

/*window option for principals room*/
function dow(){
   document.getElementById("text3").hidden = true;
  document.getElementById("text4").hidden = true;
  document.getElementById("side").hidden = true;
  document.getElementById("outSide").hidden = true;
  document.getElementById("principle").hidden = true;
  document.getElementById("office").hidden = true;
  document.getElementById("dow").hidden = true;
  document.getElementById("closet").hidden = true;
  document.getElementById("windowText").hidden = false;
  document.getElementById("end").hidden = false;
}

/*closet option for the principals room*/
function closet(){
  document.getElementById("principle").hidden = true;
  document.getElementById("office").hidden = true;
  document.getElementById("dow").hidden = true;
  document.getElementById("closet").hidden = true;
  document.getElementById("windowText").hidden = true;
  document.getElementById("closetText").hidden = false;
  document.getElementById("closetText2").hidden = false;
  document.getElementById("n").hidden = false;
  document.getElementById("y").hidden = false;
}

/* yes and no option for bed room when closet is opened*/
function n(){
  document.getElementById("closetText").hidden = true;
  document.getElementById("closetText2").hidden = true;
  document.getElementById("n").hidden = true;
  document.getElementById("y").hidden = true;
  document.getElementById("bad").hidden = false;
  document.getElementById("end").hidden = false;
}

function y(){
  document.getElementById("closetText").hidden = true;
  document.getElementById("closetText2").hidden = true;
  document.getElementById("n").hidden = true;
  document.getElementById("y").hidden = true;
  document.getElementById("good").hidden = false;
  document.getElementById("end").hidden = false;
}
