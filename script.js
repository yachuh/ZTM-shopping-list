// Variables Declaration
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul"); //return full element

var list = document.querySelectorAll("li"); //return array
var listLength = list.length;

// Add delete button to existing items
for (var i = 0; i < listLength; i++) {
  var delBtn = document.createElement("button");
  var t = document.createTextNode("Delete"); // create "Delete" text
  delBtn.appendChild(t); // append text to button
  delBtn.className = "btn-del"; // add class to button
  list[i] = list[i].appendChild(delBtn);
}

// Function Declaration
function inputLength() {
  return input.value.length;
}

// Function: Add new item with delete button
function createListElement() {
  var li = document.createElement("li"); //create a <li> node
  li.appendChild(document.createTextNode(input.value)); // add input value to <li>
  var delBtn = document.createElement("button"); // create a <button> node
  var t = document.createTextNode("Delete"); // create "Delete" text
  delBtn.appendChild(t); // append text to button
  delBtn.className = "btn-del"; // add class to button
  li.appendChild(delBtn); // append delete button to <li>
  ul.appendChild(li); //append <li> to <ul>
  input.value = "";
}

// Function: Add new item
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.code === "Enter") {
    createListElement();
  }
}

// Run functions - add item
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Run functions - click to crossover item

// ul.onclick = function(event){
// 	var target = event.target;
// 	if(target.nodeName === "LI"){
// 		target.classList.toggle("done");
// 	}
// }

ul.addEventListener("click", function (event) {
  var target = event.target;
  if (target.nodeName === "LI") {
    target.classList.toggle("done");
  }
});

//Run functions - click Delete button to delete item
// ul.onclick = function(event){
// 	var target = event.target;
// 	if (target.nodeName === "BUTTON" && target.className === "btn-del") {
// 		target.parentElement.remove();
// 	}
// }

ul.addEventListener("click", function (event) {
  var target = event.target;
  if (target.nodeName === "BUTTON" && target.className === "btn-del") {
    target.parentElement.remove();
  }
});

//Run function: clear all items
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
  var list = document.querySelectorAll("li");
  var listLength = list.length;
  for (var i = 0; i < listLength; i++) {
    list[i] = list[i].remove();
  }
});
