//Javascript for Drum kit//

// listen to the key the user make//
window.addEventListener("keydown", (e) => {
    let KeyPressed;
    console.log("you pressed a key");
    KeyPressed = e.key;
    KeyPressed = KeyPressed.toUpperCase();
    console.log(KeyPressed);
    verifyKey(KeyPressed);
    // ADD function to check if key press is one of the kbd of div
    
},
    );

//check if the key is one of the kbd of 
function verifyKey (KeyPressed) {
    const divKey = document.getElementsByClassName("keys");
    let keyPassed = divKey[0].getElementsByTagName("kbd");
    
    for (let i = 0; i < keyPassed.length; i++)
        if ((keyPassed[i].innerHTML) === KeyPressed) {
            console.log("Valid Key");
            return;
        }
        else {
            console.log("Not a valid key");
        }
};




//NOTES//
//1. Add event listener to class for each keys that should be pressed.
   //-DONE-1.1 When key pressed (Ok and check if valid est ok aussi !)
        //1.1.1 Add yellow shinning border
        //1.1.2 play sound link with the button (see html)


