//Javascript for Drum kit//

// listen to the key the user make//
window.addEventListener("keydown", (e) => {
    let KeyPressed;
        //TEST//
        // console.log("you pressed a key");
        KeyPressed = e.key;
        KeyPressed = KeyPressed.toUpperCase();
        // console.log(KeyPressed);
        verifyKey(KeyPressed); 
},
    );

    // window.addEventListener("keyup"), (e) => {
    




//check if the key is one of the kbd of 
function verifyKey (KeyPressed) {
        // keyPassed = divKey[i].getElementsByTagName("kbd");
    const divKey = document.getElementsByClassName("key");
    for (let i = 0; i < divKey.length; i++)
        if ((divKey[i].children[0].outerText) === KeyPressed) {
            divKey[i].classList.add("playing");
            setTimeout(() => {
                divKey[i].classList.remove("playing");
            }, 100);
            return;
            
        }
        else {
            // console.log("Not a valid key");
        }
};

//Get parent attribute of the corresponding Kbd





//NOTES//
//1. Add event listener to class for each keys that should be pressed.
   //-DONE-1.1 When key pressed (Ok and check if valid est ok aussi !)
        //1.1.1 Add yellow shinning border
        //1.1.2 play sound link with the button (see html)


