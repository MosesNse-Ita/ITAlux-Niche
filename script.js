const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () =>{
    hamburger.classList.remove('active');
    navMenu.classList.remove("active");
}))


let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-pic")
  userTexts[i].classList.add("active-text")
}


function openPage(){
  var x =document.getElementById("search").value;

  if (x === "Dumper") {
    window.location.href="#asphalt";
  }
  if (x === "Roller Compactor") {
    window.location.href = "#a1";
  }
}