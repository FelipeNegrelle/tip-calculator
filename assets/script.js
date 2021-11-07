"use strict";

//input for the bill value 
const bill = document.querySelector("#bill");
//button for the percentage of tip
const tips = document.querySelectorAll("#btn");
//button for custom percentage of tip
const tipCustom = document.getElementsByClassName("custom");
//input for the number of people to split the tip
const people = document.getElementById("people");
//place to show the total of the bill
let tipFinal = document.getElementsByClassName("tipAmount");
//place to show the tip per person
const totalPerPerson = document.getElementsByClassName("totalPerson");
//button that reset the values
const reset = document.getElementsByClassName("reset");
//select percentage for calculate the bill
const selected = document.querySelector("button.selected");
// checkbox for toggle darkmode
const checkbox = document.getElementById("checkbox");
//card answer for the dark toggle 
const cardAnswer = document.querySelector(".cardAnswer");
//main for toggle
const main = document.querySelector("main");
//texts for toggle
const text = document.querySelectorAll(".text");
// selected toggle
tips.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
            btn.classList.add("tips-itens");
            console.log(tips);
            console.log(selected);
        } else {
            tips.forEach(e => {
                e.classList.remove("selected");
            })
            btn.classList.add("selected");
            btn.classList.add("tips-itens");
            console.log(tips);
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
    console.log("sus");

    text.forEach(dark=> {
        dark.classList.toggle("dark");
    })
})

bill.addEventListener("input", () => {
    return;
})