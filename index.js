const FormGym = document.querySelector(".form-gym");

FormGym.addEventListener("submit", function (e) {
  e.preventDefault();
  let formContainer = document.getElementById("form-container");
  let finePrint = document.querySelector(".fine-print");
  formContainer.innerHTML =
    "<p class='thank-you-message'>Thanks for submitting! We will be in touch.</p>";
  finePrint.innerHTML = "";
});
