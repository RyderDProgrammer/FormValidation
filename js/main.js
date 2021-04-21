window.onload = function () {
    var regButton = document.querySelector("form > button");
    regButton.onclick = regData;
    function regData() {
        resetErrorMessages();
        isTextPresent("firstName", "First name is required!");
        isTextPresent("lastName", "Last name is required!");
    }
};
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextPresent(id, errMsg) {
    var textBox = document.getElementById(id);
    var textBoxVal = textBox.value;
    if (textBoxVal == "") {
        var errorSpan = textBox.nextElementSibling;
        errorSpan.innerHTML = errMsg;
        return false;
    }
    return true;
}
