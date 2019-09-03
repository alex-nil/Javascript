
//Skapa variabel för div och sätter ID på dom

let createDiv1 = document.createElement("div");
let createDiv2 = document.createElement("div");
createDiv1.setAttribute("id", "div1");
createDiv2.setAttribute("id", "div2");

document.body.appendChild(createDiv1);
document.body.appendChild(createDiv2);

//Skapa ett p-element och text
let para = document.createElement("p");
let node = document.createTextNode("Alexander Nilsson");

//Lägger till p-element till div1 ID
para.appendChild(node);
let div1 = document.getElementById("div1"); //Hämtar div ID
div1.appendChild(para);


//Skapar en array 
let hobby = ["Spela piano", "Göra musik", "Spela gitarr", "Träna"];
let div2 = document.getElementById("div2");
let minArray; //Skapar en variabel som jag kan spara loop array i
for (let i = 0; i < hobby.length; i++) {
    minArray = document.createTextNode(hobby[i] + ", "); //lägger till space + kommatecken efter varje ord.
    div2.appendChild(minArray); //Lägger till array i div2
}



