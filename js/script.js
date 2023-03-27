// const btn = document.getElementById("menu-btn");
// const menu = document.getElementById("menu");

// btn.addEventListener("click", navToggle);

// function navToggle() {
// 	btn.classList.toggle("open");
// 	menu.classList.toggle("flex");
// 	menu.classList.toggle("hidden");
// }

const btn = document.querySelector(".hamburger");
const modalButton = document.getElementById("modal-button");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");

function navToggle() {
	btn.classList.toggle("open");
}

btn.addEventListener("click", navToggle);

modalButton.addEventListener("click", () => {
	modal.style.display = "block";
	document.querySelector(".text-resizable").style.display = "none";
	document.querySelector("#modal-button").style.display = "none";
	navToggle();
});

closeModalButton.addEventListener("click", () => {
	modal.style.display = "none";
	document.querySelector(".text-resizable").style.display = "block";
	document.querySelector("#modal-button").style.display = "block";
	navToggle();
});
