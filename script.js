const card = document.querySelector(".card")
const container  = document.querySelector(".container")
var title = document.querySelector(".title")
var sneaker = document.querySelector(".sneaker img")
var purschase = document.querySelector(".purchase button")
var description = document.querySelector(".info h3")
var sizes = document.querySelector(".sizes")


container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/25;
    let yAxis = (window.innerHeight / 2 - e.pageY)/25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})


container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  });
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  });