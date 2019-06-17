// Select elements
const input = document.querySelector("#task-input");
const addTask = document.querySelector("#add");

const filter = document.querySelector(".clear-done");
const clear = document.querySelector(".clear-all");

const ul = document.querySelector("ul");

// let li = document.querySelectorAll("li");
let check = document.querySelectorAll(".check");
let remove = document.querySelectorAll(".remove");

//functions
function listItem(val) {
  let item = document.createElement("li");

  let outerSpan = document.createElement("span");
  outerSpan.classList.add("check");

  let checkIcon = document.createElement("i");
  checkIcon.classList.add("fas", "fa-check");

  let innerSpan = document.createElement("span");
  innerSpan.classList.add("item-text");
  innerSpan.textContent = val;

  let rmIcon = document.createElement("i");
  rmIcon.classList.add("fas", "fa-times", "remove");

  outerSpan.appendChild(checkIcon);
  outerSpan.appendChild(innerSpan);
  item.appendChild(outerSpan);
  item.appendChild(rmIcon);

  ul.appendChild(item);
}

function doneTask(itm) {
  itm.classList.toggle("done");
}

function rmTask(itm) {
  itm.parentNode.removeChild(itm);
}

//Event listeners


// on click or enter key
addTask.addEventListener("click", e => {
  let currentVal = input.value.trim();
  if (currentVal) {
    listItem(currentVal);
    input.value = "";
  }
  e.stopPropagation();
});

input.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    let currentVal = input.value.trim();
    if (currentVal) {
      listItem(currentVal);
      input.value = "";
    }
  }
  e.stopPropagation();
});

// in the ul
//add an event listener for clicks
// if the click happens on the remove icon, remove it from the list
//if the click happens on the check icon, add the checked class to make its background greenish.
ul.addEventListener("click", e => {
  // alert(e.target.classList);
  let current;
  if ([...e.target.classList].includes("fa-check")) {
    //alert("yes");
    current = e.target.parentNode.parentNode;
    doneTask(current);
  } else if ([...e.target.classList].includes("check")) {
    current = e.target.parentNode;
    doneTask(current);
  } else if ([...e.target.classList].includes("remove")) {
    current = e.target.parentNode;
    rmTask(current);
  }

  e.stopPropagation();
});

//in the footer
//listen for clicks in filter button
//go over all the list items and remove all with the class checked
filter.onclick = e => {
  let doneList = document.querySelectorAll(".done");
  doneList.forEach(element => {
    element.parentNode.removeChild(element);
  });
  e.stopPropagation();
};
// listen for clicks in the clear button
//go over all the list items and remove them
clear.onclick = e => {
  let li = document.querySelectorAll("li");
  li.forEach(element => {
    element.parentNode.removeChild(element);
  });

  e.stopPropagation();
};
