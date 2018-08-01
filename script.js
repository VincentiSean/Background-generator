var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randButton");

function pageLoad() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";

	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandom() {
	color1.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	color2.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	setGradient();
}

pageLoad();
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandom);