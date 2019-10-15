var contElt = document.getElementById("cont");
var prevElt = document.getElementById("prev");
var nextElt = document.getElementById("next");
var slidesElt = document.getElementsByClassName("slide");
var windowElts = document.getElementsByClassName("window");
var navElt;

var mobile;
var timerTitle = 0;

function myFunction(x) {
	if (x.matches) { // If media query matches
		document.getElementById("skipBtn").classList.add("hidden");
		navElt = document.getElementById("mobNav");
		document.getElementById("slideCont").classList.add("hidden");
		document.getElementById("sl0").classList.add("hidden");
		mobile = true;
		timerTitle = 94;
		// windowElt = document.getElementsByClassName("window");
		// console.log("nav", windowElt);
		// for (var cpt = 0; cpt < windowElt.length; cpt++) {
		// 	windowElt[cpt].classList.remove("slideout");
		// 	windowElt[cpt].classList.add("hidden");
		// }
		return;
	} else {
		navElt = document.getElementById("nav");
		mobile = false;
	}
  }
  
  var x = window.matchMedia("(max-width: 1100px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes 


/*-------------animation titre accueil--------------*/


	
	var lettreTabElt = document.getElementsByClassName("lettre");
	
	var lettreTitreTabElt = document.getElementsByClassName("lettreTitre");

	var lettreCoorTab = [];

	var maxX = document.getElementById("sl0").offsetWidth;
	var maxY = document.getElementById("sl0").offsetHeight;
	//console.log(maxX, maxY);
	
	var x;
	var y;
	
	var cptOp;
	for(cptOp=0; cptOp<lettreTabElt.length; cptOp++) {
		lettreCoorTab[cptOp] = [];
		//console.log(lettreTabElt[cptOp]);
		var lettreX = Math.floor(Math.random() * 105); ;
		var lettreY = Math.floor(Math.random() * 105); ;
	    lettreTabElt[cptOp].style.left = lettreX + "vw";
	    lettreTabElt[cptOp].style.top = lettreY+ "vh"; 
		lettreCoorTab[cptOp].push(lettreX);
		lettreCoorTab[cptOp].push(lettreY);
	}
	//console.log(lettreCoorTab);
	
	function getCoor(event) {
		// console.log("e", event);
		x = event.clientX;
		y = event.clientY;
		
		
		x = x*100/maxX;
		y= y *100/maxY;
	
	}
	
	
	
	var cptOnMouseMove = 0; 

	function showCoords(event) {
		cptOnMouseMove++;
		// console.log(cptOnMouseMove);
		
		//console.log(event);
	    cx = event.clientX;
	    cy = event.clientY;
		
		cx = cx*100/maxX;
		cy= cy *100/maxY;
		
		
		var cptOp;
		for(cptOp=0; cptOp<lettreTabElt.length; cptOp++) {
			if (cptOp < 13 ) {
				lettreTabElt[cptOp].style.left = (lettreCoorTab[cptOp][0]+(cx-x)/4)+"vw";
				lettreTabElt[cptOp].style.top = (lettreCoorTab[cptOp][1]+(cy-y)/4)+"vh"; 			
				lettreTabElt[cptOp].classList.add("sp1");
			}
			else if (cptOp < 26 ) {
				lettreTabElt[cptOp].style.left = (lettreCoorTab[cptOp][0]+(cx-x)/8)+"vw";
				lettreTabElt[cptOp].style.top = (lettreCoorTab[cptOp][1]+(cy-y)/8)+"vh"; 			
				lettreTabElt[cptOp].classList.add("sp2");
			}
			else  {
				lettreTabElt[cptOp].style.left = (lettreCoorTab[cptOp][0]+(cx-x)/12)+"vw";
				lettreTabElt[cptOp].style.top = (lettreCoorTab[cptOp][1]+(cy-y)/12)+"vh"; 			
				lettreTabElt[cptOp].classList.add("sp3");
			}			
			
			
		}
				
		
	    document.getElementById("tw").style.left = (15+(cx-x)/4)+"vw";
	    document.getElementById("tw").style.top = (8+(cy-y)/4)+"vh";	  
	  
	    document.getElementById("te1").style.left = (30+(cx-x)/8)+"vw";
	    document.getElementById("te1").style.top = (10+(cy-y)/8)+"vh";	  
	  
		document.getElementById("tb").style.left = (40+(cx-x)/12)+"vw";
	    document.getElementById("tb").style.top = (10+(cy-y)/12)+"vh";  
	  
	    document.getElementById("td").style.left = (30+(cx-x)/8)+"vw";
	    document.getElementById("td").style.top = (30+(cy-y)/8)+"vh";
		
	    document.getElementById("te2").style.left = (45+(cx-x)/12)+"vw";
	    document.getElementById("te2").style.top = (40+(cy-y)/12)+"vh";	  
	  
	    document.getElementById("tv").style.left = (55+(cx-x)/4)+"vw";
	    document.getElementById("tv").style.top = (30+(cy-y)/4)+"vh";  
	  
	    document.getElementById("tr").style.left = (37+(cx-x)/12)+"vw";
	    document.getElementById("tr").style.top = (60+(cy-y)/12)+"vh";	  
	  
	    document.getElementById("te3").style.left = (50+(cx-x)/4)+"vw";
	    document.getElementById("te3").style.top = (62+(cy-y)/4)+"vh";	  
	  
	    document.getElementById("tm").style.left = (62+(cx-x)/8)+"vw";
	    document.getElementById("tm").style.top = (60+(cy-y)/8)+"vh";			
		
		
		
	
	}


		
	function onloadBody() {
		var intervalFade = setTimeout(fadeletters, 300);	
		var intervalRotate = setInterval(rotateLetters, 100);
		
		document.getElementById("sl0").style.cursor = "move";
	}

	function fadeletters() {

		var cptOp;
		for(cptOp=0; cptOp<lettreTabElt.length; cptOp++) {
			lettreTabElt[cptOp].className = lettreTabElt[cptOp].className + ' fadeOut ';
		}
		
	}
	
	

	function rotateLetters(className) {

		timerTitle++;
		
		switch (timerTitle) {

			
			case 59:
				//arret de la fct showcoords(mvt des lettres avec le mvt de la souris)
				document.getElementById("sl0").onmousemove = null;
				
				document.getElementById("sl0").style.cursor = "default";			
		
				for(cptTitre=0; cptTitre<lettreTitreTabElt.length; cptTitre++) {
					lettreTitreTabElt[cptTitre].style.transition = "2s";
				}	
			break;	
			
			case 60:
				document.getElementById("tw").className = document.getElementById("tw").className + ' rotate';
				document.getElementById("tw").style.left = "35vw";
				document.getElementById("tw").style.top = "10vh";	  				
			break;			

			case 65:
				document.getElementById("te1").className = document.getElementById("te1").className + ' rotate';
				document.getElementById("te1").classList.remove("sp2");
				document.getElementById("te1").classList.add("sp1");				
				document.getElementById("te1").style.left = "45vw";
				document.getElementById("te1").style.top = "10vh";	 					
				document.getElementById("td").className = document.getElementById("td").className + ' rotate';
				document.getElementById("td").style.left = "45vw";
				document.getElementById("td").style.top = "30vh";				
			break;			

			case 70:
				document.getElementById("tb").className = document.getElementById("tb").className + ' rotate';
				document.getElementById("tb").style.left = "55vw";
				document.getElementById("tb").style.top = "10vh";  				
				document.getElementById("te2").className = document.getElementById("te2").className + ' rotate';
				
				document.getElementById("te2").classList.remove("sp2");
				document.getElementById("te2").classList.add("sp1");	
				document.getElementById("te2").style.left = "50vw";
				document.getElementById("te2").style.top = "30vh";	 					
				document.getElementById("tr").className = document.getElementById("tr").className + ' rotate';	
				document.getElementById("tr").style.left = "50vw";
				document.getElementById("tr").style.top = "50vh";					
			break;			
			case 75:
				document.getElementById("tv").className = document.getElementById("tv").className + ' rotate';
				document.getElementById("tv").style.left = "60vw";
				document.getElementById("tv").style.top = "30vh";  				
				document.getElementById("te3").className = document.getElementById("te3").className + ' rotate';
				document.getElementById("te3").classList.remove("sp2");				
				document.getElementById("te3").classList.add("sp1");	
				document.getElementById("te3").style.left = "55vw";
				document.getElementById("te3").style.top = "50vh";	  					
			break;			

			case 80:
				document.getElementById("tm").className = document.getElementById("tm").className + ' rotate';
				document.getElementById("tm").style.left = "60vw";
				document.getElementById("tm").style.top = "50vh";						
			break;		
			

			case 95:					
				document.getElementById("finalTitle").classList.remove("hidden");			
			break;		

	
			case 110:
				if (navElt.classList.contains("hidden")) {
					introSkip();
				}
			break;		
		}
	}


/*------------------------------------------------------*/
var overlayElts = document.getElementsByClassName("overlay");


function onclickMobMvotd() {
	console.log("ok");
	document.getElementById("overlay").classList.toggle("hidden");
}

function onclickMobNav(event) {
	console.log(event.target.id);
	switch (event.target.id) {
		case "mobPres":

			break;
		case "mobProj":
			if (document.getElementById("mobAccordeon").classList.contains("hidden") == false) {
				for (var cpt = 0 ; cpt<overlayElts.length; cpt++) {
					if (overlayElts[cpt].classList.contains("hidden") == false) {
						overlayElts[cpt].classList.add("hidden");
					}
				}
			}
			document.getElementById("mobAccordeon").classList.toggle("hidden");
			document.getElementById("mobWindow").classList.toggle("borderProjets");
			
			break;
		case "mobCont":
			document.getElementById("mobContact").classList.toggle("hidden");

			break;
	}
}
function onclickMobAccordeon(event) {
	console.log(overlayElts);
	for (var cpt = 0 ; cpt<overlayElts.length; cpt++) {
		if (overlayElts[cpt].dataset.id == event.target.id) {
			overlayElts[cpt].classList.remove("hidden");
			return;
		}
	}
}
function onclickClose(event) {
	overlayElts = document.getElementsByClassName("overlay");
	for (var cpt = 0 ; cpt<overlayElts.length; cpt++) {
		if (overlayElts[cpt].dataset.id == event.target.dataset.id) {
			overlayElts[cpt].classList.add("hidden");
			return;
		}
	}
}

function introSkip() {
	if (mobile) {
		document.getElementById("mobMainCont").classList.remove("hidden");
		document.getElementById("mobMainCont").classList.add("flex");
	} else {
		// document.getElementById("finalTitle").style.marginLeft = "30vw";
		document.getElementById("skipBtn").classList.add("hidden");
	}
	navElt.classList.add("fadein");	
	navElt.classList.remove("hidden");
}

function windowSlide(elt) {

	// console.log("ok", elt);
	var len = windowElts.length;
	for (var cpt = 0; cpt < len; cpt++) {
		// console.log(cpt);
		if(windowElts[cpt].className.indexOf('slideout') == -1) {
			windowElts[cpt].classList.add("slideout");
		}
		
	}
	if (elt != undefined) {
		// console.log("ws", elt);
		switch (elt) {
			case "nav":
				windowSlide();
				break;
			case "pres":
				document.getElementById("adressBarPres").value ="http://www.WebDevRem.fr/Présentation";
				document.getElementById("cont1").classList.remove("slideout");
				
				break;
			case "mvotd":
				document.getElementById("adressBarMvotd").value ="http://www.WebDevRem.fr/MVOTD";
				document.getElementById("cont2").classList.remove("slideout");
				break;
			case "pbc":
				document.getElementById("adressBarPbc").value ="https://publicom.design/";
				document.getElementById("cont3").classList.remove("slideout");
				break;
			case "sbjs":
				document.getElementById("adressBarSbjs").value ="http://www.WebDevRem.fr/sandbox";
				document.getElementById("cont4").classList.remove("slideout");
				break;
			case "sat":
				document.getElementById("adressBarSat").value ="http://www.WebDevRem.fr/SortirAToulouse";
				document.getElementById("cont5").classList.remove("slideout");
				break;
			case "contact":
				document.getElementById("adressBarPbc").value ="http://www.WebDevRem.fr/contact";
				document.getElementById("contact").classList.remove("slideout");
				break;
			case "404":
				// document.getElementById("adressBar404").value = document.getElementById("adressBar").value;
				document.getElementById("cont404").classList.remove("slideout");
				break;
		}
	}
	var navListElts = document.getElementsByClassName("navlist");
	for (var cpt = 0; cpt < navListElts.length; cpt++) {
		if (navListElts[cpt].className.indexOf('hidden') == -1) {
			navListElts[cpt].classList.add("hidden");
		}
	}
}

function onclickNavPres() {
	// document.getElementById("navPresCont").classList.toggle("hidden");
	if (document.getElementById("navMvotd").classList.contains("expanded")) {
		document.getElementById("navMvotd").classList.toggle("expanded");
		document.getElementById("navPublicomDesign").classList.toggle("expanded");
		document.getElementById("navSbjs").classList.toggle("expanded");
		document.getElementById("navSat").classList.toggle("expanded");
	}
	
	document.getElementById("navPresCont").classList.toggle("expanded");
	windowSlide("pres");
}

function onclickNavProj() {
	if (document.getElementById("navPresCont").classList.contains("expanded")) {
		document.getElementById("navPresCont").classList.toggle("expanded");
	}
	document.getElementById("navMvotd").classList.toggle("expanded");
	document.getElementById("navPublicomDesign").classList.toggle("expanded");
	document.getElementById("navSbjs").classList.toggle("expanded");
	document.getElementById("navSat").classList.toggle("expanded");
}

function onclickNavMvotd() {
	windowSlide("mvotd");
}

function onclickNavPbcDesign() {
	windowSlide("pbc");
}
function onclickNavSbjs() {
	console.log
	windowSlide("sbjs");
}
function onclickNavSat() {
	console.log
	windowSlide("sat");
}

function onclickNavCont() {
	windowSlide("contact");
}

function onclickAdressBar(event) {
	// console.log(event.target.nextElementSibling.id);
	var elt = event.target.nextElementSibling.id;
	// document.getElementById("navList").classList.toggle("hidden");
	document.getElementById(elt).classList.toggle("hidden");
}

function onclickNavList(event) {
	console.log(event.target.parentNode);
	if (event.target.parentNode.id == "navList") {
		document.getElementById("adressBar").value = event.target.textContent;
		setTimeout(function(){
			document.getElementById("adressBar").value = "http://www.WebDevRem.fr/Navigation";
		}, 5000);
	}
	event.target.parentNode.classList.toggle("hidden");
	windowSlide(event.target.dataset.elt);
}

function onclickNavArrow(event) {

	// console.log(event.target);

	var elt = document.getElementById(event.target.dataset.elt);

		switch (elt.value) {
			case "http://www.WebDevRem.fr/Navigation":
			case "http://www.WebDevRem.fr/navigation":
				windowSlide();
				break;
			case "http://www.WebDevRem.fr/Présentation":
			case "http://www.WebDevRem.fr/présentation":
				windowSlide("pres");
				break;
			case "http://www.WebDevRem.fr/MVOTD":
			case "http://www.WebDevRem.fr/mvotd":
				windowSlide("mvotd");
				break;
			case "https://publicom.design/":
			case "https://publicom.design":
				windowSlide("pbc");
				break;
			case "http://www.WebDevRem.fr/Sandbox":
			case "http://www.WebDevRem.fr/sandbox":
				windowSlide("sbjs");
				break;
			case "http://www.WebDevRem.fr/SortirAToulouse":
			case "http://www.WebDevRem.fr/sortiratoulouse":
				windowSlide("sat");
				break;
			case "http://www.WebDevRem.fr/contact":
			case "http://www.WebDevRem.fr/Contact":
				windowSlide("contact");
				break;
			default:
				windowSlide("404");
				document.getElementById("adressBar404").value = elt.value;
		}

		if (event.target.dataset.elt == "adressBar") {
			setTimeout(function(){
				document.getElementById("adressBar").value = "http://www.WebDevRem.fr/Navigation";
			}, 5000);
		}
}


function scaleHtmlIcon() {
	document.getElementById("htmlLogo").classList.toggle("scale");
}

function scaleCssIcon() {
	document.getElementById("cssLogo").classList.toggle("scale");
}

function scaleJsIcon() {
	document.getElementById("jsLogo").classList.toggle("scale");
}

var htmlIconBeat = setInterval(scaleHtmlIcon, 900);
var cssIconBeat;
var cssIconBeat2;
var jsIconBeat;

var txt = "	Bonjour, je suis Remy B. Developpeur Web Junior, voici mon portfolio ou je vais vous détailler mes compétences. Comme vous le constater je maitrise le html5 ;).  Mais ce n'est pas tout, je maitrise aussi le css3, clickez sur le logo pour voir ca!"; 
var txt2 = " Ca commence à ressembler à quelquechose ! Voyons si on peut encore améliorer tout ca. Continuez de clicker sur le logo CSS pour changer la mise en page.";	
var txt3 = "J'ai une idée !  Aidez moi à bien présenter ma page. Nous allons utiliser JavaScript pour la personnaliser. Vous pouvez changer la couleur de chaques éléments composants la page en les survolant. Vous pouvez aussi déplacer la photo et la liste des langages en glissant/déposant vers l'entête, la partie latérale ou le premier pied de page.";	
var txt4 = "Super ! Merci pour votre aide ! Personnellement j'aime beaucoup. Si vous aussi cela vous plait, vous pouvez sauvegarder ou imprimer ce mini-CV en cliquant sur l'icone 'imprimante' ou en utilisant la fonction 'imprimer' de votre navigateur. Vous pouvez aussi consulter la rubrique 'projets'"

var speed = 35; /* The speed/duration of the effect in milliseconds */
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var cpt = 0;

function typeWriter() {
	document.getElementById("cont").style.cursor = "progress";
	clearInterval(htmlIconBeat);
	if (i < txt.length) {
		document.getElementById("html").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);

    }
	else {
		document.getElementById("cont").style.cursor = "default";
		
		document.getElementById("cssLogo").classList.remove("hidden");
		document.getElementById("cssLogo").addEventListener("click", onclickCss);

		cssIconBeat = setInterval(scaleCssIcon, 900);
	}

}

