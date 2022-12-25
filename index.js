// document.querySelector("button").addEventListener("click", handleClicked);

// function handleClicked() {
//     alert("I got clicked!");
// } this was the original code. but we need sounds, not a pop up :)

// button press

var nobuttons = document.querySelectorAll(".drum").length;

for (var i=0; i<nobuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var bihtml = this.innerHTML;
        makesound(bihtml);
        buttonanimation(bihtml);
        
    });

}

// keyboard press

document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonanimation(event.key);
        
    
}



);

function makesound(key){
    switch (key) {
        case "w":
            
              var audio = new Audio("sounds/crash.mp3");
              audio.play();
              break;
              
        case "a":
            
              var audio = new Audio("sounds/kick-bass.mp3");
              audio.play();
              break;
               
        case "s":
            
              var audio = new Audio("sounds/snare.mp3");
              audio.play();
              break;
              
        case "d":
            
              var audio = new Audio("sounds/tom-1.mp3");
              audio.play();
              break;
              
        case "j":
            
              var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
              
        case "k":
            
              var audio = new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
                   
        case "l":
            
              var audio = new Audio("sounds/tom-4.mp3");
              audio.play();
              break;
                     
    }

}

function buttonanimation(key){
    var buttonn = document.querySelector("." + key);
    buttonn.classList.add("pressed");
    setTimeout(function(){
        buttonn.classList.remove("pressed");
    }, 100);

      
}
