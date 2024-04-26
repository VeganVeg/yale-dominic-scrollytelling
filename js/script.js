GSDevTools.create();

const scrolling = document.querySelector('.is-scrolling')
const body = document.body


window.addEventListener('scroll', () => {
    body.classList.add('is-scrolling')
})

window.addEventListener('scrollend', () => {
    const timer = setTimeout(() => {
        console.log('test');
        scrolling.classList.remove('is-scrolling')
    }, 100)
})




const anim = gsap.fromTo('.wheel', {
    y: 0,
    opacity: '100%'
}, {
    y: 55,
    duration: 1.5,
    opacity: '0%',
    repeat: -1,
});

/* P2.2 B - INSTRUCTION 4 */

const animSalon = gsap.timeline()
    .fromTo('.chap-2', { y: '0', scale: 2.32, transformOrigin: "" }, { scale: 1, duration: 3, transformOrigin: "50% 20.5%" })
    .fromTo('.kevin-sofa', { scale: 2.5, y: '250vh' }, { scale: 1, y: '100vh', duration: 3 }, 0)
    .fromTo('.chap-1', { scale: 1 }, { scale: 0.425, duration: 3, transformOrigin: "50% 21.3%" }, 0)
    .from('.chp2-t1', { y: '1vh', opacity: 0, duration: 1.5 })
    .fromTo('.chp2-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 }, '+=4')
    .from('.chp2-t2', { y: '1vh', opacity: 0, duration: 1.5 })
    .fromTo('.chp2-t2', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 }, '+=3')
    .fromTo('#chapitre-2 .kevin', { y: '0' }, { y: '-6vh', ease: 'back.inOut', duration: 1 })


animSalon.pause();

window.addEventListener('click', function () {
    animSalon.play();
})

const animChap1 = gsap.timeline()
    .from('.chp1-t1', { y: '1vh', opacity: 0, duration: 1.5 }, 2)
    .fromTo('.chp1-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 }, 13)
    .from('#chapitre-1 .meteorite', { x: '-52vw', y: '-20vh', scale: 1.7, rotate: '-90', ease: 'none', duration: 29, }, 14)
    .from('#chapitre-2 .meteorite', { x: '-52vw', y: '-20vh', scale: 1.7, rotate: '-90', ease: 'none', duration: 29, }, 14)
    .fromTo('.lune', { x: '0' }, { x: '-23vw', ease: 'none', duration: 43 }, 0)


const animChap3 = gsap.timeline()
    .from('.chp3-t1', { y: '1vh', opacity: 0, duration: 1.5 })
    .fromTo('.chp3-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 }, '+=4')
    .fromTo('.casque-pince', { y: '-25vh' }, { y: '-7vh', duration: 1.5, ease: 'back.out' }, 1)
    .fromTo('.casque-pince', { y: '-7vh' }, { y: '7.4vh', duration: 1.5, ease: 'back.in' }, '-=3.5')/* 43.4vh */
    .fromTo('.pince', { y: '0vh' }, { y: '-25vh', duration: 1, ease: 'expo.in' }, 6)/* 43.4vh */