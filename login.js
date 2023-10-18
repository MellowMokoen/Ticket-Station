const formOpenBtn = document.querySelector("#form-open"), 
home = document.querySelector(".container"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowwHide = document.querySelectorAll(".pw-hide");

pwShowwHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye")
        }else{
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash")
        };
        console.log(getPwInput);
    })

})
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
})

document.getElementById("btn").onclick = function redirectFunction(){
    location.href = "ticket.html";
};
        
