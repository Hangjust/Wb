const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
 yValue = 0;

 window.addEventListener("mousemove", (e) => {
    let speedx = el.dataset.speedx
    xValue = e.clientX - window.innerWidth / 2;
    yValue =e.clientY - window.innerHeight / 2;


    parallax_el.forEach(el => {
        el.style.transform = `translateX(calc(-100% + ${-xValue * speedx}px)) translateY(calc(-100% + ${yValue}px))`;
    })
 })
