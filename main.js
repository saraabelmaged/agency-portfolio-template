// select elements
let modeButton = document.querySelector(".dark-mode");
let modeIcon = document.querySelector(".dark-mode i")
let linksIcon = document.querySelectorAll(".icon > span")
let features = document.querySelector(".features") 
let portfolio = document.querySelector(".portfolio")
let contact = document.querySelector(".contact")
let portCard = document.querySelectorAll(".card")
let contactP = document.querySelector(".contact .label")
let specialHeading = document.querySelectorAll(".special-heading")
let paragraphs = document.querySelectorAll("p")
let headers = document.querySelectorAll("h3")

console.log(specialHeading)
let darkMode = false;

modeButton.addEventListener("click",function(){
    darkMode = !darkMode;
    if(darkMode){
    document.body.style = 'background-color: #242424ff';

    modeButton.innerHTML = '<i class="fa-solid fa-sun" style="color: white;"></i>'

    linksIcon.forEach(span => {
    span.style.backgroundColor = "#ebeced";
    });
    features.style.cssText = "background-color: #2c2c2c";
    portfolio.style.cssText = "background-color: #2c2c2c";
    contact.style.cssText = "background-color: #2c2c2c";

    portCard.forEach(card => {
        card.style.backgroundColor = '#1a1a1a';
    })

    paragraphs.forEach(p => {
        p.style.color = '#8b8b8bff'
    })

    contactP.style.cssText = "color: #387492";

    headers.forEach(h3 => {
        h3.style.color = 'white'
    })

    specialHeading.forEach(h2 => {
        h2.style.color = '#8c8c8cff'
    })

    }else {
        document.body.style = 'background-color:white';

        modeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'

        linksIcon.forEach(span => {
    span.style.backgroundColor = "";
    });

    features.style.cssText = "";
    portfolio.style.cssText = "";
    contact.style.cssText = "";

    contactP.style.cssText = "";

    portCard.forEach(card => {
        card.style.backgroundColor = '';
    })

    paragraphs.forEach(p => {
        p.style.color = ''
    })
    headers.forEach(h3 => {
        h3.style.color = ''
    })

    specialHeading.forEach(h2 => {
        h2.style.color = ''
    })
    }
})