var tl = gsap.timeline();
tl.from("#page1>h1, #page1 #btn1",{
    opacity:0,
    duration:1,
    delay:0.6
})
gsap.from("#img1",{
    y:60,
    opacity:0,
    duration:1,
    delay:0.3
})
gsap.from("#img3",{
    y:-50,
    opacity:0,
    delay:0.3,
    duration:1
})
gsap.from("#img2",{
    x:100,
    opacity:0,
    delay:0.3,
    duration:1
})
gsap.from("#page2 h5, #page2 h1,#page2 #about",{
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 h5",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 30%",
        scrub:2
    }
})