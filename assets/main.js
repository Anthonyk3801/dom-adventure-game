/**
 * DOM Adventure Game
 */

/*document.querySelector('#game').textContent = 'DOM Adventure Game';*/

function start(){
  document.getElementById("pokePerson").hidden = true;
  document.getElementById("end").hidden = true;
  document.getElementById("Form").hidden = true;
  document.getElementById("move").hidden = true;
  document.getElementById("poke").hidden = true;
  document.getElementById("moveDesk").hidden = true;
  document.getElementById("school").hidden = false;
  document.getElementById("text").hidden = false;
  document.getElementById("text2").hidden = false;
  document.getElementById("start").hidden = true;
  document.getElementById("left").hidden = false;
  document.getElementById("middle").hidden = false;
  document.getElementById("right").hidden = false;
}

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
