// ---------- aos ----------

AOS.init({
  once: true,
});

// ---------- /aos ----------

// ---------- mapbox ----------

// mapbox://styles/mapbox/navigation-day-v1
// mapbox://styles/mapbox/navigation-night-v1

mapboxgl.accessToken = 'pk.eyJ1IjoidmlrYXJjaHVrIiwiYSI6ImNsZDNkenFxbDAwdGszb21zcnFuYWl4ankifQ.tHZBi_-JEOwXC9XyNWfYYg';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [25.588710697470276,49.54994888139109],
    zoom: 12,
});

// ---------- /mapbox ----------

//---------- form ----------

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}

form.addEventListener("submit", handleSubmit)

// ---------- /form ----------

// ---------- nav ----------

const nav = document.querySelector('.nav__body');
const navBtn = document.querySelector('.nav__icon');
const body = document.body;
const mapNav = document.querySelector('#map');

if (nav && navBtn) {
  navBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    navBtn.classList.toggle('active');
    body.classList.toggle('lock');
    mapNav.classList.toggle('active');
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      navBtn.classList.remove('active');
      body.classList.remove('lock');
      mapNav.classList.remove('active');
    })
  });
};

// ---------- /nav ----------

// ---------- show more ----------

// const btnPortfolio = document.querySelector('.portfolio__btn');
// const cardsPortfolio = document.querySelectorAll('.portfolio__item');

// btnPortfolio.addEventListener('click', function() {
//   for(let card of cardsPortfolio) {
//     card.style.display = 'flex'
//   }
//   btnPortfolio.style.display = 'none';
// });

// ---------- /show more ----------

// ---------- cursor ----------

class BigCircle {
  constructor() {
    this.root = document.body
    this.cursor = document.querySelector(".curzr")
    this.circle = document.querySelector(".curzr .circle")
    this.dot = document.querySelector(".curzr .dot")

    this.pointerX = 0
    this.pointerY = 0
    this.cursorSize = 82

    this.circleStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      top: `${ this.cursorSize / -2 }px`,
      left: `${ this.cursorSize / -2 }px`,
      zIndex: '2147483647',
      width: `${ this.cursorSize }px`,
      height: `${ this.cursorSize }px`,
      backgroundColor: '#fff0',
      borderRadius: '50%',
      transition: '500ms, transform 93ms',
      userSelect: 'none',
      pointerEvents: 'none'
    }

    this.dotStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: '2147483647',
      width: '6px',
      height: '6px',
      backgroundColor: '#fffd',
      borderRadius: '50%',
      userSelect: 'none',
      pointerEvents: 'none',
      transition: '250ms, transform 69.75ms'
    }

    if (CSS.supports("backdrop-filter", "invert(1) grayscale(1)")) {
      this.circleStyle.backdropFilter = 'invert(1) grayscale(1)'
      this.circleStyle.backgroundColor = '#fff0'
      this.dotStyle.backdropFilter = 'invert(1) grayscale(1)'
      this.dotStyle.backgroundColor = '#fff0'
    } else {
      this.circleStyle.backgroundColor = '#000'
      this.circleStyle.opacity = '0.75'
      this.dotStyle.backgroundColor = '#fff'
      this.dotStyle.opacity = '0.75'
    }

    this.init(this.circle, this.circleStyle)
    this.init(this.dot, this.dotStyle)
  }

  init(el, style) {
    Object.assign(el.style, style)
    this.cursor.removeAttribute("hidden")
    
    document.body.style.cursor = 'none'
    document.body.querySelectorAll("button, label, input, textarea, select, a").forEach((el) => {
      el.style.cursor = 'inherit'
    })
  }

  move(event) {
    this.pointerX = event.pageX
    this.pointerY = event.pageY + this.root.getBoundingClientRect().y
  
    this.circle.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
    this.dot.style.transform = `translate3d(calc(-50% + ${this.pointerX}px), calc(-50% + ${this.pointerY}px), 0)`

    if (event.target.localName === 'button' || 
        event.target.localName === 'a' || 
        event.target.onclick !== null ||
        event.target.className.includes('curzr-hover') ||
        event.target.className.includes('nav__icon') ||
        event.target.localName === 'span'){
      this.hover()
    }
  }

  hover() {
    this.circle.style.transform += ` scale(1.5)`
  }

  click() {
    this.circle.style.transform += ` scale(0.75)`
    setTimeout(() => {
      this.circle.style.transform = this.circle.style.transform.replace(` scale(0.75)`, '')
    }, 35)
  }

  remove() {
    this.circle.remove()
    this.dot.remove()
  }
}

if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
  cursor.remove();
}

(() => {
  const cursor = new BigCircle()
  if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.onmousemove = function (event) {
      cursor.move(event)
    }
    document.onclick = function () {
      cursor.click()
    }
  } else {
    cursor.remove()
  }
  
})()

// ---------- /cursor ----------

// ---------- scroll ----------

if (!document.querySelector("html").classList.contains('w-editor')){
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  // Get scroll value. This is just for testing purposes. Delete this if you're not using the scroll value for anything.
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  // Grab all elements that have a "data-target" attribute
  const scrollButtons = document.querySelectorAll('[data-target]');

  // For each element, listen to a "click" event
  scrollButtons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();

      // get the DOM element by the ID (data-target value)
      var target = button.dataset.target,
          $el = document.getElementById(target.replace('#', ''));

      // Use lenis.scrollTo() to scroll the page to the right element
      lenis.scrollTo($el, {
        offset: 0, 
        immediate: false,
        duration: 3,
        easing: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2), // https://easings.net
      });
    });
  });

  requestAnimationFrame(raf)
}

// ---------- /scroll ----------