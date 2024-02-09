/* eslint-disable no-console */
/* eslint-disable no-undef */
export default function slideGallery() {
  const counter = document.querySelector('.counter');
  const arrows = document.querySelectorAll('.arrow');
  const images = document.querySelectorAll('.carousel-img');
  const carousel = document.querySelector('.carousel');

  const dotsArray = [];

  images.forEach(() => {
    const dot = document.createElement('span');
    counter.appendChild(dot);
    dotsArray.push(dot);
  });

  function setCurrentImage(index) {
    dotsArray.forEach((dot) => {
      if (dotsArray.indexOf(dot) === index) {
        dot.classList.add('filled');
      } else if (dot.classList.contains('filled')) {
        dot.classList.remove('filled');
      }
    });
  }

  dotsArray[0].classList.add('filled');

  arrows[0].addEventListener('click', () => {
    // console.log(carousel.scrollLeft);

    carousel.scrollBy({
      top: 0,
      left: -10,
      behavior: 'smooth',
    });
  });

  arrows[1].addEventListener('click', () => {
    // console.log(carousel.scrollLeft);

    carousel.scrollBy({
      top: 0,
      left: 10,
      behavior: 'smooth',
    });
  });

  carousel.addEventListener('scroll', () => {
    const scrollPosition = Math.floor(
      (carousel.scrollLeft * images.length) / carousel.scrollWidth
    );
    console.log(scrollPosition);
    setCurrentImage(scrollPosition);
  });
}
