
//recuperation des elements du dom
const divVies=document.querySelector('.vies');
const message=document.querySelector('#message');
const formulaire=document.querySelector('#inputBox');
const input=document.querySelector('#number');
const essayerBtn=document.querySelector('#essayerBtn');
const rejouer=document.querySelector('#rejouer');
const body=document.getElementsByTagName('body')[0];

//definition des modeles de coeur
const coeurVide='<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein='<ion-icon name="heart"></ion-icon>';

//definition des fonds
const bgFroid='linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiede='linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
const bgChaud='linear-gradient(-60deg, #ff5858 0%, #f09819 100%)';
const bgBrulant='linear-gradient(to top, #ff0844 0%, #ffb199 100%)';			

//font du ganiant
const bgWin='linear-gradient(-225deg, #231557 0%, #44107A 29%,#FF1361 67%,#FFF800 100%)';			 

//font du perdant
const bgLoose='linear-gradient(60deg, #29323c 0%, #485563 100%)';
//fonction du jeux 
const play= () => {
	//nombre aleatoire

const randomNumber= Math.floor(Math.random()*101);
const totalVies=6;
let vies = totalVies;
console.log(randomNumber);



// actualisation a chaque essaie
	formulaire.addEventListener('submit',(e) => {
		
		e.preventDefault();
		const valeurInput = parseInt(input.value);

		if (valeurInput < 0 || valeurInput > 100) return;

		if (valeurInput === randomNumber) {
			body.style.backgroundImage=bgWin;
			message.textContent = ` BRAVO !!! le nombre etait bien ${randomNumber}`;
			rejouer.style.display = "block";
			essayerBtn.setAttribute("disabled","");
		}

		if (valeurInput !== randomNumber) { 
			if (randomNumber <= valeurInput +2 && randomNumber >= valeurInput -2 ) {
				body.style.backgroundImage=bgBrulant;
				message.textContent = "c'est brulant !!!!🔥🔥🔥🔥";
			} else if(randomNumber <= valeurInput +5 && randomNumber >= valeurInput -5 ) {
				body.style.backgroundImage=bgChaud;
				message.textContent = "c'est chaud !!!!🔥🔥";


			}else if(randomNumber <= valeurInput +10 && randomNumber >= valeurInput -10 ) {
				body.style.backgroundImage=bgTiede;
				message.textContent = "c'est tiede !!!!😓😓😰😰";


			}else {
				body.style.backgroundImage=bgFroid;
				message.textContent = "c'est froid !!!!🧊🥶🥶🥶";


			}
			vies--;
			verfyloose();
		}

		actualiseCoeurs(vies);
	})

	const verfyloose = () => {
		if (vies === 0) {
			body.style.backgroundImage=bgLoose;
			body.style.color = '#990000';
			essayerBtn.setAttribute("disabled","");
			message.textContent = `Vous avez perdue!😭 la reponse etait ${randomNumber}`;
			rejouer.style.display = "block";
		}	

	}
	const actualiseCoeurs = (vies) => {
		divVies.innerHTML = "";
		let tableauDeVies = [];
		for (var i = 0; i < vies; i++) {
			tableauDeVies.push(coeurPlein);
		}

		for (var i = 0; i < totalVies - vies; i++) {
			tableauDeVies.push(coeurVide);
		}
		tableauDeVies.forEach(coeur => {
			divVies.innerHTML += coeur;
		})

	}
	actualiseCoeurs(vies);
	rejouer.addEventListener('click', () => {
		message.style.display='none';
		document.location.reload(true);
	})

}
play();