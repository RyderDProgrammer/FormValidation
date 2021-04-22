window.onload = function () {
    var regButton = document.querySelector("form > button");
    regButton.onclick = regData;
};
function regData() {
    var msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form";
    msgHeading.setAttribute("class", "message");
    var h1 = document.querySelector("h1");
    h1.insertAdjacentElement('afterend', msgHeading);
    resetErrorMessages();
    isTextPresent("firstName", "First name is required!");
    isTextPresent("lastName", "Last name is required!");
    dateValid();
}
function dateValid() {
    var dobBox = document.getElementById("birthDate");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Needs to be dd/mm/yyyy format";
    }
}
function isValidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
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
