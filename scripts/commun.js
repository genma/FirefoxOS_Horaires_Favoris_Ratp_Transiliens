function init(){
	var favori01 = {
	id: "favori01",
	type: "bus",
	libelle:"Maison",
	ligne: "123",
	stationid:"385_138_171",
	};
	
	var favori02 = {
	id: "favori02",
	type: "rer",
	libelle:"Via RER C",
	ligne: "C",
	idOrigin:"DEP",
	idDest:"ARR"
	};
	
	var favori03 = {
	id: "favori03",
	type: "rer",
	libelle:"Via RER D",
	ligne: "D",
	idOrigin:"DEP",
	idDest:"ARR"
	};
 	localStorage["favori01"] = $.stringify(favori01);
	localStorage["favori02"] = $.stringify(favori02);
	localStorage["favori03"] = $.stringify(favori03);
}
// On ne recharge que le jeu de test
function reinit(){
	if (confirm("Merci de confirmer le reinit!")) {	
		reset();
		init();
	}
	window.location.href='index.html';
}

// On enleve tout ce qui est stocké sans exception
function reset(){
	if (confirm("Merci de confirmer le reset!")) {	
		localStorage.clear();
		window.location.href='index.html';
	}
}


/*=========================================================
	JQuery ne permet pas de parser du json complexe.
=========================================================*/
jQuery.extend({
stringify : function stringify(obj) {
	if(JSON && JSON.stringify)
		return JSON.stringify(obj);
 
	var t = typeof (obj);
	if (t != "object" || obj === null) {
		// simple data type
		if (t == "string") obj = '"' + obj + '"';
			return String(obj);
	} else {
		// recurse array or object
		var n, v, json = [], arr = (obj && obj.constructor == Array);
 
		for (n in obj) {
			v = obj[n];
			t = typeof(v);
			if (obj.hasOwnProperty(n)) {
				if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = jQuery.stringify(v);
				json.push((arr ? "" : '"' + n + '":') + String(v));
			}
		}
		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
}
});

/*============================================================
	Code commun modification/suppression
=============================================================*/

function menuDeroulantRER(lettre){
	var html ="";
	html = html 
		+ "<select name=\"ligne\" id=\"ligneRER\" class=\"listeRer" + lettre + "\">"
		+ "<option value=\"C\" class=\"listeRerC\"" ;
	if (lettre=="C"){
		html = html + "selected ";
	}	
	html = html + "onClick=\"set('listeRerC')\">C</option>"		
		+ "<option value=\"D\" class=\"listeRerD\"";
	if (lettre=="D"){
		html = html + "selected ";
	}	
	html = html + "onClick=\"set('listeRerD')\">D</option></select>"
	return html;
}

//type : modif ou supp;
function creeHtmlParam(favori, action){
		var type = favori.type;
		var id = favori.id;
		var ligne = favori.ligne;
		var libelle = favori.libelle;
		var texte = "<a href=\"javascript:void(0);\" onClick=\"";
		if(action=="modif"){
			texte= texte + "modify";
		}
		else if(action=="suppress"){
			texte=  texte +  "suppress";
		}
		texte = texte + "(\'"+id +"\')\">"
		texte= texte +"<div class=\"encadre\">"
			+"<div class=\"libelle\">"+ libelle +"</div>";
		if(type=="bus"){
			texte = texte +"<span class=\"bus bus"+ligne+"\">"+ligne+"</span>";
		}
		else{
			var idOrigin = favori.idOrigin;
			var idDest = favori.idDest;
			texte = texte +"<span class=\"bus\ rer"+ligne+"\">"+idOrigin + " - " + idDest +"</span>"	
		}
		texte = texte +"</div></a>";
		return texte;
}

/*=========================================================
	Import / Export
=========================================================*/

function backup(){
	//todo	
}

function restore(){
	//todo
}