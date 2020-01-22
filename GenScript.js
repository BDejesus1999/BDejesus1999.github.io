//generate rando passcode
function generate() {

    //set passcode length/complexity
    let complexity = doc.getElementById("slider").value;

    //possible passcode values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let passcode = "";

    //create for loop to choose the passcode character
    for (var i = 0; i <= complexity; i++) {
        passcode = passcode + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1))));
    }

    //add passcode to textbox/display location
    document.getElementById("display").value = passcode;

}