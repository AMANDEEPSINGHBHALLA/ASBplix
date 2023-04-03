const splash = document.querySelector(".splash");
const dropdownbutton = document.querySelector(".dropdownbutton");
const userdropdownbutton = document.querySelector(".userdropdownbutton");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, 5000);
})

dropdownbutton.addEventListener("click", ()=>{
    document.querySelector(".drop_down").classList.add("drop_down_active");
})

document.getElementsByClassName("cross")[0].addEventListener("click", ()=>{
    document.querySelector(".drop_down").classList.remove("drop_down_active");
})

userdropdownbutton.addEventListener("click", ()=>{
    document.querySelector(".user_button").classList.add("user_button_active");
})
document.getElementsByClassName("cross2")[0].addEventListener("click", ()=>{
    document.querySelector(".user_button").classList.remove("user_button_active");
})

document.getElementsByClassName("dd-home")[0].addEventListener("click", ()=>{
    document.location.href = "index.html";
})
document.getElementsByClassName("dd-plans")[0].addEventListener("click", ()=>{
    window.location.href = "https://amandeepsinghbhalla.github.io/ASBplix-planss/";
})

document.getElementsByClassName("try-for-free")[0].addEventListener("click", ()=>{
    window.location.href = "https://amandeepsinghbhalla.github.io/ASBplix-login/";
})

document.getElementsByClassName("get-started")[0].addEventListener("click", ()=>{
    window.location.href = "https://amandeepsinghbhalla.github.io/ASBplix-login/";
})

document.getElementsByClassName("playstore_icon")[0].addEventListener("click", ()=>{
    window.location.href = "https://play.google.com/";
})
document.getElementsByClassName("apple_icon")[0].addEventListener("click", ()=>{
    window.location.href = "https://www.apple.com/in/app-store/";
})

document.getElementsByClassName("user-button-tryforfree")[0].addEventListener("click", ()=>{
    window.location.href = "https://amandeepsinghbhalla.github.io/ASBplix-login/";
})
