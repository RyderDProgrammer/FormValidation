window.onload = function () {
    var regButton = document.querySelector("form > button");
    regButton.onclick = regData;
    function regData() {
        isTextPresent("firstName", "First name is required!");
        isTextPresent("lastName", "Last name is required!");
    }
};
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
