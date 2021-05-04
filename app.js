//VARIABLES

const div_back = document.querySelector(".div__back");
const div_modal = document.querySelector(".div__modal");
const header = document.querySelector("header");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const image_close = document.querySelector(".image__close");
const card_success = document.querySelector(".card-success");
const pledge_bambo = document.querySelector(".pledge__bambo");
const pledgeGreen = document.querySelector(".pledge__green");
const pledgeBlackEdition = document.querySelector(".pledge-black__edition");
const divNumberBambo = document.querySelector(".div__number__bambo");
const divNumberBlack = document.querySelector(".div__number__black");
const main = document.querySelector("#main")
const bamboChecked = document.getElementById("bambo");
const blacEditionChecked = document.getElementById("black__edition");
const btnGotIt = document.querySelector(".btn-got__it");
const continueBambo = document.getElementById("continue__bambo");
const continueBlackEdition = document.getElementById("continue__black__edition")
let i = 101;
let j = 64;
let outputBig = document.getElementById('num-bambo');
let outputSmall = document.getElementById('num-bambo__span');
let outputBigBlackEd = document.getElementById('num-black__edition');
let outputSmallBlackEd = document.getElementById('num-black__span');
const divBookmark = document.querySelector(".div__bookmark");
const iconBookmark = document.querySelector(".icon__bookmark");
const bookmark_p = document.querySelector(".bookmark__p");
const path = document.getElementById("path");
//const closeMenu = document.querySelector(".close__menu");
//const navMobile = document.querySelector(".nav-mobile");
//const mobileHam = document.querySelector(".mobile__ham");
const navbar_mobile = document.querySelector(".navbar__mobile")
const mobileHam = document.querySelector(".mobile__ham")
const menuLinks = document.querySelectorAll(".menuLink")
const xIcon = document.querySelector(".xIcon")
const menuIcon = document.querySelector(".menuIcon")

/*mobileHam.addEventListener("click", function() {
   navMobile.classList.toggle("nav__mobile__open")
   mobileHam.style.display = "none" 
})
*/
mobileHam.addEventListener("click", toggleMenu)

function toggleMenu() {
    if (navbar_mobile.classList.contains("showMenu")) {
        navbar_mobile.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
        main.style.filter = "brightness(100%)";
    } else {
        navbar_mobile.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
       main.style.filter = "brightness(60%)";
    }
}
menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleMenu)
    }
)


divBookmark.addEventListener("click", function () {
    iconBookmark.classList.add("icon__bookmarked")
    divBookmark.classList.add("div__bookmarked")
    bookmark_p.classList.add("bookmarked__p")
   path.style.fill = "#fff";
    bookmark_p.innerHTML = "Bookmarked"
})

div_back.addEventListener("click", function(e) {
   e.preventDefault();
    modal.style.display = "flex";
    div_modal.style.display ="grid";
    main.style.filter = "brightness(60%)";
   // div_modal.style.transition =" ease-in 0.4s"
})

image_close.addEventListener("click", function(){
    div_modal.style.display ="none";
    modal.style.display = "none"
   main.style.filter = "brightness(100%)"
})

function myBambo() {
    bamboChecked.checked = true;
    div_modal.style.display = "grid";
    modal.style.display = "flex";
    div_modal.style.margin = "10% auto"
    pledge_bambo.style.display = "block";
    pledgeGreen.style.color ="green";
    card_success.style.display = "none";
    pledgeBlackEdition.style.display = "none";
    main.style.filter = "brightness(60%)";
}
function myModalBlack() {
    blacEditionChecked.checked = true;
    div_modal.style.display = "grid";
    modal.style.display = "flex";
    div_modal.style.margin = "10% auto";
    pledgeBlackEdition.style.display = "block";
    pledgeGreen.style.color = "green";
    pledge_bambo.style.display = "none";
    card_success.style.display = "none";
    main.style.filter = "brightness(60%)";
      
}

function myStart() {
    card_success.style.display = "flex";
    pledge_bambo.style.display = "none";
    div_modal.style.display = "none";
    pledgeBlackEdition.style.display = "none";
     main.style.filter = "brightness(60%)"
}



continueBambo.addEventListener("click", function (e) {
   e.preventDefault();
    let a = document.getElementById("pledge-bambo").value;
    if (a >= 25 && a <= 75) {
        card_success.style.display = "flex";
        div_modal.style.display = "none";
        //console.log(a)
        } else {
        return alert("please get number between 25 and 75")
    }

    i = i - 1;

    if (i > 0) {
       
        outputBig.innerHTML -= 1;
        outputSmall.innerHTML -= 1;
        //console.log(i)

    }
    else {
        bamboChecked.disabled = true;
    }
})


continueBlackEdition.addEventListener("click", function(e) {
   e.preventDefault();
  let b = document.getElementById("pledge-black__edition").value; 
    if (b >= 75 && b <= 200) {
        card_success.style.display = "flex";
        div_modal.style.display = "none";
   //console.log(b) 

        } else {
            return alert("please select number between 75 and 200")
    }

    j = j - 1;

    if (j > 0) {

        outputBigBlackEd.innerHTML -= 1;
        outputSmallBlackEd.innerHTML -= 1;
        //console.log(i)

    }
    else {
        bamboChecked.disabled = true;
    }
 
})

function gotIt() {
      card_success.style.display = "none";
    div_modal.style.display = "none";
    main.style.filter = "brightness(100%)";
    modal.style.display = "none";
}

