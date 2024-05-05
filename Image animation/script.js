var tl = gsap.timeline({
    repeat:-1
});

tl.to("#container #img-container",{
    width:"100%",
    ease:Expo.easeInOut,
    stagger:2,
},'a');
tl.to("#content h1",{
    top:0,
    ease:Expo.easeInOut,
    stagger:2,
},'a');
tl.to("#content h1",{
    top:"-100%",
    ease:Expo.easeInOut,
    delay:2,
    stagger:2
},'a');