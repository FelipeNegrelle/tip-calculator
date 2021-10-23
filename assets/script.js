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
const tipFinal = document.getElementsByClassName("tipAmount");
//place to show the tip per person
const totalPerPerson = document.getElementsByClassName("totalPerson");
//button that reset the values
const reset = document.getElementsByClassName("reset");

tips.forEach(btn => {
	btn.addEventListener("click", () => {
		if (btn.classList.contains("selected")) {
			btn.classList.remove("selected");
			btn.classList.add("tips-itens");
			checkSelected();
			console.log(tips);
		} else {
			tips.forEach(e => {
				e.classList.remove("selected");
			})
			btn.classList.remove("tips-itens");
			btn.classList.add("selected");
			btn.classList.add("tips-itens");
			checkSelected();
			console.log(tips);
		}
	})
});

function calculateBill() {

}
calculateBill();