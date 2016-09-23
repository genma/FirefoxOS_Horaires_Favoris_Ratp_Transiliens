function main(){
//On charge les différents favoris
var LSlength = localStorage.length;
    if (LSlength < 1 )
    {
      document.getElementById("HorairesFavoris").innerHTML = "<p style='padding:10px 10px 0px 10px;'>Vous n'avez pas encore enregistré de favoris. Veuillez créer des favoris</p><hr>"
      +"BOUTON CREATION FAVORI";
    }
    else{
		//Pr chaque favori
		var texteFavoris = "";
	   for (i=0; i<LSlength; i++)
		{
			favori = $.parseJSON( localStorage[localStorage.key(i)] );	
			var texte = creeHtmlParam(favori, "modif");		
			texteFavoris = texte + texteFavoris;
		}
		document.getElementById('HorairesFavorisModification').innerHTML=texteFavoris;	
    }  
}

//Une fois le favoir selectione, on peut le modifier
function modify(id){
	//alert("modif du "+id);
	//mise en mémoire de l'id utilisé
	//appel de la page param_modify_detail.html
	window.location.href='param_modify_detail.html?id='+id;
}

//Sauvegarde d'un favori modifié
function save (argument) {
	var ok=false;
	// body...
	return ok;
}

main();