'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Variables to make scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Tabbed Components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//Navigation bar
const nav = document.querySelector('.nav');

//NEW MODAL
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//NEW Scroll down on read more btn
btnScrollTo.addEventListener('click', function (e) {
  scrolling(e); // function is in scrool.js file
});

// NEW Smoothy scroll on navigation bar (page Navigation)
// // 1.Add Event listener to common parent element
// // 2.Determine what element originate the element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  navBarScroll(e); // function is in scrool.js file
});

//NEW Tabbed Components on section--2
tabsContainer.addEventListener('click', function (e) {
  BuildingTabbedComponents(e);
});

//NEW Menu fade animation
nav.addEventListener(
  'mouseover',
  handleHover.bind(0.5) //Function handleHover is in menufadeanim.js file
);
nav.addEventListener(
  'mouseout',
  handleHover.bind(1) //Function handleHover is in menufadeanim.js file
);

//NEW Implementing a sticky nvigation; the scroll event
// All Code is still in javaScript/stickyNav.js file

//NEW REVEALING elemnts in scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionsObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionsObserver.observe(section);
  section.classList.add('section--hidden');
});

//NEW Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach((img) => imgObserver.observe(img));

//Sticky navigation: intersection Observer API

const obsCallBack = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(section1);
