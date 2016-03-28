/* ----------------VALIDACIJA----------- */

function crosValidacija(){
	var mail = document.getElementById("email").value;
	var adr = document.getElementById("adresa").value;
	
	if(valEmail(mail) && valAdresa(adr) ){ alert("oba valja"); return true; }
	else if(valEmail(mail) && adr == "" ) { alert("mail valja"); return true; }
	else if(valAdresa(adr) && mail == "") { alert("adresa valja"); return true; }
	else {alert("ne valja"); return false; }
	
}

function valEmail(){
	
	var mail = document.getElementById("email").value;	
	var reg = /^[A-Za-z0-9._-]+[@]{1}[a-z]+\.[a-z]{2,4}$/;
	var t = reg.test(mail);
	if (t == true){
		document.getElementById("email").style.border = "2px solid white";
	}
	else {
		document.getElementById("email").style.border = "2px solid red";
	}
	return t;
}

function valName(){
	var ime = document.getElementById("name").value;
	var reg = /^[A-Z]{1}[a-zčćžđš]+\s[A-ZČĆŽĐŠ]{1}[a-zčćžđš]+$/;
	var n = reg.test(ime);
	if(n == true){ 
		document.getElementById("name").style.border = "2px solid white";
	}
	else{
		document.getElementById("name").style.border = "2px solid red" ;
	}
	return n;
}

function valAdresa(){
	
	var adr = document.getElementById("adresa").value;
	var reg = /^[A-Z]{1}[a-zčćžđš]+\s[0-9]+$/;
	var a = reg.test(adr);
	if(a == true){ 
		document.getElementById("adresa").style.border = "2px solid white";
	}
	else{
		document.getElementById("adresa").style.border = "2px solid red" ;
	}
	return a;
}

function valGrade(){
	var t = document.getElementById("grade").value;
	if (t > 0 && t < 6) { document.getElementById("grade").style.border = "2px solid white" ;}
	else {document.getElementById("grade").style.border = "2px solid red";}
	
}

function valMes(){
	var m = document.getElementById("message").value;
	var reg = /^[A-ZČĆŽĐŠa-zčćžđš0-9]{2,}[A-ZČĆŽĐŠa-zčćžđš0-9\s\.\:\!\n\-\_\(\)\,\;]{2,}$/; /* Poruka mora poceti sa slovima ili brojem 
		inace se moze ukucati samo par space i ostaviti prazno */
	var r = reg.test(m);
	if( r == true){ 	
		document.getElementById("message").style.border = "2px solid white";
	}
	else{
		document.getElementById("message").style.border = "2px solid red" ;
	}
}

function resetValidacije(){
	document.getElementById("grade").style.border = "2px solid white" ;
	document.getElementById("adresa").style.border = "2px solid white";
	document.getElementById("name").style.border = "2px solid white";
	document.getElementById("email").style.border = "2px solid white";
	document.getElementById("message").style.border = "2px solid white";

}

/*  ################### kraj VALIDACIJA-----------##########################3   */


