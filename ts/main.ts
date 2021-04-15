window.onload = function()
{
    let regButton = <HTMLElement>document.querySelector("form > button");
    regButton.onclick = regData;

    function regData():void
    {
        isTextPresent("firstName","First name is required!");
        isTextPresent("lastName","Last name is required!");
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
