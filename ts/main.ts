window.onload = function()
{
    //Takes the button from the page and allows me to run the function.
    let regButton = <HTMLElement>document.querySelector("form > button");
    regButton.onclick = regData;
}

/**
 * Changes the heading to a random color when it is clicked on.
 */
function changeHeading()
{
    let heading = <HTMLElement>this;
    //making random color generator.
    //By establishing the RGB values at random to make
    //fun different colors.
    let red = Math.floor(Math.random() * 255 + 1)
    let green = Math.floor(Math.random() * 255 + 1)
    let blue = Math.floor(Math.random() * 255 + 1)
    let color = "rgb(" + red + "," + green + "," + blue + ")";

    //Making sure it works by outputting it to the console.
    console.log(color)
    heading.style.color = color;
    console.log(heading.style.color);
}

function regData():void
{
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form";
    //Added a class so that we are able to altar it with DOM
    //Manip vs just targetting the H2 in the CSS.
    msgHeading.setAttribute("class","message");
    msgHeading.onclick = changeHeading;

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement('afterend',msgHeading);

    //Takes out the msgHeading over the span of 3 seconds
    setTimeout(function(){
        msgHeading.remove();
    },3000)

    resetErrorMessages();
    isTextPresent("firstName","First name is required!");
    isTextPresent("lastName","Last name is required!");

    //validating date
    dateValid();
}

function dateValid() {
    let dobBox = <HTMLInputElement>document.getElementById("birthDate");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Needs to be dd/mm/yyyy format";
    }
}

function isValidDate(input:string):boolean
{
    //dd/mm//yyyy
    //\d{1,2}\/\d{1,2}\/\d{4}
    //Needs the / at the beginning and end.
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);
}

/**
 * Cleans out the spans and resets them back to the default
 * text which is *
 */
function resetErrorMessages():void
{
    let allSpans = document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++)
    {
        let currSpan = <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required"))
        {
            currSpan.innerText = "*";
        }
        else
        {
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the textbox with the given id has some text inside of it.
 * Otherwise will return false.
 * @param id The id of the <input type ="text"> to validate
 * @param errMsg The message to display in the sibling span of the textbox.
 * @returns true or false value based on what is passed into the program.
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxVal = textBox.value;
    if (textBoxVal == "") {
        let errorSpan = <HTMLSpanElement>textBox.nextElementSibling;
        errorSpan.innerHTML = errMsg;
        return false;
    }
    return true;
}
