"use strict";
//input for the bill value 
const bill = document.getElementById("bill");
//button for the percentage of tip
const tips = document.querySelectorAll("#btn");
//button for custom percentage of tip
const tipCustom = document.getElementsByClassName("custom");
//input for the number of people to split the tip
const people = document.getElementById("people");
//place to showe the total of the bill
let tipFinal = document.getElementsByClassName("tipAmount");
//place to show the tip per person
const totalPerPerson = document.getElementsByClassName("totalPerson");
//button that reset the values
const reset = document.getElementsByClassName("reset");
//select percentage for calculate the bill
const selected = document.querySelector("button.selected");
// class with the parseinted values of the bill, tip and people
let values = {
    billV: parseInt(bill.value),
    percentage: parseInt(selected.value),
    peopleN: parseInt(people.value)
}

tips.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
            btn.classList.add("tips-itens");
            btn.classList.values();
            console.log(tips);
            console.log(selected);
        } else {
            tips.forEach(e => {
                e.classList.remove("selected");
            })
            btn.classList.remove("tips-itens");
            btn.classList.add("selected");
            btn.classList.add("tips-itens");
            console.log(tips);
        }
    })
});

function calculateBill() {
    values.billV = parseInt(bill.value);
    values.percentage = parseInt(selected.value);
    values.peopleN = parseInt(people.value);
    console.log(values.billV, values.percentage, values.peopleN);

    tipFinal.value = ((values.billV * values.percentage) / 100) / values.peopleN;
}

if (values.billV > 0 && values.peopleN > 0) {
    calculateBill();
}
