const inputText = document.querySelector("#gr_input");
const sub_btn = document.querySelector(".addBtn");
const list = document.querySelector(".grocery_list ul");
const ul = document.querySelector(".grocery_ul");
const clear = document.querySelector(".clr_items");
let ulAll = document.querySelectorAll("li");

let edit_icon;
let disable = "false";

sub_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputText.value != "") {
    if (sub_btn.textContent === "Submit") {
      addBtn();
      ulAll = document.querySelectorAll("li");
    } else if (sub_btn.textContent === "Save") {
      updateField();
    }
  }
});

clear.addEventListener("click", (e) => {
  const groceryListDiv = clear.previousElementSibling;
  const ulElement = groceryListDiv.querySelector("ul");
  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
  }
  ulAll = ulElement;
});

ul.addEventListener("click", (e) => {
  if (disable === "false") {
    if (e.target.className === "fa fa-trash-o") {
      const icn = e.target;
      const spanparent = icn.parentNode;
      const li = spanparent.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    }

    if (e.target.className === "fa fa-edit") {
      edit_icon = e.target;
      const spanparent = edit_icon.parentNode;
      const li = spanparent.parentNode;

      inputText.value = li.textContent.trim();
      sub_btn.textContent = "Save";
      disable = "true";
    }
  }
});

function addBtn() {
  //append list
  const set_li = document.createElement("li");
  set_li.innerHTML = inputText.value;
  list.appendChild(set_li);

  //append span
  const span1 = document.createElement("SPAN");
  const span2 = document.createElement("SPAN");
  span1.className = "spans";
  span2.className = "spans";
  set_li.appendChild(span1);
  set_li.appendChild(span2);

  const icon1 = document.createElement("i");
  const icon2 = document.createElement("i");
  icon1.className = "fa fa-edit";
  icon2.className = "fa fa-trash-o";
  span1.appendChild(icon1);
  span2.appendChild(icon2);
}

function updateField() {
  const spanparent = edit_icon.parentNode;
  const li = spanparent.parentNode;

  const textNode = li.childNodes[0];
  if (textNode.nodeType === Node.TEXT_NODE) {
    textNode.textContent = inputText.value;
  }
  sub_btn.textContent = "Submit";
  disable = "false";
}
