///////////recuperation des elements du dom//////////

const clickButton = document.querySelector(".click-btn");
const imgCocacola = document.querySelector(".coca-cola-image");
const globalContainer = document.querySelector(".global-container");
const taste = document.querySelector(".taste");
const detail = document.querySelector(".detail");
const description = document.querySelector(".description");

///////////tableaux de données//////////////////////////
const globalContainerBackground = {
	1: "#292929, #1c1c1c",
	2: "#ece1c9,#9f8c5c",
	3: "#8f355a,#5E2438,#2C1316",
	4: "#F0AE54,#8B481E",
};

const tastysDetail = [
	"Coca-Cola Zero Sugar Real Coke taste with zero calories. It's possible!",
	"Great taste of Coca-Cola with refreshingly smooth balance of vanilla flavor.",
	"Great taste of Coca-Cola with a sweet, smooth cherry flavor.",
	"Newest flavor to join the Coke family with a new twist on delicious.",
];
const tasty = ["Zero Sugar", "Vanilla", "Cherry", "Orange Vanilla"];

/////////////evenements//////////////////////////////

let i = 1;
clickButton.addEventListener("click", () => {
	i++;

	if (i > 4) {
		i = 1;
		slideInOut();
	}

	slideInOut();
});

/////////////function////////////////////

function slideInOut() {
	//la canette// slide vers la gauche avec opacity 0
	imgCocacola.classList.remove("in");
	imgCocacola.classList.add("out");

	//le texte // slide vers le bas avec opacity 0
	description.classList.remove("description-in");
	description.classList.add("description-out");

	setTimeout(() => {
		//canette // puis slide vers la droite en opacity 0
		imgCocacola.classList.add("right");

		//le texte // puis slide vers le haut en opacity 0
		description.classList.add("description-top");
	}, 200);

	setTimeout(() => {
		//canette // puis slide vers le milieu en opacity 1
		imgCocacola.classList.remove("right");
		imgCocacola.classList.remove("out");
		imgCocacola.classList.add("in");

		//le texte // puis slide vers le centre en opacity 1
		description.classList.remove("description-top");
		description.classList.remove("description-out");
		description.classList.add("description-in");

		imgCocacola.src = `assets/bouteille/${i}.png`;

		globalContainer.style.background = `linear-gradient(135deg,${
			globalContainerBackground[`${i}`]
		})`;
		taste.innerHTML = tasty[i - 1];
		detail.innerHTML = tastysDetail[i - 1];
	}, 400);
}
