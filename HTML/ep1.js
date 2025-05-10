function data() {
   
    let name = document.getElementById("firstname").value;
    let number = document.getElementById("number").value;
    let srn = document.getElementById("srn").value;

    
    let nameDisplay = document.getElementById("heading");
    let numberDisplay = document.getElementById("num");
    let srnDisplay = document.getElementById("srn-display");

    
    nameDisplay.innerHTML = "Name: " + name;
    numberDisplay.innerHTML = "Number: " + number;
    srnDisplay.innerHTML = "SRN: " + srn;
}