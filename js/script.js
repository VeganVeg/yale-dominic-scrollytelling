/*gsap.registerPlugin(DrawSVGPlugin);*/
/*gsap.registerPlugin(RoughEase);*/
gsap.registerPlugin(MotionPathPlugin);
/*gsap.registerPlugin(MorphSVGPlugin);*/


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


const anim = gsap.fromTo('.wheel', {
    y: 0,
    opacity: '100%'
}, {
    y: 55,
    duration: 1.5,
    opacity: '0%',
    repeat: -1,
});


/* ANIMATIONS CHAPITRE-1 & 2 */
gsap.timeline({
    scrollTrigger: {
        pin: true,
        scrub: 1,
        start: "top top",
        end: "450% top",
        toggleActions: "restart complete reverse reset",
        trigger: "#chapitre-2",
    }
})
    .from('.espace', { y: '25vh', duration: 15 })
    .fromTo('.titre-header', { y: 0 }, { y: '-25vh', opacity: 0, duration: 5 }, 0)
    .fromTo('.scroll', { y: 0, opacity: '100%' }, { y: '-25vh', opacity: '0%', duration: 5 }, 0)
    .fromTo('.description', { y: 0 }, { y: '-25vh', opacity: 0, duration: 5 }, 0)
    .from('#chapitre-2 .terre', { y: '90vw', duration: 15, }, 0)
    .from('#chapitre-2 .lune', { y: '100vw', duration: 15, }, 0)
    .from('.chp1-t1', { y: '1vh', opacity: 0, duration: 5 })
    .fromTo('.chp1-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 4.5 }, '+=4')
    .fromTo('.chap-2', { y: '0', scale: 2.32, transformOrigin: "" }, { scale: 1, duration: 20, ease: 'sine.out', transformOrigin: "50% 20.5%", delay: 40 }, 0)
    .fromTo('.kevin-sofa', { scale: 2.5, y: '250vh' }, { scale: 1, y: '100vh', ease: 'sine.out', duration: 20, delay: 40 }, 0)
    .fromTo('.chap-1', { scale: 1 }, { scale: 0.425, ease: 'sine.out', duration: 20, transformOrigin: "50% 21.3%", overflow: 'hidden', delay: 40 }, 0)
    .from('.chp2-t1', { y: '1vh', opacity: 0, duration: 5, })
    .fromTo('.chp2-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 4.5 }, '+=4')
    .from('.chp2-t2', { y: '1vh', opacity: 0, duration: 4.5 })
    .fromTo('.chp2-t2', { y: '0' }, { y: '1vh', opacity: 0, duration: 4.5 }, '+=3')
    .from('#chapitre-2 .meteorite', { x: '-52vw', y: '-20vh', scale: 1.7, rotate: '-90', ease: 'sine.out', duration: 40, delay: 28 }, 0)
    .fromTo('.lune', { x: '0' }, { x: '-23vw', ease: 'none', ease: 'sine.out', duration: 62, delay: 8 }, 0)
    .fromTo('#chapitre-2 .kevin', { y: '0' }, { y: '-6vh', ease: 'back.inOut', duration: 10 })
/*.fromTo('#chapitre-2', { opacity: '100%', }, { opacity: '0%', duration: 3 }, '-=0.5')*/



/* ANIMATIONS CHAPITRE-3 */

gsap.timeline({
    scrollTrigger: {
        pin: true,
        start: "top top",
        end: 'bottom top',
        toggleActions: "restart complete reverse reset",
        trigger: "#chapitre-3",
    }
})
    /*.from('#chapitre-3', { opacity: '0', duration: 0.3 })*/
    .from('.chp3-t1', { y: '1vh', opacity: 0, duration: 1.5 })
    .fromTo('.casque-pince', { y: '-25vh', display: 'none' }, { y: '-7vh', duration: 1.5, ease: 'back.out', display: 'block' }, '-=1')
    .fromTo('.casque-pince', { y: '-7vh' }, { y: '7.4vh', duration: 1.5, ease: 'back.in', delay: 1 })/* 43.4vh */
    .fromTo('.chp3-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 1.5 }, '+=4')
    .fromTo('.pince', { y: '0vh' }, { y: '-25vh', duration: 1, ease: 'expo.in' }, '-=4')/* 43.4vh */
/*.fromTo('#chapitre-3', { opacity: '100%', }, { opacity: '0%', duration: 0.3 }, '-=0.5')*/



/* ANIMATIONS CHAPITRE-4 & 5 */
gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        pin: true,
        start: "top top",
        end: "1200% top",
        toggleActions: "restart complete reverse reset",
        trigger: "#chapitre-4",
    }
})
    /*.from('#chapitre-4', { opacity: '0', duration: 8 })*/
    .from('.chp4-t1', { y: '1vh', opacity: 0, duration: 8, delay: 2 })
    .fromTo('#chapitre-4 .kevin', { x: '-28vw' }, { x: '0', ease: 'sine.out', duration: 25 }, '+=5')
    .fromTo('.chp4-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 8 }, '+=4')
    .from('.chp4-t2', { y: '1vh', opacity: 0, duration: 8 })
    .from('#chapitre-4 .escalier', { rotate: 135, transformOrigin: "100% 10%", ease: 'sine.out', duration: 30 })
    .fromTo('#chapitre-4 .kevin', { x: '0' }, { x: '28vw', ease: 'sine.inOut', duration: 30 })
    .fromTo('#chapitre-4 .kevin', { x: '28vw' }, { x: '50vw', y: '-35vh', ease: 'sine.inOut', duration: 30 })
    .from('#chapitre-4 .escalier', { rotate: 0, transformOrigin: "100% 10%", ease: 'sine.out', duration: 30 })
    .from('#chapitre-4 .spritesheet-feu', { opacity: 0, duration: 20 })
    .fromTo('.chp4-t2', { y: '0' }, { y: '1vh', opacity: 0, duration: 8 })
    .from('.nuage2', { opacity: 0, scale: 0.5, duration: 20 }, '-=1.5')
    .from('.nuage1', { opacity: 0, scale: 0.5, duration: 20 }, '-=1.5')
    .fromTo('#chapitre-4 .fusee-ensemble', { y: '100vh' }, { y: '0', duration: 30, ease: 'sine.in' })
    .from('#chapitre-4 .nuage4', { opacity: 0, scale: 0.5, duration: 30, ease: 'back.out' }, '-=10')
    .from('#chapitre-4 .nuage6', { opacity: 0, scale: 0.5, duration: 30, ease: 'back.out' }, '-=15')
    .from('#chapitre-4 .nuage3', { opacity: 0, scale: 0.5, duration: 30, ease: 'back.out' }, '-=15')
    .from('#chapitre-4 .nuage7', { opacity: 0, scale: 0.5, duration: 30, ease: 'back.out' }, '-=15')
    .from('#chapitre-4 .nuage5', { opacity: 0, scale: 0.5, duration: 30, ease: 'back.out' }, '-=15')
    .from('#chapitre-4 .nuage8', { opacity: 0, scale: 0.5, duration: 30, ease: 'back.out' }, '-=15')

    .from('#svg1', { scale: 0, duration: 0.3 })
    .from('#svg2', { scale: 0, duration: 0.3 })
    .from('.chp5-fond', { scale: 0, duration: 0.3 })
    .from('.kevin5', { scale: 0, duration: 0.3 })
    .from('.chap-5 .meteorite', { scale: 0, duration: 0.3 })
    .from('.chap-5 .spritesheet-volant', { scale: 0, duration: 0.3 })
    .fromTo('#chapitre-4 .nuage6', { scale: 1 }, { scale: 0.5, opacity: 0, duration: 40, ease: 'back.in' })
    .fromTo('#chapitre-4 .nuage7', { scale: 1 }, { scale: 0.5, opacity: 0, duration: 40, ease: 'back.in' }, '-=15')
    .fromTo('#chapitre-4 .nuage5', { scale: 1 }, { scale: 0.5, opacity: 0, duration: 40, ease: 'back.in' }, '-=15')
    .fromTo('#chapitre-4 .nuage4', { scale: 1 }, { scale: 0.5, opacity: 0, duration: 40, ease: 'back.in' }, '-=15')
    .fromTo('#chapitre-4 .nuage3', { scale: 1 }, { scale: 0.5, opacity: 0, duration: 40, ease: 'back.in' }, '-=15')
    .fromTo('#chapitre-4 .nuage8', { scale: 1 }, { scale: 0.5, opacity: 0, duration: 40, ease: 'back.in' }, '-=15')
    .from('.chp5-t1', { y: '1vh', opacity: 0, duration: 9, delay: 15 })
    .fromTo('.chp5-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 9 }, '+=14')
    .from('.chp5-t2', { y: '1vh', opacity: 0, duration: 9, delay: 5 })
    .fromTo('.chp5-t2', { y: '0' }, { y: '1vh', opacity: 0, duration: 9 }, '+=14')
    .from('.chp5-t3', { y: '1vh', opacity: 0, duration: 9, })
    .fromTo('.chap-5 .bombe', { y: '40vh' }, { y: '5vh', duration: 30, ease: 'back.out' }, '+=10')
    .fromTo('.chp5-t3', { y: '0' }, { y: '1vh', opacity: 0, duration: 9 }, '+=25')
    .fromTo('#chapitre-5', { opacity: '100%', }, { opacity: '0%', duration: 0.3, }, '-=0.5')
    .fromTo('.chap-5 .meteorite', { x: '-1vw' }, { x: '15vw', y: '5vh', rotate: -90, duration: 270, delay: 440 }, 0)
/*.fromTo('#chapitre-4', { opacity: '100%', }, { opacity: '0%', duration: 0.8 }, '-=0.5')*/

/*gsap.fromTo('#path1', {
    drawSVG: "0% 0%",
},
    {
        drawSVG: "0% 100%",
        duration: 8,
        ease: "rough({strength: 1, points: 20, template: circ.in, taper: none, randomize: true, clamp: true})",
        repeat: -1,

    })

gsap.fromTo('#path2', {
    drawSVG: "0% 0%"
},
    {
        drawSVG: "0% 100%",
        duration: 4,
        ease: "rough({strength: 1, points: 20, template: circ.in, taper: none, randomize: true, clamp: true})",
        repeat: -1
    })*/



/* ANIMATIONS CHAPITRE-6 */
gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '800% top',
        toggleActions: "restart complete reverse reset",
        trigger: "#chapitre-6",
    }
})
    .from('.chp6-t1', { y: '1vh', opacity: 0, duration: 7, delay: 1 })
    .fromTo('#chapitre-6 .fusee-ensemble', { y: '0' }, { y: '100vh', duration: 30, ease: 'sine.out' })
    .fromTo('#chapitre-6 .spritesheet-feu', { opacity: 100 }, { opacity: 0, duration: 30 })
    .from('#chapitre-6 .escalier', { rotate: -135, transformOrigin: "10% 10%", ease: 'sine.out', duration: 30 }, '+=5')
    .from('#chapitre-6 .kevin', { x: '-19vw', y: '-29vh', ease: 'sine.inOut', duration: 20 })
    .from('#chapitre-6 #bombe', { opacity: 0, duration: 10 }, '+=5')
    .fromTo('#chapitre-6 .kevin', { y: '0' }, { x: '-19vw', y: '-29vh', ease: 'sine.inOut', duration: 20 }, '+=10')
    .fromTo('.chp6-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 8 }, '-=10')
    .fromTo('#chapitre-6 .escalier', { rotate: 0 }, { rotate: -135, transformOrigin: "10% 10%", ease: 'sine.out', duration: 30 })
    .from('#chapitre-6 .spritesheet-feu', { opacity: 0, duration: 20 })
    .from('#chapitre-6 .fusee-ensemble', {
        motionPath: {
            path: [
                { y: '100vh' },
            ],
        }, duration: 30,
        ease: 'sine.in'
    })
/*.to('#bombe', { duration: 6, morphSVG: { shape: "#explosion", shapeIndex: 6, ease: 'sine.out' } }, '=+15')
.fromTo('#svg', { scale: 1 }, { scale: 20, duration: 25 }, '-=6')
.fromTo('.explosion2', { opacity: 0, scale: 1 }, { opacity: 100, transformOrigin: '50.5% 66%', scale: 21, duration: 25 }, '-=25')
.from('#chapitre-6 .stun', { opacity: 0, duration: 25 }, '-=20')*/



/* ANIMATIONS CHAPITRE-7 */
gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '400% top',
        toggleActions: "restart complete reverse reset",
        trigger: "#chapitre-7",
    }
})
    .fromTo('#chapitre-7 .stun', { opacity: '100%' }, { opacity: '0%', duration: 15 }, '+=1')
    .from('.chp7-t1', { y: '1vh', opacity: 0, duration: 7, delay: 1 })
    .fromTo('.chp7-t1', { y: '0' }, { y: '1vh', opacity: 0, duration: 8 }, '+=10')
    .from('.chp7-t2', { y: '1vh', opacity: 0, duration: 7, delay: 1 })
    .fromTo('.chp7-t2', { y: '0' }, { y: '1vh', opacity: 0, duration: 8 }, '+=10')
    .fromTo('.meteoriteP1', { x: '0', rotate: 0 }, { x: '-10vw', y: '-3vh', rotate: -25, ease: 'none', duration: 80 }, 0)
    .fromTo('.meteoriteP2', { x: '0', rotate: 0 }, { x: '10vw', y: '7vh', rotate: 15, ease: 'none', duration: 80 }, 0)
    .fromTo('.meteoriteP3', { x: '0', rotate: 0 }, { x: '-5vw', y: '10vw', rotate: 25, ease: 'none', duration: 80 }, 0)