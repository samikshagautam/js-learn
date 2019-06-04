
var intervalId;
function decoration() {
    // alert("Hello, World!");

    //document.getElementById("tarea").style.fontSize="24px";
    if(! intervalId){
 intervalId =   setInterval(makeItBigger, 500);
    } else{
        clearInterval(intervalId);
        intervalId = null;
    }
}

function makeItBigger(){
    var element = document.getElementById("tarea");
    var computedFontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var fontSize = parseInt(computedFontSize);
    element.style.fontSize = (fontSize + 2) + 'px';
    }

function dec() {
    let checkBox = document.getElementById("check");
    let tarea = document.getElementById("tarea");
    if (checkBox.checked == true) {
        /*tarea.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";*/
        document.getElementById("body").style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        tarea.style.fontWeight = "bold";
        tarea.style.color = " green";
        tarea.style.textDecoration = "underline";
    } else {
        document.getElementById("body").style.backgroundImage = "";
        tarea.style.fontWeight = "";
        tarea.style.color = "";
        tarea.style.textDecoration = "";
    }
}