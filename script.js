const navToggle = document.querySelector(".nav__toggle")
const navList = document.querySelector(".nav__list")

hamburger.addEventListener("click",() => {
  navToggle.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () =>{
  navToggle.classList.remove('active');
    navList.classList.remove("active");
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