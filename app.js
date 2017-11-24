window.addEventListener('keydown', playSound);

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return;

  audio.currentTime = 0; //rewind
  audio.play();
  key.classList.add("playing");
};

var removeTransition = function(e){
  console.log(e);
  if(e.propertyName !== "transform") return;
  this.classList.remove('playing');
};


const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
