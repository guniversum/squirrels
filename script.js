// Form validation: Mainly followed Florin Pop's tutorial https://www.youtube.com/watch?v=rsd4FNGTRBw&list=LL&index=9&t=4s&ab_channel=FlorinPop 

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const thanks = document.getElementById("thanks");
const successParagraph = document.createElement("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();
if (checkInputs()) {
  successParagraph.innerHTML = "Thanks for your application, heathen!";
  thanks.appendChild(successParagraph);
}
});


function checkInputs() {
  //get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  let success = true;

  if (usernameValue === '') {
    setErrorFor(username, "Username cannot be blank");
    success = false;
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    success = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    success = false;
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    success = false;
  } else {
    setSuccessFor(password);
  }
  if (password2Value === "") {
    setErrorFor(password2, "Password2 cannot be blank");
    success = false;
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords do not match");
    success = false;
  } else {
    setSuccessFor(password2);
  }
  return success;

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// TO CHECK WHILE WRITING:
//username.addEventListener("input", () => {
//   const usernameValue = username.value.trim();
//    if (usernameValue === '') {
//     setErrorFor(username, "Username cannot be blank");
//   } else {
//     setSuccessFor(username);
//   };
// }) 