function onclickCss() {
	var interval = setInterval(pageConstructor, 400);	
	clearInterval(cssIconBeat);	
	
}

var timer = 0;

function pageConstructor() {
	
	timer++;
	switch(timer) {
		case 1:
		document.getElementById("cont").style.cursor = "progress";
		document.getElementById("html").classList.add("hidden");
		document.getElementById("before").classList.remove("hidden");
		break;		
		case 2:
		document.getElementById("header").classList.remove("hidden");
		break;		
		case 3:
		document.getElementById("html5").classList.add("html5");
		break;		
		case 4:
		document.getElementById("css3").classList.add("css3");
		break;		
		case 5:
		document.getElementById("main1").classList.remove("hidden");
		break;
		case 6:
		document.getElementById("main2").classList.remove("hidden");
		break;		
		case 7:
		document.getElementById("main3").classList.remove("hidden");
		break;		
		case 8:
		document.getElementById("main4").classList.remove("hidden");
		break;		
		case 9:
		document.getElementById("main5").classList.remove("hidden");
		break;		
		case 10:
		document.getElementById("main6").classList.remove("hidden");
		break;		
		case 11:
		document.getElementById("main7").classList.remove("hidden");
		break;		
		case 12:
		document.getElementById("main8").classList.remove("hidden");
		break;			
		case 13:
		document.getElementById("main9").classList.remove("hidden");
		break;
		case 14:
		document.getElementById("main10").classList.remove("hidden");
		break;	
		case 18:
		document.getElementById("header").classList.remove("hidden");
		document.getElementById("header").classList.add("head");
		break;
		case 20:
		document.getElementById("main1").classList.add("hidden");
		document.getElementById("main2").classList.add("hidden");
		document.getElementById("main3").classList.add("hidden");
		document.getElementById("main4").classList.add("hidden");
		document.getElementById("main5").classList.add("hidden");
		document.getElementById("main6").classList.add("hidden");
		document.getElementById("main7").classList.add("hidden");
		document.getElementById("main8").classList.add("hidden");
		document.getElementById("main9").classList.add("hidden");
		document.getElementById("main10").classList.add("hidden");
		document.getElementById("main").classList.remove("hidden");
		break;		
		case 21:
		document.getElementById("main").classList.add("main");
		break;		
		case 24:
		document.getElementById("side").classList.remove("hidden");
		break;		
		case 25:
		document.getElementById("side").classList.add("side");
		break;		
		case 26:
		document.getElementById("footer").classList.remove("hidden");
		break;		
		case 27:
		document.getElementById("footer").classList.add("footer");
		break;
		case 28:
		document.getElementById("compe2").classList.remove("hidden");
		break;		
		case 29:
		document.getElementById("compe3").classList.remove("hidden");
		break;		
		case 30:
		document.getElementById("compe4").classList.remove("hidden");
		break;		
		case 31:
		document.getElementById("compe5").classList.remove("hidden");
		break;		
		case 32:
		document.getElementById("compe6").classList.remove("hidden");
		break;		
		case 33:
		document.getElementById("compe7").classList.remove("hidden");
		break;
		case 34:
		document.getElementById("compFooter").classList.add("compFooter");
		document.getElementById("cont1").style.height = "auto";
		document.getElementById("compe1").classList.add("hidden");
		break;	
		case 35:
		document.getElementById("before").innerHTML ='';
		typeWriter2();
		break;	
		case 36:

		document.getElementById("bonjour").classList.add("hidden");

		document.getElementById("cssLogo").removeEventListener("click", onclickCss);
		document.getElementById("cssLogo").addEventListener("click", onclickCss2);
		cssIconBeat2 = setInterval(scaleCssIcon, 900);	
		document.getElementById("cont").style.cursor = "default";		
		
		break;			
		defaut:
		clearInterval(interval);


	}
}

