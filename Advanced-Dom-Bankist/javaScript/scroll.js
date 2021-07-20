function scrolling(e) {
  const s1cords = section1.getBoundingClientRect();
  // console.log(s1cords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log('HEigh/width viewport', document.documentElement.clientHeight);
  // console.log('HEigh/width viewport', document.documentElement.clientWidth);

  //Scrolling
  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  //Scroling Animation
  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
}

//Regular function of scroling btn

//   btnScrollTo.addEventListener('click', function (e) {
//   const s1cords = section1.getBoundingClientRect();
//   console.log(s1cords);
//   console.log(e.target.getBoundingClientRect());
//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
//   console.log('HEigh/width viewport', document.documentElement.clientHeight);
//   console.log('HEigh/width viewport', document.documentElement.clientWidth);

//   //Scrolling
//   // window.scrollTo(
//   //   s1cords.left + window.pageXOffset,
//   //   s1cords.top + window.pageYOffset
//   // );

//   //Scroling Animation
//   // window.scrollTo({
//   //   left: s1cords.left + window.pageXOffset,
//   //   top: s1cords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//NEW
//Scroling navbar menu
// // 1.Add Event listener to common parent element
// // 2.Determine what element originate the element
const navBarScroll = (e) => {
  e.preventDefault();
  // console.log(e.target);

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
};
