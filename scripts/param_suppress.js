function main(){
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
			var texte = creeHtmlParam(favori, "suppress");		
			texteFavoris = texte + texteFavoris;
		}
		document.getElementById('HorairesFavorisSuppression').innerHTML=texteFavoris;	
    }  
}

function suppress(id){
	if (confirm("Voulez vous supprimer le favori?")) {	
		//alert("Suppression de l'id " + id);
		localStorage.removeItem(id);	
		window.location.href='index.html';
	}
}

main();