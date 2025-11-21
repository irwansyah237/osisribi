// Carousel otomatis + swipe + klik dots

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dots button');

let index = 0;
let autoPlay;

function showSlide(i){
  slides.forEach((img, idx)=>{
    img.classList.toggle('active', idx === i);
  });
  dots.forEach((d, idx)=>{
    d.classList.toggle('active', idx === i);
  });
  index = i;
}

function nextSlide(){
  let i = index + 1;
  if(i >= slides.length) i = 0;
  showSlide(i);
}

function startAuto(){
  autoPlay = setInterval(nextSlide, 3500);
}

function stopAuto(){
  clearInterval(autoPlay);
}

// Dots clickable
dots.forEach((btn, i)=>{
  btn.addEventListener('click', ()=>{
    stopAuto();
    showSlide(i);
    startAuto();
  });
});

// Swipe gesture
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (e)=>{
  stopAuto();
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e)=>{
  endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', ()=>{
  const diff = endX - startX;
  if(diff > 50){
    // geser kiri → previous
    let i = index - 1;
    if(i < 0) i = slides.length - 1;
    showSlide(i);
  } else if(diff < -50){
    // geser kanan → next
    nextSlide();
  }
  startAuto();
});

// Mulai autoplay
showSlide(0);
startAuto();
