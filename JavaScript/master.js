
// hello text
let titles = ['Hello!', 'Hola!', 'Guten tag!','Hej!','你好','こんにちは','Ciao!','Bonjour!','नमस्ते!'];
let currentIndex = 0;
let aSpan = document.getElementById('job-title');

setInterval(() => {

   aSpan.innerHTML= titles[currentIndex];

   currentIndex++;

   if (currentIndex === 9)
    currentIndex = 0;

}, 1000)



// scroll
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".scrolly",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});



// redirect
$(window).on('load resize',function(){
        if($(window).width() < 1450){
            window.location = "page Under construction.html"
        }
    });


// // darkmode
//     function myFunction() {
//    var element = document.getElementsByClassName(darkmode);
//    element.classList.toggle("dark-mode");
// }
