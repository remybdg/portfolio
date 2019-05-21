var contElt = document.getElementById("cont");
var prevElt = document.getElementById("prev");
var nextElt = document.getElementById("next");
var slidesElt = document.getElementsByClassName("slide");

/*
//scroll horizontal avec la molette souris
(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = e.wheelDelta || -e.detail;
		console.log(delta);
        document.querySelector("body").scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.querySelector("body").addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.querySelector("body").addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.querySelector("body").addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.querySelector("body").attachEvent("onmousewheel", scrollHorizontally);
    }
})();
*/




/*-------------animation titre accueil--------------*/


	
	var lettreTabElt = document.getElementsByClassName("lettre");
	
	var lettreTitreTabElt = document.getElementsByClassName("lettreTitre");

	var lettreCoorTab = [];

	var maxX = document.getElementById("sl0").offsetWidth;
	var maxY = document.getElementById("sl0").offsetHeight;
	console.log(maxX, maxY);
	
	var x;
	var y;
	
	var cptOp;
	for(cptOp=0; cptOp<lettreTabElt.length; cptOp++) {
		lettreCoorTab[cptOp] = [];
		console.log(lettreTabElt[cptOp]);
		var lettreX = Math.floor(Math.random() * 105); ;
		var lettreY = Math.floor(Math.random() * 105); ;
	    lettreTabElt[cptOp].style.left = lettreX + "vw";
	    lettreTabElt[cptOp].style.top = lettreY+ "vh"; 
		lettreCoorTab[cptOp].push(lettreX);
		lettreCoorTab[cptOp].push(lettreY);
	}
	//console.log(lettreCoorTab);
	
	function getCoor(event) {
		console.log("e", event);
		x = event.clientX;
		y = event.clientY;
		
		
		x = x*100/maxX;
		y= y *100/maxY;
	
	}
	
	
	
	var cptOnMouseMove = 0; 

	function showCoords(event) {
		cptOnMouseMove++;
		console.log(cptOnMouseMove);
		
		console.log(event);
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
	  
		document.getElementById("tb").style.left = (40+(cx-x)/4)+"vw";
	    document.getElementById("tb").style.top = (10+(cy-y)/4)+"vh";  
	  
	    document.getElementById("td").style.left = (30+(cx-x)/4)+"vw";
	    document.getElementById("td").style.top = (30+(cy-y)/4)+"vh";
		
	    document.getElementById("te2").style.left = (45+(cx-x)/8)+"vw";
	    document.getElementById("te2").style.top = (40+(cy-y)/8)+"vh";	  
	  
	    document.getElementById("tv").style.left = (55+(cx-x)/4)+"vw";
	    document.getElementById("tv").style.top = (30+(cy-y)/4)+"vh";  
	  
	    document.getElementById("tr").style.left = (37+(cx-x)/4)+"vw";
	    document.getElementById("tr").style.top = (60+(cy-y)/4)+"vh";	  
	  
	    document.getElementById("te3").style.left = (50+(cx-x)/8)+"vw";
	    document.getElementById("te3").style.top = (62+(cy-y)/8)+"vh";	  
	  
	    document.getElementById("tm").style.left = (62+(cx-x)/4)+"vw";
	    document.getElementById("tm").style.top = (60+(cy-y)/4)+"vh";			
		
		
		
	
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
	
	var timerTitle = 0;

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
				document.getElementById("tw").style.left = "15vw";
				document.getElementById("tw").style.top = "10vh";	  				
			break;			

			case 65:
				document.getElementById("te1").className = document.getElementById("te1").className + ' rotate';
				document.getElementById("te1").classList.remove("sp2");
				document.getElementById("te1").classList.add("sp1");				
				document.getElementById("te1").style.left = "35vw";
				document.getElementById("te1").style.top = "10vh";	 					
				document.getElementById("td").className = document.getElementById("td").className + ' rotate';
				document.getElementById("td").style.left = "25vw";
				document.getElementById("td").style.top = "30vh";				
			break;			

			case 70:
				document.getElementById("tb").className = document.getElementById("tb").className + ' rotate';
				document.getElementById("tb").style.left = "55vw";
				document.getElementById("tb").style.top = "10vh";  				
				document.getElementById("te2").className = document.getElementById("te2").className + ' rotate';
				
				document.getElementById("te2").classList.remove("sp2");
				document.getElementById("te2").classList.add("sp1");	
				document.getElementById("te2").style.left = "45vw";
				document.getElementById("te2").style.top = "30vh";	 					
				document.getElementById("tr").className = document.getElementById("tr").className + ' rotate';	
				document.getElementById("tr").style.left = "35vw";
				document.getElementById("tr").style.top = "50vh";					
			break;			
			case 75:
				document.getElementById("tv").className = document.getElementById("tv").className + ' rotate';
				document.getElementById("tv").style.left = "65vw";
				document.getElementById("tv").style.top = "30vh";  				
				document.getElementById("te3").className = document.getElementById("te3").className + ' rotate';
				document.getElementById("te3").classList.remove("sp2");				
				document.getElementById("te3").classList.add("sp1");	
				document.getElementById("te3").style.left = "55vw";
				document.getElementById("te3").style.top = "50vh";	  					
			break;			

			case 80:
				document.getElementById("tm").className = document.getElementById("tm").className + ' rotate';
				document.getElementById("tm").style.left = "75vw";
				document.getElementById("tm").style.top = "50vh";						
			break;		

		}

	}


