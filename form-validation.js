/*Jeremiah Howell*/

function validate() {
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
	//Created my own variables to store length, search/toLowerCase method
	//Force of habit from prior programming classes, just makes it look 
	//a lot cleaner deeper into the code
	var user_Length = userEntered.length;
	var pass_Length = passEntered.length;
	var space = userEntered.search(" ");
	var pass_Validator = passEntered.toLowerCase();
	
	//If the username is less than 6 characters long or contains spaces
	//it will not be accepted
  if(user_Length < 6) {
  	document.getElementById("usernameError").innerHTML="Username must contain 6 characters";
  	document.getElementById("usernameError").classList.remove("hidden-message");
  	document.getElementById("usernameError").classList.add("shown-message");
  	document.getElementById("usernameGroup").classList.add("has-error");
  } else if (space !== -1) {
    	document.getElementById("usernameError").innerHTML="Username cannot contain spaces";
    	document.getElementById("usernameError").classList.remove("hidden-message");
    	document.getElementById("usernameError").classList.add("shown-message")
    	document.getElementById("usernameGroup").classList.add("has-error");
  } else {
    	document.getElementById("usernameGroup").classList.add("has-success");
  }
	
	//The password must be between 6-20 characters long and must not equal
	//the username or "password"
	if(userEntered == passEntered) {
    document.getElementById("passwordError").innerHTML="password and username cannot match";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
	} else if(pass_Length < 6 || pass_Length > 20){
    	document.getElementById("passwordError").innerHTML="password must be 6-20 characters long";
    	document.getElementById("passwordError").classList.remove("hidden-message");
    	document.getElementById("passwordError").classList.add("shown-message");
    	document.getElementById("passwordGroup").classList.add("has-error");
	} else if(pass_Validator == "password") {
    	document.getElementById("passwordError").innerHTML="password cannot be 'password'";
    	document.getElementById("passwordError").classList.remove("hidden-message");
    	document.getElementById("passwordError").classList.add("shown-message");
    	document.getElementById("passwordGroup").classList.add("has-error");		
	} else {
			document.getElementById("passwordGroup").classList.add("has-success");			
	}
}