//Javascript for Drum kit//

// listen to the key the user make//
window.addEventListener("keydown", (e) => {
    //give me the start time when the key is press//
    let startTime = Date.now();
    let KeyPressed;
        //TEST//
        // console.log("you pressed a key");
        KeyPressed = e.key;
        KeyPressed = KeyPressed.toUpperCase();
        // console.log(KeyPressed);
        verifyKey(KeyPressed, startTime); 
},
    );

//check if the key is one of the kbd of 
function verifyKey (KeyPressed, startTime) {
        // keyPassed = divKey[i].getElementsByTagName("kbd");
        keyCount = 0;
        const divKey = document.getElementsByClassName("key");
    for (let i = 0; i < divKey.length; i++)
        if ((divKey[i].children[0].outerText) === KeyPressed) {
            divKey[i].classList.add("playing");
            
            //playing the good sound//
            keySound = document.getElementsByTagName("audio");
            keySound[i].currentTime = 0;
            keySound[i].play();
            setTimeout(() => {
                divKey[i].classList.remove("playing");
            }, 100);
            return;
        }
};

//Get parent attribute of the corresponding Kbd


//NOTES//
//1. Add event listener to class for each keys that should be pressed.
   //-DONE-1.1 When key pressed (Ok and check if valid est ok aussi !)
        //1.1.1 Add yellow shinning border
        //1.1.2 play sound link with the button (see html)