/*------------------------------------------------------*/



var currentDiv = 0;
	if ( currentDiv == 0) {
		prevElt.classList.add("hidden");
	}



//scroll vers la droite avec une touche suivante
function onclickNext() {
	currentDiv++;
	//si on est au dernier slide, le bouton next disparait
	if ( currentDiv == 4) {
		nextElt.classList.add("hidden");
	}
	slidesElt[currentDiv].scrollIntoView({ block: 'start',  behavior: 'smooth' });	
	console.log(currentDiv);
	//si on est au deuxieme slide, le bouton prev reapparrait
	if ( currentDiv == 1) {
	prevElt.classList.remove("hidden");
	}

}


//scroll vers la gauche avec touche prev
function onclickPrev() {
	currentDiv--;
	slidesElt[currentDiv].scrollIntoView({ block: 'start',  behavior: 'smooth' });	
	console.log(currentDiv);
	// si premier slide, on enleve le bouton prev
	if ( currentDiv == 0) {
		prevElt.classList.add("hidden");
	}
	//si on revient sur l'avant dernier slide (depuis le dernier) on rajoute le bouton next
	if ( currentDiv == 3) {
		nextElt.classList.remove("hidden");
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
var txt2 = " Ca commence à ressembler à quelquechose ! Voyons si on peut encore améliorer tout ca. ";	
	
var speed = 20; /* The speed/duration of the effect in milliseconds */
var i = 0;
var j = 0;
var cpt = 0;

function typeWriter() {
	document.getElementById("sl1").style.cursor = "progress";
	clearInterval(htmlIconBeat);
	if (i < txt.length) {
		document.getElementById("html").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);

    }
	else {
		document.getElementById("sl1").style.cursor = "default";
		
		document.getElementById("cssLogo").classList.remove("hidden");
		document.getElementById("cssLogo").addEventListener("click", onclickCss);

		cssIconBeat = setInterval(scaleCssIcon, 900);
	}

}

function onclickCss() {
	var interval = setInterval(pageConstructor, 100);	
	clearInterval(cssIconBeat);	
	
}

var timer = 0;

function pageConstructor() {

	timer++;
	switch(timer) {
		case 1:
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
		/*		
		case 15:
		document.getElementById("comp1").classList.remove("hidden");
		break;
		case 16:
		document.getElementById("comp2").classList.remove("hidden");
		break;		
		case 17:
		document.getElementById("comp3").classList.remove("hidden");
		
		case 17:
		document.getElementById("comp4").classList.remove("hidden");
		break;		
		case 18:
		document.getElementById("comp5").classList.remove("hidden");
		break;		
		case 19:
		document.getElementById("comp6").classList.remove("hidden");
		break;		
		case 20:
		document.getElementById("comp7").classList.remove("hidden");
		break;	
		*/
		case 21:
		document.getElementById("header").classList.remove("hidden");
		document.getElementById("header").classList.add("head");
		break;
		case 22:
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
		case 23:
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
		break;			
		defaut:
		clearInterval(interval);


	}
}

var styleCpt = 0;

function onclickCss2() {

	styleCpt++;
	console.log(styleCpt);
	if (styleCpt == 5) {
		styleCpt = 0;
	}
	console.log(styleCpt);
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
		break;		
	}
}


//jsIconBeat = setInterval(scaleJsIcon, 900);	
function onclickJs() {
	document.getElementById("header").addEventListener("mouseenter", colorBoxOn);
	document.getElementById("side").addEventListener("mouseenter", colorBoxOn);	
	document.getElementById("main").addEventListener("mouseenter", colorBoxOn);
	document.getElementById("footer").addEventListener("mouseenter", colorBoxOn);
	
	document.getElementById("header").addEventListener("mouseleave", colorBoxOff);
	document.getElementById("side").addEventListener("mouseleave", colorBoxOff);
	document.getElementById("main").addEventListener("mouseleave", colorBoxOff);
	document.getElementById("footer").addEventListener("mouseleave", colorBoxOff);
	
	document.getElementById("avatar").draggable = "true";
	document.getElementById("avatar").style.cursor = "grab";
	document.getElementById("comp").draggable = "true";
	document.getElementById("comp").style.cursor = "grab";
}

var colorBoxCurrentPosition;

function colorBoxOn(event) {
	colorBoxCurrentPosition = event.target ;	
	if (colorBoxCurrentPosition == document.getElementById("side") || colorBoxCurrentPosition == document.getElementById("main")) {
		colorBoxCurrentPosition.appendChild(document.getElementById("colorBox2"));
		document.getElementById("colorBox2").classList.remove("hidden");	
		return;
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
	
	document.getElementById("colorBox").classList.add("hidden");

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

function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("before").innerHTML += txt2.charAt(j);
    j++;
	setTimeout(typeWriter2, 20);
	setTimeout(function() {
	}, 5000);
	}
	

}

function allowDrop(ev) {
  ev.preventDefault();
}

var dragElt;

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  dragElt = event.target;

}

function drop(ev) {	
  ev.preventDefault();

  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  //console.log(event.target);
  if (event.target == document.getElementById("compFooter") && dragElt == document.getElementById("comp")) {
	 document.getElementById("comp").classList.remove("comp");	
	 
  }
  else if (event.target != document.getElementById("compFooter") && dragElt == document.getElementById("comp")) {
	 document.getElementById("comp").classList.add("comp");	
  }

}