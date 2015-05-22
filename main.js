var img1 = new Image(),
img2 = new Image(),
img3 = new Image(),
img4 = new Image(),
img5 = new Image(),
img6 = new Image(),
img7 = new Image(),
img8 = new Image();

img1.fuente = "Assets/001.png";
img2.fuente = "Assets/002.png";
img3.fuente = "Assets/003.png";
img4.fuente = "Assets/004.png";
img5.fuente = "Assets/005.png";
img6.fuente = "Assets/006.png";
img7.fuente = "Assets/007.png";
img8.fuente = "Assets/008.png";

var images = [img1, img2, img3, img4, img5, img6, img7, img8]; //and here
var texts = [
"Siempre tienes la libertad de escoger qué hackear primero, qué hackear segundo, y qué no hackear.",
"Tus hacks cambiarán cuando tu cambies.",
"Convéncete de que no tienes límites, porque en realidad, no los tienes.",
"Debes ser un eterno aprendiz.  Mientras más aprendas, más confianza tendrás en tus hacks.",
"Siempre parece imposible hasta que lo hackeas.",
"Las dificultades preparan a personas comunes para hacks extraordinarios.",
"¡Hackea ahora! El “luego” tiende a convertirse en “nunca”.",
"Ama tu código como a ti mismo.",
"Cierra los ojos, respira profundo, visualiza un arcoíris y vuelve a intentarlo.",
"No sólo de código vive el hombre.",
"Cualquier hack es cariño.",
"Hackea tu impaciencia, baby!",
"Hackea, mami, hackea.",
"Todo está en la mente. Como los unicornios.",
"No te rindas.",
"La vida es bella como ése algoritmo. Ya sabes a qué me refiero.",
"Hackea tus limites!",
"Cree en ti mismo. Funcionará. Creeme, soy un unicornio.",
"No digas “es imposible”, di “no lo he hackeado todavía.”",
"La fuerza no viene de la capacidad de programar, si no de la voluntad de hackear.",
"Todo programa sofisticado algún día fue un “Hello world”. ",
"Sí, ¡tu puedes!",
"Deja de hacerte el pendejo y aprende lo que tengas que programar.",
"Fallas el 100% de los hacks que no intentas.",
"Nunca renuncies a algo que realmente quieres hackear.",
"A veces la gente llora. No por que sea débil, si no porque lleva mucho tiempo cometiendo errores de sintaxis que no encuentra. ",
"La idea no es el problema, el problema es no saber como realizar la idea.",
"Si lo puedes soñar, lo puedes programar. ",
"Fracaso no significa que no podamos lograr nuestros hacks, tan solo que tardaremos un poco más en hacerlo. ",
"Un unicornio ve posibilidades donde los demás ven problemas.",
"Sólo existen dos días al año en los que no se puede hackear nada y son ayer y mañana.",
"El que quiere lograr algo encuentra un algoritmo, el que no, una excusa.",
"Si el plan A no funciona no te preocupes, el alfabeto tiene 26 letras. ",
"Nada es imposible, weon.",
"No programes duro, programa inteligente. ",
"La verdadera sabiduría está en reconocer la propia ignorancia. ",
"No se sale adelante celebrando éxitos sino superando fracasos.",
"El mundo cambia con tus hacks, no con tu opinión.",
"Determinación, amigo, ¡determinación!",
"Ignora a los que dicen que no puedes. Yo digo que sí puedes. Créele al unicornio.",
"Sonríe. Tu código da risa.",
"I believe I can fly!",
"Esto no es español... olvida la tilde.",
"Traaaaaanquilo… No te preocupes. ¡Ocúpate!",
"Siempre se tu mismo, a menos que puedas ser un unicornio en ese caso elige siempre el unicornio.",
"Cierra paréntesis, si no funciona, tómate un parentesis.",
"Es hora de llamar al mi mismo... ¡Mi mismo, no te preocupes!",
"En últimas, vinimos a hacer amigos...",
"Cierra el for, bobo."
];

/*******PRELOADER*******/
function preload(assets) {
	var numLoaded = 0;
	var total = assets.length;
	function onload() {
		numLoaded ++;
		if (numLoaded == total) {
			init();
		}
	}
	for (var i = 0; i < total; i++) {
		assets[i].onload = onload;
		assets[i].src = assets[i].fuente;
		console.log(i+1 + " / " + total);
	}
}

/** GO GO GO **/
function newImg() {
	var img = document.getElementById("jack");
	var r = Math.floor(Math.random()*images.length);
	img.src = images[r].fuente;
	r = Math.floor(Math.random()*texts.length);
	var t = document.getElementById("txt");
	t.innerHTML = texts[r];
}

function init() {
	//var sd = new Audio("Assets/sound.mp3");
	preload(images);
	//sd.load();
	//sd.play();
}
