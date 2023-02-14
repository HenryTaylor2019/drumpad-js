const kickArray = [
  "sounds/kicks/kick-1.wav",
  "sounds/kicks/kick-2.wav",
  "sounds/kicks/kick-3.wav",
  "sounds/kicks/kick-4.wav",
  "sounds/kicks/kick-5.mp3",
];

const snareArray = [
  "sounds/snares/snare-1.wav",
  "sounds/snares/snare-2.wav",
  "sounds/snares/snare-3.wav",
  "sounds/snares/snare-4.wav",
  "sounds/snares/snare-5.mp3",
];

const tomArray = [
  "sounds/toms/tom-1.mp3",
  "sounds/toms/tom-2.mp3",
  "sounds/toms/tom-3.mp3",
  "sounds/toms/tom-4.mp3",
  "sounds/toms/tom-5.wav",
];
const hatArray = [
  "sounds/hats/hat-1.wav",
  "sounds/hats/hat-2.wav",
  "sounds/hats/hat-3.wav",
  "sounds/hats/hat-4.wav",
  "sounds/hats/hat-5.mp3",
];

let initDrums = {
    kick: kickArray[0],
    snare: snareArray[0],
    tom: tomArray[0],
    hat: hatArray[0],
  };
  

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
  });
}

// Detecting key press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
    // Switch between each 'key' provided in the argument
    switch (key) {
      // When the event.key or innerHTML = 'w', run the constructor function
      case "a":
        var kick = new Audio(initDrums.kick);
        kick.play();
  
        break;
  
      case "s":
        var snare = new Audio(initDrums.snare);
        snare.play();
  
        break;
  
      case "d":
        var tom = new Audio(initDrums.tom);
        tom.play();
  
        break;
  
      case "f":
        var hat = new Audio(initDrums.hat);
        hat.play();
  
        break;
  
      default:
        break;
    }
  }
