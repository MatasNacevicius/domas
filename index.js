const divas = document.querySelector("div");
console.log(divas);

const divas1 = document.querySelector(".divas1"); // klase
const divas2 = document.querySelector("#divas1"); // id

console.log(divas1, divas2);

const byID = document.getElementById("divas1");
console.log(byID);

const byClass = document.getElementsByClassName("divas1");
console.log(byClass);

const arr = document.querySelectorAll("div");
console.log(arr);

const byTag = document.getElementsByTagName("div");
console.log(byTag);

const child = divas.querySelector("p");
console.log(child);

const child1 = document.querySelector("div").childNodes; // grazina nodlistu
console.log(child1);

const child2 = document.querySelectorAll("div > p");
console.log(child2);

const firstChild = document.querySelector("div > p");
console.log(firstChild, child2[0]);

firstChild.setAttribute("id", "pirmasP");
child2[1].className = "antrasP";
console.log(firstChild, child2[1]);

// firstChild.removeAttribute("id")

const attr = firstChild.getAttribute("id");
console.log(attr);

child2[1].classList.add("myClassInCss");
child2[1].classList.remove("myClassInCss");
child2[1].classList.replace("antrasP", "myClassInCss");

child2[1].style.backgroundColor = "yellow";

const myButton = document.createElement("button");
console.log(myButton);

divas2.appendChild(myButton);

divas2.insertAdjacentElement("beforebegin", myButton);

divas2.innerHTML += "<span>cia yra span</span>";

child2[0].innerText = "Click";
child2[1].textContent = "Click";
myButton.innerHTML = "Click";

const span = document.querySelector("span");
span.remove();

myButton.addEventListener("click", () => {
  if (myButton.style.backgroundColor === "red") {
    myButton.style.backgroundColor = "blue";
  } else {
    myButton.style.backgroundColor = "red";
  }
});

myButton.removeEventListener("click", () => {
  console.log("event listener removed");
});

const myButton1 = document.createElement("button");
myButton1.innerText = "Click1";
const myButton2 = document.createElement("button");
myButton2.innerText = "Click2";

divas2.append(myButton1, myButton2);

const buttonsGroup = document.querySelectorAll("button");
console.log(buttonsGroup);

buttonsGroup.forEach((el, ind) =>
  el.addEventListener("click", () => {
    console.log(`you clicked button ${el.innerText}`);
  })
);

const forma = document.querySelector("form");
const inputas = document.querySelector("input");
const submitas = document.querySelector("form > button");
console.log(forma, inputas, submitas);

const array = [];
let counter = 0;

submitas.addEventListener("click", (event) => {
  event.preventDefault();
  counter++;
  const inputoValue = inputas.value;
  console.log(inputoValue);

  const person = {
    id: counter,
    name: inputoValue,
  };
  array.push(person);
  console.log(array);
  localStorage.setItem("zmones", JSON.stringify(array));

  forma.reset();
});
submitas.addEventListener("click", (a) => {
  a.preventDefault();
  console.log(a.target);
});

const editInput = document.querySelector("#edit");
const editas = document.querySelector("#editbutton");
console.log(editInput, editas);

editas.addEventListener("click", (e) => {
  e.preventDefault();
  const editable = parseInt(editInput.value);
  console.log(editable);

  const fromLS = JSON.parse(localStorage.getItem("zmones"));
  console.log(fromLS);
  const founded = fromLS.findIndex((el) => el.id === editable);
  console.log(founded);
});
