const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')
const signUp = document.getElementById('signupbtn')
const signIn = document.getElementById('signinbtn')

const emailin = document.getElementById('emailin')
const password = document.getElementById('passwordin')

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active")
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active")
});

function validationsignup() {
	alert("Under Construction")
	return false;
}

function validation(){

			var pass = document.getElementById('passwordin').value;
			var emails = document.getElementById('emailin').value;

			if(emails == ""){
				alert("Enter Email Incorrect")
				return false;
			}
			if(emails == "abhi@gmail.com")
			{
				if(pass == "18IT041")
				{
					window.open("index2.html","_self")
				}
				else
				{
					alert("Enter Password Incorrect")
				}
			}
			if(emails != "abhi@gmail.com")
			{
				alert("Incorrect Email")
			}
			if(pass == ""){
				alert("Enter Password")
				return false;
			}
			if((pass.length <= 5) || (pass.length > 20)) {
				alert("Password Must Be 5 And 20 Characters")
				return false;	
			}

		}
