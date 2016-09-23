function create(){
		var text="";

		text = 
		"<div id=\"formulaireBus\" style=\"display:none;\">"
		+ "<form id=\"formBus\" class=\"formulaire\">"
		+ "<p style=\"display:none;\"><label>idfavori</label> : <input type=\"text\" name=\"id\" id=\"id\" value=\"\" /></p>"
		+ "<p style=\"display:none;\"><label>type</label> : <input type=\"text\" id=\"type\" value=\"bus\"/></p>"
		+ "<p><label>libelle</label> : <input type=\"text\" id=\"libelleBus\" /></p>"
		+ "<p><label>ligne</label> : <input type=\"text\" id=\"ligneBus\"  value=\"\" /></p>"
		+ "<p><label>lineid</label> : <input type=\"text\" id=\"lineid\"  value=\"\" /></p>"
		+ "<p><label>stationid</label> : <input type=\"text\" id=\"stationid\"  value=\"\" /></p>"
		+ "</form>"
		+ "<button type=\"button\" id=\"btnModifierBus\" onClick=\"ajouterBus()\">Ajouter Bus</button>"
		+ "<button type=\"button\" id=\"btnAutreChoix\" onClick=\"autreChoix()\">Autre Choix</button>"
		+ "<button type=\"button\" id=\"btnReset\" onClick=\"resetChampsForm()\">Reset</button>"
	    + "</div>"
		+ "<div id=\"formulaireRER\" style=\"display:none;\">"
		+ "<form id=\"formRER\" class=\"formulaire\">"
		+ "<p style=\"display:none;\"><label>idfavori</label> : <input type=\"text\" name=\"id\" id=\"id\" value=\"\" /></p>"
		+ "<p style=\"display:none\"><label>type</label> : <input type=\"text\" id=\"type\" value=\"rer\"/></p>"
		+ "<p><label>libelle</label> : <input type=\"text\" id=\"libelleRER\" /></p>"
		+ "<p><label>Ligne :&nbsp;</label>"
		+ menuDeroulantRER("C")
		+ "<p><label>idOrigin :&nbsp;</label> <input type=\"text\" id=\"idOrigin\" /></p>"
		+ "<p><label>idDest :&nbsp;</label><input type=\"text\" id=\"idDest\" /></p>"
		+ "</form>"
		+ "<button type=\"button\" id=\"btnModifierRER\" onClick=\"ajouterRER()\">Ajouter RER</button>"
		+ "<button type=\"button\" id=\"btnAutreChoix\" onClick=\"autreChoix()\">Autre Choix</button>"
		+ "<button type=\"button\" id=\"btnReset\" onClick=\"resetChampsForm()\">Reset</button>"
	    + "</div>";
		document.getElementById('HorairesCreationDetail').innerHTML=text;	
}

function ajouterBus(){
	var id = "bus"+document.getElementById("ligneBus").value ;
	var favori = {
	id: id ,
	type: "bus",
	libelle: document.getElementById("libelleBus").value ,
	ligne:  document.getElementById("ligneBus").value ,
	stationid: document.getElementById("stationid").value ,
	};
	var id = document.getElementById("id").value;
	localStorage[id] = $.stringify(favori);
	if (confirm("RER - Creation du favori :"+document.getElementById("libelleBus").value)){
		localStorage[id] = $.stringify(favori);
		window.location.href='index.html';
	}
}

function ajouterRER(){	
	//le champID est vide car masqué par defaut, on en cree un
	var id = "rer"+document.getElementById("ligneRER").value ;
	var favori = {
	id: id ,
	type: "rer" ,
	libelle: document.getElementById("libelleRER").value ,
	ligne:  document.getElementById("ligneRER").value ,
	idOrigin: document.getElementById("idOrigin").value ,
	idDest: document.getElementById("idDest").value ,
	};
	var id = document.getElementById("id").value;
	localStorage[id] = $.stringify(favori);
	if (confirm("RER - Creation du favori :"+document.getElementById("libelleRER").value)){
		localStorage[id] = $.stringify(favori);
		window.location.href='index.html';
	}
}

function btnChoix(){
	document.getElementById("choix").style.display="none" ;	
	// Recuperation de la valeur du radiobutton cochée via jquery
	if($('input[name="choix"]:checked').val()=="bus"){
		document.getElementById("formulaireBus").style.display="block" ;
		document.getElementById("formulaireRER").style.display="none" ;
	}
	else{
		document.getElementById("formulaireBus").style.display="none" ;
		document.getElementById("formulaireRER").style.display="block" ;
	}
}
function autreChoix(){
	document.getElementById("choix").style.display="block" ;	
	document.getElementById("formulaireBus").style.display="none" ;
	document.getElementById("formulaireRER").style.display="none" ;
}

function resetChampsForm(){
	document.getElementById("formBus").reset();
	document.getElementById("formRER").reset();
}

create();