function typeWriter2() {
	document.getElementById("cont").style.cursor = "progress";	
	if (j < txt2.length) {
		document.getElementById("before").innerHTML += txt2.charAt(j);
		j++;
		setTimeout(typeWriter2,35);
		// setTimeout(function() {
		// }, 5000);
	}
  	else {
		document.getElementById("cont").style.cursor = "default";
	}
}	

var styleCpt = 0;

function onclickCss2() {

	clearInterval(cssIconBeat);

	styleCpt++;
	// console.log(styleCpt);
	if (styleCpt == 5) {
		styleCpt = 0;
	}
	// console.log(styleCpt);
	switch(styleCpt) {
		case 1:
			document.getElementById("header").classList.add("head1");
			document.getElementById("side").classList.add("side1");
			document.getElementById("compFooter").classList.add("comp1");
			document.getElementById("footer").classList.add("footer1");
			//document.querySelector(".rows").setAttribute("style", "flex-direction: row-reverse;");
		break;
		case 2:
			document.getElementById("header").classList.remove("head1");
			document.getElementById("side").classList.remove("side1");
			document.getElementById("compFooter").classList.remove("comp1");
			document.getElementById("footer").classList.remove("footer1");		
			document.getElementById("header").classList.add("head2");
			document.getElementById("side").classList.add("side2");
			document.getElementById("compFooter").classList.add("comp2");
			document.getElementById("footer").classList.add("footer2");
			//document.querySelector(".rows").setAttribute("style", "flex-direction: row;");
		break;		
		case 3:
			document.getElementById("header").classList.remove("head2");
			document.getElementById("side").classList.remove("side2");
			document.getElementById("compFooter").classList.remove("comp2");
			document.getElementById("footer").classList.remove("footer2");	
			document.getElementById("header").classList.add("head3");
			document.getElementById("side").classList.add("side3");
			document.getElementById("compFooter").classList.add("comp3");
			document.getElementById("footer").classList.add("footer3");
			document.querySelector(".rows").setAttribute("style", "flex-direction: row-reverse;");
		break;		
		case 4:
			document.getElementById("header").classList.remove("head3");
			document.getElementById("side").classList.remove("side3");
			document.getElementById("compFooter").classList.remove("comp3");
			document.getElementById("footer").classList.remove("footer3");			
			document.getElementById("header").classList.add("head4");
			document.getElementById("side").classList.add("side4");
			document.getElementById("compFooter").classList.add("comp4");
			document.getElementById("footer").classList.add("footer4");
			//document.querySelector(".rows").setAttribute("style", "flex-direction: row;");

		break;		
		case 0:
			document.getElementById("header").classList.remove("head4");
			document.getElementById("side").classList.remove("side4");
			document.getElementById("compFooter").classList.remove("comp4");
			document.getElementById("footer").classList.remove("footer4");	
			document.querySelector(".rows").setAttribute("style", "flex-direction: row;");
			document.getElementById("header").appendChild(document.getElementById("avatar"));
			document.getElementById("quote").classList.add("hidden");
			document.getElementById("side").appendChild(document.getElementById("comp"));
			document.getElementById("comp").classList.add("comp");			
			
			clearInterval(cssIconBeat2);
			document.getElementById("jsLogo").classList.remove("hidden");

			// jsIconBeat = setInterval(scaleJsIcon, 900);
			document.getElementById("before").innerHTML ="";
			typeWriter3()
			addJSFunctions()
		break;		
	}
}


