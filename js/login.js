
//efeito login
const formOpenBtn = document.querySelector("#abrir-form"),
home = document.querySelector(".container");
    //faz o pop up aparecer quando aperta em login
formOpenBtn.addEventListener('click', () => home.classList.add("show"))
    //faz o pop up sumir quando aperta fora
document.addEventListener('click', function (event) {
    if (!home.contains(event.target) && event.target !== formOpenBtn) {
        home.classList.remove("show");
    }
});
  
const container = document.querySelector(".container");
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});
//efito login
