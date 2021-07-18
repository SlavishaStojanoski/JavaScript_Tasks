// NEW
// Selecting, Creating, and Deleting Elements
//Selecting
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// //querySeceltor form a NodeList and this is static, when delete some section in JS that section wasn't deleted(it's there)
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// //this fotm htmlCollection and itself is dinamicaly., when delete some button htmlCollection do changes
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// //  .insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improve functionality and analytics';
// message.innerHTML =
//   'We use cookies for improve functionality and analytics <button class="btn btn-close-cokie">Got it!</Button>';
// // header.prepend(message); // add at first child of element header
// header.append(message); // add at last child of element header
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// //Delete Element
// document
//   .querySelector('.btn-close-cokie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

//---------------------------------------------------END---------------------------------------------------------

//NEW
// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = ' Beautiful logo';

// // Non-Standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// const navLink = document.querySelector('.nav__link--btn');
// console.log(navLink.href);
// console.log(navLink.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

//Don't use
// logo.className = 'Slavisha';

//---------------------------------------------------END---------------------------------------------------------

// NEW
// Types of Events and Events Handlers

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('AddEventListener: Great! You are reading heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// // h1.onmouseenter = function (e) {
// //   alert('AddEventListener: Great! You are reading heading :D');
// // };

//---------------------------------------------------END---------------------------------------------------------

// NEW
// Event Propagation in Practice
// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   //   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);
// });

//---------------------------------------------------END---------------------------------------------------------

//NEW
// Event Delegation Implementing Page Navigation
//Smoothy scroll on navigation bar (page Navigation)
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//---------------------------------------------------END---------------------------------------------------------

//NEW
//DOM Traversing
// const h1 = document.querySelector('h1');

// //Going downwards : child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //GOing Upwards : parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-primary)';
// h1.closest('h1').style.background = 'var(--gradient-secondary)';

// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//---------------------------------------------------END---------------------------------------------------------

//NEW
