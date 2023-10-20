//Function performs the calculation and returns false
function calculate() {
    'use strict';

    //For storing Volume
    var volume;

    //Get a reference to the form value
    var radius=document.getElementById('radius').value;
    radius=Math.abs(radius);    //Make sure it's positive

    // Perform calculation
    volume=(4/3)*Math.PI*Math.pow(radius,3);
    volume=volume.toFixed(4);   // Format the volume
    document.getElementById('volume').value=volume;

    //Return false to prevent submission
    return false;
}

function init() {
    'use strict';
    document.getElementById('MyForm').onsubmit=calculate;
}
window.onload=init;