function typeWriter3() {

	document.getElementById("cont").style.cursor = "progress";	
	if (k < txt3.length) {
		document.getElementById("before").innerHTML += txt3.charAt(k);
		k++;
		setTimeout(typeWriter3, 35);
	}
	else {
		setTimeout(function() {
			document.getElementById("printLogo").classList.remove("hidden");
			document.getElementById("before").innerHTML ="";
			typeWriter4();
		}, 10000);
		document.getElementById("cont").style.cursor = "default";
	}
}

function typeWriter4() {
	document.getElementById("cont").style.cursor = "progress";	
	if (l < txt4.length) {
		console.log(txt4);
		document.getElementById("before").innerHTML += txt4.charAt(l);
		l++;
		setTimeout(typeWriter4, 35);
	}
  	else {
		document.getElementById("cont").style.cursor = "default";
	}
}	

function addJSFunctions() {	
	document.getElementById("header").addEventListener("mouseenter", colorBoxOn);
	document.getElementById("side").addEventListener("mouseenter", colorBoxOn);	
	document.getElementById("main").addEventListener("mouseenter", colorBoxOn);
	document.getElementById("footer").addEventListener("mouseenter", colorBoxOn);
	
	document.getElementById("header").addEventListener("mouseleave", colorBoxOff);
	document.getElementById("side").addEventListener("mouseleave", colorBoxOff);
	document.getElementById("main").addEventListener("mouseleave", colorBoxOff);
	document.getElementById("footer").addEventListener("mouseleave", colorBoxOff);
	
	var draggableElt = document.getElementsByClassName("draggableElt");
		for(var cpt = 0; cpt<draggableElt.length; cpt++) {
			draggableElt[cpt].draggable = "true";
			draggableElt[cpt].style.cursor = "grab";
			draggableElt[cpt].addEventListener("mouseenter", dragSignalOn);
			draggableElt[cpt].addEventListener("mouseleave", dragSignalOff);
		}
}

