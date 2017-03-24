/*Jeremiah Howell*/
function register() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  window.alert("Username: " + username + " Password: " + password);
}

function validateUsername() {
	var username = document.getElementById("user").value;
	var user_Length = username.length;
	//If the username is less than 6 characters long or contains spaces
	//it will not be accepted
  if(user_Length < 6) {
  	document.getElementById("usernameError").innerHTML="Username must contain 6 characters";
  	document.getElementById("usernameError").classList.remove("hidden-message");
  	document.getElementById("usernameError").classList.add("shown-message");
		document.getElementById("usernameGroup").classList.remove("has-success");
  	document.getElementById("usernameGroup").classList.add("has-error");
  } else if (space !== -1) {
    	document.getElementById("usernameError").innerHTML="Username cannot contain spaces";
    	document.getElementById("usernameError").classList.remove("hidden-message");
    	document.getElementById("usernameError").classList.add("shown-message");
			document.getElementById("usernameGroup").classList.remove("has-success");
    	document.getElementById("usernameGroup").classList.add("has-error");
  } else {
			document.getElementById("usernameGroup").classList.add("has-success");
			document.getElementById("usernameGroup").classList.remove("has-error");
  }
}

function validatePassword() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
	var user_Length = username.length;
	var pass_Length = password.length;	
	var pass_Validator = password.toLowerCase();
	//The password must be between 6-20 characters long and must not equal
	//the username or "password"
	if(username == password) {
    document.getElementById("passwordError").innerHTML="password and username cannot match";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
		document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
	} else if(pass_Length < 6 || pass_Length > 20){
    	document.getElementById("passwordError").innerHTML="password must be 6-20 characters long";
    	document.getElementById("passwordError").classList.remove("hidden-message");
    	document.getElementById("passwordError").classList.add("shown-message");
			document.getElementById("passwordGroup").classList.remove("has-success");
    	document.getElementById("passwordGroup").classList.add("has-error");
	} else if(pass_Validator == "password") {
    	document.getElementById("passwordError").innerHTML="password cannot be 'password'";
    	document.getElementById("passwordError").classList.remove("hidden-message");
    	document.getElementById("passwordError").classList.add("shown-message");
			document.getElementById("passwordGroup").classList.remove("has-success");
    	document.getElementById("passwordGroup").classList.add("has-error");		
	} else {
			document.getElementById("passwordGroup").classList.add("has-success");
			document.getElementById("passwordGroup").classList.remove("has-error");			
	}
}