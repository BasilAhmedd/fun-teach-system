function playSound(id) {
  var audio = document.getElementById(id);
  audio.play();
}
function slider(i){
  var slide =document.querySelector(".bigdiv").style.marginLeft = `${-100 * i}vw`;
}