function onclickJs() {
	// clearInterval(jsIconBeat);		

}
function onclickPrint() {
	// clearInterval(jsIconBeat);		
	// document.getElementById("cont1").classList.add("print");
	window.print();
}

function dragSignalOn() {
	event.target.classList.add("draggable");
}

function dragSignalOff() {
	event.target.classList.remove("draggable");
}

var colorBoxCurrentPosition;

function colorBoxOn(event) {
	colorBoxCurrentPosition = event.target ;	
	if (colorBoxCurrentPosition == document.getElementById("side") || colorBoxCurrentPosition == document.getElementById("main")) {
		colorBoxCurrentPosition.appendChild(document.getElementById("colorBox2"));
		document.getElementById("colorBox2").classList.remove("hidden");
		return;
	}
	if (colorBoxCurrentPosition == document.getElementById("footer")) {
		document.getElementById("colorBox").classList.remove("colorBoxTop");
		document.getElementById("colorBox").classList.add("colorBoxBottom");
	}

	colorBoxCurrentPosition.appendChild(document.getElementById("colorBox"));
	document.getElementById("colorBox").classList.remove("hidden");
}

function colorBoxOff(event) {
	//console.log(event);
	if (colorBoxCurrentPosition == document.getElementById("side") || colorBoxCurrentPosition == document.getElementById("main")) {
		document.getElementById("colorBox2").classList.add("hidden");	
		return;
	}
	if (colorBoxCurrentPosition == document.getElementById("footer")) {
		document.getElementById("colorBox").classList.add("colorBoxTop");
		document.getElementById("colorBox").classList.remove("colorBoxBottom");
	}
	document.getElementById("colorBox").classList.add("hidden");

	var draggableElt = document.getElementsByClassName("draggableElt");
	for(cpt = 0; cpt<draggableElt.length; cpt++) {
		 draggableElt[cpt].classList.remove("draggable");
	}
}

