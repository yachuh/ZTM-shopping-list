// Selecting the element
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//Function Declaration
function inputLength() {
  return input.value.length;
}

function createListItem() {
  var li = document.createElement("li"); //create a <li> node
  var text = document.createTextNode(input.value); // create textnode with input
  li.appendChild(text); // append input value to <li>
  ul.appendChild(li); //append <li> to <ul>
  input.value = ""; //clear input calue
}

function addListAfterClick() {
  if(inputLength() > 0) {
    createListItem();
  }
}

function addListAfterEnter(event) {
  if(inputLength() > 0 && event.code === "Enter") {
    createListItem();
  }
}

// Run function: add list item
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);