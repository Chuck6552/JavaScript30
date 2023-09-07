//Drumkit correct version like video : https://www.youtube.com/watch?v=VuN8qwZoego//

//fucntion declaration// 




function AddingYellowBorder(e) {
    // console.log(e.key); //letter of key pressed//
    const divAllKey = document.getElementsByClassName("key");
    console.log(divAllKey);
    keyLetter = (e.key).toUpperCase();
    console.log(keyLetter);
    

    //NOTES// A TRAVAILLER//
    let divKey = document.evaluate(`"//kbd[contains(${keyLetter})]"`, document, null, XPathResult.ANY_TYPE, null );
    let thisdivKey = divKey.iterateNext(1);
    // const divKey = document.querySelector(`"[kbd.innerText = ${keyLetter}]"`)
    console.log(divKey);
    //console.logg(thisdivKey);
    // if ((divKey.firstElementChild.textContent) != null)
    // console.log(divKey.firstElementChild.textContent);
    // // // divKey[e].dataset.key
}


window.addEventListener("keypress", (e) => {
AddingYellowBorder(e);
})