function colorChoice(event) {
	console.log(colorBoxCurrentPosition);
	if (event.target.id == "#FFFFFF" && (colorBoxCurrentPosition == document.getElementById("header") || colorBoxCurrentPosition == document.getElementById("footer"))) {
		var getStyle = getComputedStyle(colorBoxCurrentPosition);
		colorBoxCurrentPosition.style.color = getStyle.backgroundColor;
	}
	else if (event.target.id != "#FFFFFF" && (colorBoxCurrentPosition == document.getElementById("header") || colorBoxCurrentPosition == document.getElementById("footer"))) {
		colorBoxCurrentPosition.style.color = "#FFFFFF";
	}		
	colorBoxCurrentPosition.style.backgroundColor = event.target.id;
	if (colorBoxCurrentPosition == document.getElementById("side")) {
		document.getElementById("compFooter").style.backgroundColor = event.target.id;
	}

	
}



function allowDrop(ev) {
  ev.preventDefault();
}

var dragElt;

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  dragElt = event.target;
	console.log(event.target);
}

function drop(ev) {	
  ev.preventDefault();

  var data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
  console.log(event.target);
  if (event.target == document.getElementById("compFooter") && dragElt == document.getElementById("comp")) {
	 document.getElementById("comp").classList.remove("comp");	
	 
  }
  else if (event.target != document.getElementById("compFooter") && dragElt == document.getElementById("comp")) {
	 document.getElementById("comp").classList.add("comp");	
  }

}


/*-----------------------sl4 flipcard contact----------------------*/

var faceChoice;

document.getElementById("contact").addEventListener("click", onclickContact);

function onclickContact() {
	document.getElementById("contactBack").classList.remove("hidden");
	document.getElementById("commentaireBack").classList.add("hidden");
	document.getElementById("inner").classList.add("flip");
	faceChoice = "contact";
	console.log("flip");
}

document.getElementById("commentaire").addEventListener("click", onclickCommentaire);

function onclickCommentaire() {
	document.getElementById("commentaireBack").classList.remove("hidden");
	document.getElementById("contactBack").classList.add("hidden");
	document.getElementById("inner").classList.add("flipRev");
	faceChoice  = "commentaire";
	console.log("rev");
}

document.getElementById("backButton").addEventListener("click", onclickBackButton);

function onclickBackButton() {
	console.log(faceChoice);
	//document.getElementById("backButton").classList.remove("hidden");
	if (faceChoice == "contact") {
		document.getElementById("inner").classList.remove("flip");
		
	}
	else {
		document.getElementById("inner").classList.remove("flipRev");
				
	}
	
}