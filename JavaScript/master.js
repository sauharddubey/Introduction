let titles = ['Hello!', 'Hola!', 'Guten tag!','Hej!','你好','こんにちは','Ciao!','Bonjour!','नमस्ते!'];
let currentIndex = 0;
let aSpan = document.getElementById('job-title');

setInterval(() => {

   aSpan.innerHTML= titles[currentIndex];

   currentIndex++;

   if (currentIndex === 9)
    currentIndex = 0;

}, 1000)




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




$(window).on('load resize',function(){
        if($(window).width() < 1000){
            window.location = "page Under construction.html"
        }
    });
