/*
IDEE 1

function mouseOver(el){
	idOver = el.id;
	console.log(idOver);
	i = 0;
	while(idOver != "pl"+i){
		i++
		texte = document.getElementById('p'+i);
		//texte = document.getElementsByTagName('canards'); //Incrémenter la variable du doc.getElmt... SEULEMENT A LA SORTIE DE LA BOUCLE (sur la dernière variable sinon, il passe par toute les variables et risque de toutes les afficher)
		texte = document.getElementById('canards');
		console.log(el);
		i++;
	}
}*/


function blockOver(el){
	idOver = el.getElementsByTagName("p")[0].id;
	console.log(idOver);
	idOver = idOver+"Actif";
	console.log(idOver);
}


function retour(el){
	document.getElementsByTagName("button")[0].className = "btn-nav";
	document.getElementsByClassName("nav-content")[0].className = "nav-content hideNav hidden";
}


function home(){
	var click = document.getElementById('home');
	click.id = "homeAfter";
}


/*IDEE 2*/
function changeClass(el){
	el.children[1].className = "text";
}
function initialClass(el){
	el.children[1].className = "noText";
}


/*IDEE 3*/
function changeClass2(el){
	console.log(el.nextSibling.className);
	el.nextSibling.className = "text";
	console.log(el.nextSibling.className);
}
function initialClass2(el){
	el.nextSibling.className = "noText";
}




/*IDEE 4 : Hover en CSS*/


// Menu
$(window).load(function() {
  $(".btn-nav").on("click tap", function() {
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
    $(this).toggleClass("animated");
  });
});




function oui(el){
alert("Bonne réponse");
}

function non(el){
alert("Mauvaise réponse, essaye encore.");
}




function oui1(el){
alert("Bonne réponse, tu peux passer au niveau 2");
(document.getElementById('ligne1').className) = "ligneOff";
(document.getElementById('ligne2').className) = "ligneOn";
}

function oui2(el){
alert("Bonne réponse, tu peux passer au niveau 3");
(document.getElementById('ligne2').className) = "ligneOff";
(document.getElementById('ligne3').className) = "ligneOn";
}

function oui3(el){
alert("Bonne réponse, tu peux passer au niveau 4");
(document.getElementById('ligne3').className) = "ligneOff";
(document.getElementById('ligne4').className) = "ligneOn";
}

function oui4(el){
alert("Bonne réponse, tu peux passer au niveau 5");
(document.getElementById('ligne4').className) = "ligneOff";
(document.getElementById('ligne5').className) = "ligneOn";
}

function oui5(el){
alert("Bonne réponse, tu peux passer au niveau 6");
(document.getElementById('ligne5').className) = "ligneOff";
(document.getElementById('ligne6').className) = "ligneOn";
}

function oui6(el){
alert("Bonne réponse, tu peux passer au niveau 7");
(document.getElementById('ligne6').className) = "ligneOff";
(document.getElementById('ligne7').className) = "ligneOn";
}

function oui7(el){
alert("Bonne réponse, tu peux passer au niveau 8");
(document.getElementById('ligne7').className) = "ligneOff";
(document.getElementById('ligne8').className) = "ligneOn";
}

function oui8(el){
alert("Bonne réponse, tu peux passer au niveau 9");
(document.getElementById('ligne8').className) = "ligneOff";
(document.getElementById('ligne9').className) = "ligneOn";
}

function oui9(el){
alert("Bonne réponse, tu peux passer au niveau 10");
(document.getElementById('ligne9').className) = "ligneOff";
(document.getElementById('ligne10').className) = "ligneOn";
}

function oui10(el){
alert("Félicitations, tu as terminé le quiz !");
(document.getElementById('ligne10').className) = "ligneOff";
(document.getElementById('ligne11').className) = "ligneOn";
}

//Simplification du code possible en recherchant l'état de la ligne (visible ou pas) avec une boucle if(display("ligne"+i) = active --> turn it off et activer le suivant) 