//Une fois le favoir selectione, on peut le modifier
function AnnulerModification(){
	window.location.href='param_modify.html';
}

function set(couleur){
document.getElementById('ligne').className=couleur;
}

function param_modify_detail(){
	//alert(sessionStorage.getItem("debug"));
	//Recuperation du parametre dans l'url via jquery
	var id = unescape(location.search.substr(4))
	//alert("modif du favori "+id);
	//recuperation depuis le localstorage
	var favori = $.parseJSON( localStorage[id] );
	//alert (favori.id+" "+favori.type+" "+favori.libelle);
	var text="";
	if(favori.type=="bus"){
		text = "<div id=\"formulaireBus\" style=\"display:block;\">"
		+ "<form id=\"formBus\" class=\"formulaire\">"
		+ "<p style=\"display:none;\"><label>idfavori</label> : <input type=\"text\" name=\"id\" id=\"id\" value=\""+favori.id
		+"\" /></p>"
		+ "<p style=\"display:none;\"><label>type</label> : <input type=\"text\" id=\"type\" value=\"bus\"/></p>"
		+ "<p><label>libelle</label> : <input type=\"text\" id=\"libelleBus\"  value=\""+favori.libelle+"\" /></p>"
		+ "<p><label>ligne</label> : <input type=\"text\" id=\"ligneBus\"  value=\""+favori.ligne+"\" /></p>"
		+ "<p><label>lineid</label> : <input type=\"text\" id=\"lineid\"  value=\""+favori.lineid+"\" /></p>"
		+ "<p><label>stationid</label> : <input type=\"text\" id=\"stationid\"  value=\""+favori.stationid+"\" /></p>"
		+ "</form>"
		+ "<button type=\"button\" id=\"btnModifierBus\" onClick=\"modifierBus(\'"+favori.id+"\')\">Modifier Bus</button>"
		+ "<button type=\"button\" id=\"btnAnnuler\" onClick=\"AnnulerModification()\">Annuler</button>" ;
	}
	if(favori.type=="rer"){
		text = "<div id=\"formulaireRER\" style=\"display:block;\">"
		+ "<form id=\"formRER\" class=\"formulaire\">"
		+ "<p style=\"display:none;\"><label>idfavori</label> : <input type=\"text\" name=\"id\" id=\"id\" value=\""+favori.id
		+"\" /></p>" 
		+ "<p style=\"display:none\"><label>type</label> : <input type=\"text\" id=\"type\" value=\"rer\"/></p>"
		+ "<p><label>Libelle :&nbsp;</label><input type=\"text\" id=\"libelleRER\"  value=\""+favori.libelle+"\" /></p>"
		+ "<p><label>Ligne :&nbsp;</label>"
		+ menuDeroulantRER(favori.ligne)
		+ "<p><label>idOrigin :&nbsp;</label> <input type=\"text\" id=\"idOrigin\"  value=\""+favori.idOrigin+"\" /></p>"
		+ "<p><label>idDest :&nbsp;</label><input type=\"text\" id=\"idDest\"  value=\""+favori.idDest+"\" /></p>"
		+ "</form>"
		+ "<button type=\"button\" id=\"btnModifierRER\" onClick=\"modifierRER(\'"+favori.id+"\')\">Modifier RER</button>"
		+ "<button type=\"button\" id=\"btnAnnuler\" onClick=\"AnnulerModification()\">Annuler</button>" ;
	}
	document.getElementById('HorairesModifDetail').innerHTML=text;	
}
  
function modifierRER(idRER){
	var favori = {
	id: idRER ,
	type: "rer" ,
	libelle: document.getElementById("libelleRER").value ,
	ligne:  document.getElementById("ligneRER").value ,
	idOrigin: document.getElementById("idOrigin").value ,
	idDest:  document.getElementById("idDest").value ,
	};
	if (confirm("RER - Modification du favori :\n"+document.getElementById("libelleRER").value)){
		//on enleve l'ancien pour éviter le conflit
		localStorage.removeItem(idRER);
		//On ajoute la nouvelle version
		localStorage[idRER] = $.stringify(favori);
		window.location.href='index.html';
	}
}

function modifierBus(idBus){
	var favori = {
	id: idBus ,
	type: "bus" ,
	libelle: document.getElementById("libelleBus").value ,
	ligne:  document.getElementById("ligneBus").value ,
	stationid: document.getElementById("stationid").value ,
	lineid: document.getElementById("lineid").value ,
	};
	if (confirm("RER - Modification du favori :\n"+document.getElementById("libelleBus").value)){
		//on enleve l'ancien pour éviter le conflit
		localStorage.removeItem(idBus);
		//On ajoute la nouvelle version
		localStorage[idBus] = $.stringify(favori);
		window.location.href='index.html';
	}
}

param_modify_detail();