function testCaptcha(idCaptchaEntre,idVraiCaptcha) {		
/* remarque: cette fonction est appelée lorsque l'utilisateur clique sur le boutton "envoi" du formulaire. Elle demande à l'utilisateur de confirmer s'il veut vraiment envoyer le formulaire, puis vérifie la disponibilité de la réservation (en appelant la fonction testDispo), la validité du captcha et la disponibilité du moyen de paiement pour cette réservation (en appelant la fonction verifLiquide). */

var conf = confirm('Etes-vous sûr ?');

if (conf==true)
{
	var verif = testDispo(idConvives,idDate,idListeRegime);
	var verifMp = verifLiquide(idPaiement,idConvives);
	if(idCaptchaEntre.value != idVraiCaptcha.value)
	{
		alert("Vous êtes un robot !\n(Veuillez entrer correctement le captcha)");
		return false;
	}
	else 
	{
		if(verif==true) 
			{
			if(verifMp==true)
				{return true;}
			else
				{return false;}
			}
		else
			{return false;}
	}
}
else {return false;}

}

function testDispo(idNbConvives,idDeDate,idDuRegime) {
	
var dr = new Date(idDeDate.value);
var da = new Date();

if (idNbConvives.value>20) 
	{alert("Malheureusement, nous n'acceptons pas de réservations de plus de 20 personnes.");
	return false;}
	
if (dr<da)
	{alert("Veuillez saisir une date valide.");
	return false;}
	
if (idDuRegime.value=="Sans Gluten"||idDuRegime.value=="Végétarien"||idDuRegime.value=="Vegan")
	{if (idNbConvives.value<4)
		{alert("Les réservations de repas "+idDuRegime.value+"s ne sont possibles que pour 4 personnes ou plus");
		return false;}}

ma = da.getMonth();
da.setMonth(ma+6);

if (dr>da)
	{alert("Malheureusement, nous n'acceptons pas de réservations pour dans plus de 6 mois.");
	return false;}

/* on arrive ici si aucunne vérification n'est fausse */
alert("Réservation disponible.");
return true;

}

function verifLiquide(idModePaiement,idNbConvives) {
alert(idModePaiement.value);

/*
if(idModePaiement.checked==true)
	{
	if(idNbConvives.value>10)
		{
		alert("Les paiements en liquide ne sont pas acceptés pour les réservations de plus de 10 personnes.");
		return false;
		}
	}
return true;
*/
}