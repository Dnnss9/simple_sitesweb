function init(){
	var inputs=document.querySelectorAll("input[type='number']");
	for(var i=0;i<inputs.length;i++)
		inputs[i].addEventListener("change", calculeTotal, false);
	calculeTotal();
}

function calculeTotal(){
	var total_value=0;
	for (var i=0;i<10;i++)
		total_value+=calculePrix(i);
	total.value=total_value;
}

function calculePrix(n){
	var unitaire = "unitaire_" + n;
	var quantite = "quantite_" + n;

	unitaire_value = parseInt(document.getElementById(unitaire).value, 10);
	quantite_value = parseInt(document.getElementById(quantite).value, 10);

	if (isNaN(unitaire_value))
		unitaire_value = 0;
	if (isNaN(quantite_value))
		quantite_value = 0;
	
	var prix = unitaire_value * quantite_value;
	
	document.getElementById("prix_" + n).value = prix;
	
	return prix;
}


