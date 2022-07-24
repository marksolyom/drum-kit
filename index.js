//Detecting Mouse Click
const numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key) {
    switch (key) {
        case "q":
            const tom1 = new Audio("audio/tom-1.mp3");
            tom1.play();
            break;

        case "w":
            const tom2 = new Audio("audio/tom-2.mp3");
            tom2.play();
            break;
    
        case "e":
            const tom3 = new Audio("audio/tom-3.mp3");
            tom3.play();
            break;

        case "r":
            const tom4 = new Audio("audio/tom-4.mp3");
            tom4.play();
            break;

        case "i":
            const snare = new Audio("audio/snare.mp3");
            snare.play();
            break;

        case "o":
            const crash = new Audio("audio/crash.mp3");
            crash.play();
            break;

        case "p":
            const kick = new Audio("audio/kick.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

// Button Animation Function
function buttonAnimation(currentKey) {

    const activeButton =  document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}