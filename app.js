//Selectors (Seçiciler) - Style Özellikleri

//classname , id , tag name

//getElementById : id ye göre elementi yakalar
//getElementByClassName : class ismine göre yakalar.
//getElementByTagName : etiket ismine göre yakalar.





// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
// const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })

// console.log(classListesi);


// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;


// console.log(buttonText);
// console.log(buttonText2);



// button.innerHTML="<b>Todo Ekleyin</b>";


// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })
// console.log(todoList);



// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);


// const todoList = document.getElementsByTagName("li");
// console.log(todoList);



// getElementById - getElementByClassName - getElementByTagName


//querySelector - querySelectorAll


// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);

// console.log(document.getElementById("todoClearButton")));


// const todoList = document.querySelector(".list-group");
// console.log(todoList);

//odd ve even
// const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"));

// todoList.forEach(function(todo){
//     todo.style.backgroundColor = "lightgrey";
// })

// console.log(todoList);






//  const button = document.getElementById("todoAddButton")

//  console.log(button);
//  console.log(button.id);
// console.log(button.getAttribute("id"));
// console.log(button.className);

// const classListesi = button.classList;

// classListesi.forEach(function(classNAme){
//     console.log(classNAme );
// })

// let buttonText2 = button.innerHTML;

// console.log(buttonText2);

// let todoList = Array.from(document.getElementsByClassName("list-group-item"));

//     todoList.forEach(function(todo){
//         console.log(todo.textContent);

//     })

// console.log(todoList);



// const forms = document.getElementsByTagName("form")
// console.log(forms[0






// ]);

// const todo = document.querySelectorAll(".list-group-item")[0];
// const todoList = document.querySelector(".list-group");
// const clearButton = document.querySelector("#todoClearButton")

// console.log(clearButton);

// todo.style.color="white";
// todo.style.backgroundColor="purple";
// todo.style.fontWeight ="900";
// todo.style.paddingTop ="20px";
// todo.style.paddingLeft = "70px";
// todoList.style.marginTop="60px";


// clearButton.style.backgroundColor= "red";
// clearButton.style.fontWeight="900";
// clearButton.style.color ="black"
// clearButton.style.padding="50px"
// clearButton.style.borderRadius="40px"







// const todo = document.querySelector(".list-group-item");
// const todoList = document.querySelector(".list-group")
// const card = document.querySelector(".card")

// let value;

// value =todoList;
// value = todoList.children[0];

// value = Array.from(todoList.children);
// value.forEach(function(todo){
//     console.log(todo.textContent );
// })

// console.log(value);
const cardBody = document.querySelectorAll( ".card-body")[1];
console.log(cardBody);

const link = document.createElement("a");
link.id="goBlogWebSite";
link.className="btn btn-dark btn-sm mt-3";
link.href = "https://github.com/mehmetaln";
link.target = "_blank";
link.innerHTML = "Benim Web Siteme Git";
cardBody.appendChild(link);
console.log(link);


const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i = document.createElement("i");
todo.className= "list-group-item d-flex justify-content-between";
todo.innerHTML ="Todo 5"

todoLink.href="#";
todoLink.className = "delete-item"

i.className= "fa fa-remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);