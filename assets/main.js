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
