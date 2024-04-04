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

