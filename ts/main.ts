window.onload = function()
{
    let regButton = <HTMLElement>document.querySelector("form > button");
    regButton.onclick = regData;

    function regData():void
    {
        alert("Reg button was clicked");
    }
}