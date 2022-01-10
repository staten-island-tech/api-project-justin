import "../styles/error.css";

const error = window.localStorage.getItem("error")

document.querySelector(".error").innerHTML = error
document.querySelector(".go-back-button").addEventListener('click', function(){
    window.location.href = "index.html"
})