const scrolling = document.querySelector('.is-scrolling')
    const body = document.body

    
window.addEventListener('scroll',() =>{
    body.classList.add('is-scrolling')
})

window.addEventListener('scrollend',() =>{
    const timer = setTimeout(() =>{
        console.log('test');
        scrolling.classList.remove('is-scrolling')
    }, 100)
})




const anim = gsap.fromTo('.wheel', {
    y: 0,
    opacity: '100%'
},{
    y: 55,
    duration: 1.5,
    opacity: '0%',
    repeat: -1,
});

const animSalon = gsap.timeline()
.fromTo('.chap-2', {y: '0 ',scale: 2.32, transformOrigin: ""},{scale: 1,duration: 3, transformOrigin: "50% 20.5%"})
.fromTo('.kevin-sofa', {scale: 2.5, y: '250vh'},{scale: 1, y: '100vh', duration: 3}, 0)
.fromTo('.chap-1', {scale: 1},{scale: 0.425, duration: 3, transformOrigin: "50% 21.3%"}, 0)

animSalon.pause();

window.addEventListener('click', function(){
    animSalon.play();
})
    

