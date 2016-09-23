function main(){
	//Pour le mode debug
	sessionStorage.setItem("debug",true);
	
	/* Mode debug
	if(sessionStorage.getItem("debug")==true){
		reset();
		init();
    */	
	var LSlength = localStorage.length;
	//alert(LSlength);
    if (LSlength < 1 )
    {
      document.getElementById("HorairesFavoris").innerHTML = 
	  "<p style='padding:10px 10px 0px 10px;'>Vous n'avez pas encore enregistré de favoris. Veuillez créer des favoris</p><hr>";
    }
    else{
		//Pr chaque favori
		var texteFavoris = "";
	   for (i=0; i<LSlength; i++)
		{
			favori = $.parseJSON( localStorage[localStorage.key(i)] );	
			var texte = creeHtml(favori);
			//alert(texte);			
			texteFavoris = texte + texteFavoris;
		}
		document.getElementById('HorairesFavoris').innerHTML=texteFavoris;	
    }  
}

function creeHtml(favori){
		var texte = "";
		var type = favori.type;
		var id = favori.id;
		var ligne = favori.ligne;
		var libelle = favori.libelle;
		if(type=="bus"){
			var stationid = favori.stationid;
			texte=
			"<a href=\"http://wap.ratp.fr/siv/schedule?service=next&reseau=bus&lineid=B"+ligne+"&stationid="+stationid+"\">"
			+"<div class=\"encadre\">"
			+"<div class=\"libelle\">"+ libelle +"</div>"
			+"<span class=\"bus bus"+ligne+"\">"+ligne+"</span>"
			+"</div></a>";		
		}
		else{
			var idOrigin = favori.idOrigin;
			var idDest = favori.idDest;
			texte=
			"<a href=\"http://www.transilien.mobi/train/result?idOrigin="+idOrigin+"&amp;idDest="+idDest+"\">"
			+"<div class=\"encadre\">"
			+"<div class=\"libelle\">"+ libelle +"</div>"
			+"<span class=\"bus\ rer"+ligne+"\">"+idOrigin + " - " + idDest +"</span>"
			+"</div></a>";
		}
		return texte;
}
main();