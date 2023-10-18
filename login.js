const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const signupLink = document.getElementById("signup");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const passwordInput2 = document.getElementById("password2");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const form_container=document.querySelector(".form-container");

signupBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  form_container.classList.add("active");
})
loginBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  form_container.classList.remove("active");
})

loginButton.addEventListener("click", function() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  

  if (emailValue === "" || passwordValue === "" ) {
    alert("Please fill in both email and password fields.");
  } else {
    // Perform your login action here
    // For demonstration purposes, let's simulate a delay before redirection
    setTimeout(function() {
      redirectToLocalPath("ticket.html"); // Replace with the local path
    }, 1000); // This waits for 1 second (1000 milliseconds) before redirecting
  }
});

signupButton.addEventListener("click", function() {
    // Perform your login action here
    // For demonstration purposes, let's simulate a delay before redirection
  setTimeout(function() {
    redirectToLocalPath("ticket.html"); // Replace with the local path
  }, 1000); // This waits for 1 second (1000 milliseconds) before redirecting

});

signupLink.addEventListener("click", function(event) {
  event.preventDefault();
  // You can add code to handle the signup process or redirect to the signup page
});

function redirectToLocalPath(path) {
  location.href = path; // Use the local path here
}
