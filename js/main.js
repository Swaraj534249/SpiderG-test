


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav');

navToggle.addEventListener('click', function (){
  links.classList.toggle('show-links');
});

// const cursor = document.querySelector('.e-cursor');
    
//         document.addEventListener('mousemove', (e) => {
//       cursor.setAttribute('style', 'top: ' +e.pageY+ 'px; left: ' +e.pageX+ 'px;');
//       // cursor.style.left = e.pageX+ 'px';
//       // cursor.style.top = e.pageY+ 'px';
//       // let x = e.pageX;
//       // let y = e.pageY;

//       // cursor.style.top = y + 'px';
//       // cursor.style.left = x + 'px';
//     });

    // const cursor = document.querySelector('.cursor');
    
    //     document.addEventListener('mousemove', e => {
    //   cursor.setAttribute('style', 'top: ' +e.pageY+ 'px; left: ' +e.pageX+ 'px;');
    //   // cursor.style.left = e.pageX+ 'px';
    //   // cursor.style.top = e.pageY+ 'px';
    // });

    // AOS.init();

$(document).ready(function () {
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1.15,
        nav: false,
      },
    },
  });
});

gsap.to('.marquee1',{
      scrollTrigger: {
        trigger: '.marquee1',
        start: 'top bottom',
        end: 'top top',
        scrub: 2
        // markers: true
      },
      x: -900,
      ease: 'none',
      duration: 3
    });
    gsap.to('.marquee2',{
      scrollTrigger: {
        trigger: '.marquee2',
        start: 'top bottom',
        end: 'top top',
        scrub: 2
        // pin:true,
        // markers: true
      },
      x: 900,
      ease: 'none',
      duration: 3
    });

    // gsap.to('.nav-menu',{
    //   scrollTrigger: {
    //     trigger: '.nav-menu',
    //     start: 'bottom 100px',
    //     end: 'top 100px',

    //     // scrub: 2
    //     markers: true
    //   },
    //   color: 'black',
    //   fill: 'black'
    // });

// marquee, pageIndex__introduction__marquees




