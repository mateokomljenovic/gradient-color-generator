var css = document.querySelector("h3"); //Select H3 for the text later
var color1 = document.querySelector(".color1"); //Select input1
var color2 = document.querySelector(".color2"); //Select input2
var body = document.getElementById("gradient"); //Select body to show gradient later

function setGradient() { //function for color input and text output
    body.style.background = "linear-gradient(to right, " 
                            + color1.value + ", " 
                            + color2.value;

                            css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
 
