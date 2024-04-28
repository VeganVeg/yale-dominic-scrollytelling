

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






/* P2.2 B - INSTRUCTION 4 */

/*const animSalon = gsap.timeline()
    .fromTo('.chap-2', { y: '0', scale: 2.32, transformOrigin: "" }, { scale: 1, duration: 3, transformOrigin: "50% 20.5%" })
    .fromTo('.kevin-sofa', { scale: 2.5, y: '250vh' }, { scale: 1, y: '100vh', duration: 3 }, 0)
    .fromTo('.chap-1', { scale: 1 }, { scale: 0.425, duration: 3, transformOrigin: "50% 21.3%" }, 0)
    .from('.chp2-t1', { y: '1vh', opacity: 0, duration: 1.5 })
    .fromTo('.chp2-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 }, '+=4')
    .from('.chp2-t2', { y: '1vh', opacity: 0, duration: 1.5 })
    .fromTo('.chp2-t2', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 }, '+=3')
    .fromTo('#chapitre-2 .kevin', { y: '0' }, { y: '-6vh', ease: 'back.inOut', duration: 1 })


animSalon.pause();

/*window.addEventListener('click', function () {
    animSalon.play();
})*/



/* ANIMATION CHAPITRE-2 */
/*gsap.fromTo('.chap-1', { scale: 1 }, {
    scale: 0.425, duration: 3, transformOrigin: "50% 21.3%", scrollTrigger: {
        scrub: 1,
        trigger: '#chapitre-2',

        start: 'top top',
        end: 'bottom top',
    }
})*/




/*gsap.fromTo('.chap-2', { y: '0', scale: 2.32, transformOrigin: "" }, {
    scale: 1, duration: 3, transformOrigin: "50% 20.5%", scrollTrigger: {
        pin: true,
        scrub: 1,
        trigger: '#chapitre-2',

        start: 'top top',
        end: 'bottom top',
        markers: true
    }
})*/


/*gsap.fromTo('.kevin-sofa', { scale: 2.5, y: '250vh' }, {
    scale: 1, y: '100vh', duration: 3, scrollTrigger: {
        scrub: 1,
        trigger: '#chapitre-2',

        start: 'top top',
        end: 'bottom top',

    }
})

gsap.from('.chp2-t1', {
    y: '1vh', opacity: 0, duration: 1.5, scrollTrigger: {
        trigger: '#chapitre-2',
        start: 'top top',
        end: 'bottom top',
        markers: true,
    }
}, '+=1')*/

const anim = gsap.fromTo('.wheel', {
    y: 0,
    opacity: '100%'
}, {
    y: 55,
    duration: 1.5,
    opacity: '0%',
    repeat: -1,
});

gsap.timeline({
    scrollTrigger: {
        pin: true,
        scrub: 1,
        markers: true,
        start: "top top",
        end: "300% top",
        toggleActions: "restart complete reverse reset",
        trigger: "#chapitre-2",
    }
})

    .fromTo('.titre-header', { y: 0 }, { y: '-25vh', opacity: 0, duration: 5 }, 0)

    .fromTo('.description', { y: 0 }, { y: '-25vh', opacity: 0, duration: 5 }, 0)
    .from('#chapitre-2 .terre', { y: '90vw', duration: 15, }, 0)
    .from('#chapitre-2 .lune', { y: '100vw', duration: 15, }, 0)
    .fromTo('.chap-2', { y: '0', scale: 2.32, transformOrigin: "" }, { scale: 1, duration: 10, transformOrigin: "50% 20.5%", delay: 20 }, 0)
    .fromTo('.kevin-sofa', { scale: 2.5, y: '250vh' }, { scale: 1, y: '100vh', duration: 10, delay: 20 }, 0)
    .fromTo('.chap-1', { scale: 1 }, { scale: 0.425, duration: 10, transformOrigin: "50% 21.3%", delay: 20 }, 0)
    .from('.chp2-t1', { y: '1vh', opacity: 0, duration: 5, })
    .fromTo('.chp2-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 4.5 }, '+=4')
    .from('.chp2-t2', { y: '1vh', opacity: 0, duration: 4.5 })
    .fromTo('.chp2-t2', { y: '0' }, { y: '1vh', opacity: 0, duration: 4.5 }, '+=3')
    .fromTo('#chapitre-2 .kevin', { y: '0' }, { y: '-6vh', ease: 'back.inOut', duration: 10 })
    .fromTo('#chapitre-2', { opacity: 100 }, { opacity: 0 })

/* ANIMATION CHAPITRE-1 */
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

const animChap4 = gsap.timeline()
    .from('.chp4-t1', { y: '1vh', opacity: 0, duration: 1.5, })
    .fromTo('#chapitre-4 .kevin', { x: '-28vw' }, { x: '0', duration: 1 }, '+=1')
    .fromTo('.chp4-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 }, '+=3')
    .from('.chp4-t2', { y: '1vh', opacity: 0, duration: 1.5 },)
    .from('#chapitre-4 .escalier', { rotate: 135, transformOrigin: "100% 10%", ease: 'sine.Out', duration: 2 }, '-=1')
    .fromTo('#chapitre-4 .kevin', { x: '0' }, { x: '28vw', ease: 'power1.inOut', duration: 1 })
    .fromTo('#chapitre-4 .kevin', { x: '28vw' }, { x: '50vw', y: '-35vh', ease: 'power1.inOut', duration: 1 })
    .from('#chapitre-4 .escalier', { rotate: 0, transformOrigin: "100% 10%", ease: 'power1.inOut', duration: 1 })
    .from('#chapitre-4 .spritesheet-feu', { opacity: 0, duration: 1 },)
    .fromTo('.chp4-t2', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 })
    .from('.nuage2', { opacity: 0, scale: 0.5, duration: 2 }, '-=1.5')
    .from('.nuage1', { opacity: 0, scale: 0.5, duration: 2 }, '-=1.5')



