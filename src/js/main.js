// ---------- cursor ----------

const cursor = document.querySelector('#cursor');
const cursorAura = document.querySelector('#cursor-aura');
const bodyTwo = document.querySelector('body');

document.addEventListener('mousemove', (e) => {
  cursor.style.cssText = cursorAura.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

const a = document.querySelectorAll('a');
const btn = document.querySelectorAll('button');
const prItem = document.querySelectorAll('.portfolio__item');
const input = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener('mouseover', () => {
    cursor.classList.add('active-cursor')
    cursorAura.classList.add('active-cursor')
  })
  a[i].addEventListener('mouseout', () => {
    cursor.classList.remove('active-cursor')
    cursorAura.classList.remove('active-cursor')
  })
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('mouseover', () => {
    cursor.classList.add('active-cursor')
    cursorAura.classList.add('active-cursor')
  })
  btn[i].addEventListener('mouseout', () => {
    cursor.classList.remove('active-cursor')
    cursorAura.classList.remove('active-cursor')
  })
};

for (let i = 0; i < prItem.length; i++) {
  prItem[i].addEventListener('mouseover', () => {
    cursor.classList.add('active-cursor')
    cursorAura.classList.add('active-cursor')
  })
  prItem[i].addEventListener('mouseout', () => {
    cursor.classList.remove('active-cursor')
    cursorAura.classList.remove('active-cursor')
  })
};

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('mouseover', () => {
    cursor.classList.add('active-cursor')
    cursorAura.classList.add('active-cursor')
  })
  input[i].addEventListener('mouseout', () => {
    cursor.classList.remove('active-cursor')
    cursorAura.classList.remove('active-cursor')
  })
};

textarea.addEventListener('mouseover', () => {
  cursor.classList.add('active-cursor')
  cursorAura.classList.add('active-cursor')
})
textarea.addEventListener('mouseout', () => {
  cursor.classList.remove('active-cursor')
  cursorAura.classList.remove('active-cursor')
})

// ---------- /cursor ----------

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

navBtn.addEventListener('mouseover', () => {
  cursor.classList.add('active-cursor')
  cursorAura.classList.add('active-cursor')
})
navBtn.addEventListener('mouseout', () => {
  cursor.classList.remove('active-cursor')
  cursorAura.classList.remove('active-cursor')
})

// ---------- /nav ----------

// ---------- scroll ----------

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
});

// ---------- /scroll ----------

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
