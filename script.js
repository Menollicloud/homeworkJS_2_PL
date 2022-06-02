userFistName = prompt("What is your name?")
    .trim();
userLastName = prompt("What is your last name?")
    .trim();
userMail = prompt("What is your email address?")
    .toLowerCase()
    .replaceAll(" ","");
userYear = prompt("What is your year of birth?")
    .replaceAll(" ", "");
currentDate = new Date();
currentYear = currentDate.getFullYear();
userAge = currentYear - userYear;

document.write(`<p>Full name: ${userFistName} ${userLastName}</p>`);

if(userMail.indexOf(`@`) == -1){
	document.write(`<p>Email: not valid email <b>${userMail}</b> (symbol @ not exist)</p>`);
} else if(!userMail.indexOf(`@`)){
	document.write(`<p>Email: not valid email <b>${userMail}</b> (symbol @ find in first place)</p>`);
} else if(userMail.indexOf(`@`) === userMail.length-1){
	document.write(`<p>Email: not valid email <b>${userMail}</b> (symbol @ find in last place)</p>`);
} else {
	document.write(`<p>Email: ${userMail}</p>`);
}

document.write(`<p>Age: ${userAge}</p>`);