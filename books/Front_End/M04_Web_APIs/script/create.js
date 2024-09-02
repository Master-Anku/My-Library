//create
var body = document.body;
var h1 = document.createElement("h1");
var info = document.createElement("div");
var imgEl = document.createElement("img");
var nameEl = document.createElement("section");
var yangon = document.createElement("section");
var myanmar = document.createElement("section");
var text = document.createElement("span");
var orderedli = document.createElement("section");
var footer = document.createElement('section');



//ol
var ollist = document.createElement("ol");

//ul
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


//text content
h1.textContent = "Hello World!";
nameEl.textContent = "My name is Ankura";
yangon.textContent = "I live in Yangon";
// myanmar.textContent = "Myanmr";
text.textContent = "My favorite foods:"
li1.textContent = "Rice $";
li2.textContent = "Coffee $";
li3.textContent = "watermelon $ ";
li4.textContent = " Durian fruit $";



//append
body.appendChild(h1);
body.appendChild(nameEl);
body.appendChild(yangon);
body.appendChild(myanmar);
myanmar.appendChild(imgEl)
// body.appendChild(img);
body.appendChild(text);
body.appendChild(footer);


//append ol li
body.appendChild(ollist);
ollist.appendChild(li1);
ollist.appendChild(li2);
ollist.appendChild(li3);
ollist.appendChild(li4);

footer.textContent = "Made with love by Yangon";


//set attribute
h1.setAttribute("style", "margin: 0 auto; text-align:center; color:blue;");
nameEl.setAttribute("style", "text-align:center; font-size: 25px;")
imgEl.setAttribute("src", "images/anku.png");
imgEl.setAttribute("width", '300px; ');
yangon.setAttribute("style", "text-align:center; font-size: 25px;")
myanmar.setAttribute("style", "text-align:center; font-size: 25px;")
text.setAttribute("style", "font-size:30px; color:black;")
ollist.setAttribute("style", "background-color:#cae4e4; font-size:25px;")
footer.setAttribute("style", "text-align:center; font-size:1.5rem;")