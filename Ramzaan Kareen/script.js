
var tl = gsap.timeline();

tl.from("#part1 #text h3",{
    y:-100,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.5
});
tl.from("#overlay h1",{
    x:"-100%",
    opacity:0,
    stagger:0.3
});
tl.from("#part3 #img",{
    scale:0.5,
    opacity:0
});
tl.from("#vertical-text",{
    x:100,
    opacity:0,
    scale:0.8
})