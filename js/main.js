window.onload = function () {
    var regButton = document.querySelector("form > button");
    regButton.onclick = regData;
    function regData() {
        alert("Reg button was clicked");
    }
};
