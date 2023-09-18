let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let Rpwd = document.getElementById("Rpwd");
const signupForm = document.getElementById("signupForm");

signinBtn.onclick = function () {
   nameField.style.maxHeight = "0";
   title.innerHTML = "Sign In";
   signupBtn.classList.add("disable");
   signinBtn.classList.remove("disable");
};

signupBtn.onclick = function () {
   nameField.style.maxHeight = "60px";
   title.innerHTML = "Sign Up";
   signupBtn.classList.remove("disable");
   signinBtn.classList.add("disable");
};

// Toast function
const button = document.querySelector("button");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
const inputs = document.querySelectorAll("input"); // Assuming your input fields have "input" as the selector.

let timer1, timer2;

button.addEventListener("click", () => {
   // Check if any input is empty
   const isEmpty = Array.from(inputs).some(input => input.value.trim() === '');

   if (isEmpty) {
      // At least one input is empty, do not show the toast
      return;
   } else {
      toast.classList.add("active");
      progress.classList.add("active");

      timer1 = setTimeout(() => {
         toast.classList.remove("active");
      }, 5000); // 5 seconds

      timer2 = setTimeout(() => {
         progress.classList.remove("active");
      }, 5300);
   }
});

closeIcon.addEventListener("click", () => {
   toast.classList.remove("active");

   setTimeout(() => {
      progress.classList.remove("active");
   }, 300);

   clearTimeout(timer1);
   clearTimeout(timer2);
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
});