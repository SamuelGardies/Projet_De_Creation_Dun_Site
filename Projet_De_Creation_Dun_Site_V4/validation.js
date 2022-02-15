function testCaptcha(idCaptchaEntre,idVraiCaptcha) {
confirm('Etes-vous sûr ?');
 if(idCaptchaEntre.value != idVraiCaptcha.value)
	{alert("Vous êtes un robot !");
	return false;} 
 else 
 {if (testDispo(idConvives,idDate,listeRegime)==true)
	return testPaiment(idPaiementLiquide,idConvives)
  else
	  return false;}
}

function testDispo(idNbConvives,idDate,idRegime) {
var dr = new Date(idDate.value);
var da = new Date();
if (idNbConvives.value>20) 
	{alert("Malheureusement, nous n'acceptons pas de réservations de plus de 20 personnes.");
	return false;}
if (dr<da)
	{alert("Veuillez saisir une date valide.");
	return false;}
if (idRegime.value=="Sans Gluten"||idRegime.value=="Végétarien"||idRegime.value=="Vegan")
	{if (idNbConvives.value<4)
		{alert("Les réservations de repas "+idRegime.value+"s ne sont possibles que pour 4 personnes ou plus");
		return false;}}
lim=da.getMonth()+6;
da.setMonth(lim);
if (dr>da)
	{alert("Malheureusement, nous n'acceptons pas de réservations pour dans plus de 6 mois.");
	return false;}
return true;
}

function testPaiment(idLiquide,idNbConvives) {
if (idLiquide.checked==true)
	{if (idNbConvives.value>10)
		{alert("Nous n'acceptons pas les paiements en liquides pour les réservations de plus de 10 personnes");
		return false;}}
return true;
}

function captcha() {
var l1 =String.fromCharCode(65+Math.floor(Math.random() * 26));
var l2 =String.fromCharCode(65+Math.floor(Math.random() * 26));
var l3 =String.fromCharCode(65+Math.floor(Math.random() * 26));
var l4=Math.floor(Math.random()*10);
var l5=Math.floor(Math.random()*10);
var l6=Math.floor(Math.random()*10);
var captcha=l1+l2+l3+l4+l5+l6;
document.getElementById("idDuCaptcha").value =captcha;
}