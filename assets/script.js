"use strict";

//input for the bill value 
const bill = document.querySelector("#bill");
//button for the percentage of tip
const tips = document.querySelectorAll("#btn");
//button for custom percentage of tip
const tipCustom = document.querySelector(".custom");
//input for the number of people to split the tip
const people = document.getElementById("people");
//place to show the total of the bill
const tipFinal = document.querySelector(".tipAmount");
//place to show the tip per person
const totalPerPerson = document.querySelector(".totalPerson");
//button that reset the values
const reset = document.getElementsByClassName("reset");
// checkbox for toggle darkmode
const checkbox = document.getElementById("checkbox");
//card answer for the dark toggle 
const cardAnswer = document.querySelector(".cardAnswer");
//main for toggle
const main = document.querySelector("main");
//texts for toggle
const text = document.querySelectorAll(".text");
const text3 = document.querySelectorAll(".text3");

// selected toggle

let billV, peopleV, customV, tipV;

tips.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
            btn.classList.add("tips-itens");
        } else {
            tips.forEach(e => {
                e.classList.remove("selected");
            })
            tipV = parseInt(btn.value);
            console.log(tipV);
            btn.classList.add("selected");
            btn.classList.add("tips-itens");
        }
    })
})

// dark toggle implementation
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    bill.classList.toggle("dark");
    people.classList.toggle("dark");
    cardAnswer.classList.toggle("dark");
    main.classList.toggle("dark");
    text.forEach(dark=> {
        dark.classList.toggle("dark");
    })
    text3.forEach(dark => {
        dark.classList.toggle("dark")
    })
    tipFinal.classList.toggle("dark");
})

bill.addEventListener("blur", () => {
    billV = parseFloat(bill.value);
    console.log(billV);
});

people.addEventListener("blur", () => {
    if (parseFloat(people.value) > 0) {
        peopleV = parseFloat(people.value);
        console.log(peopleV);
        if (people.classList.contains("warn")) {
            people.classList.remove("warn");
        }
    } else {
        people.classList.add("warn");
    }
})

tipCustom.addEventListener("blur", () => {
    customV = parseFloat(tipCustom.value);
    console.log(customV);
     })

function calc() {
    if (customV > 0) {
        total = (customV * tipV) / peopleV;
        console.log(customV);
    }

    percentage = (billV * tipV) / 100;
    total = (billV * tipV) / peopleV;
    tipFinal.value = `$${10+2}`;
    totalPerPerson.value = `$${10+2}`;
}
