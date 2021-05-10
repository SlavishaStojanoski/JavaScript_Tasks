'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const btnsopenModal = document.querySelectorAll('.show-modal');

// Functions for open and close modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// open modal
for (let i = 0; i < btnsopenModal.length; i++) {
  btnsopenModal[i].addEventListener('click', openModal);
}

//close modal
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Escape from modal with press on escape button
document.addEventListener('keyup', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
