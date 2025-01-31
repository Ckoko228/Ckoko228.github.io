document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carouselContainer');
    const dotsContainer = document.getElementById('carouselDots');
    const slides = document.querySelectorAll('.carousel__slide');
    const dots = document.querySelectorAll('.carousel__dot');
    const totalSlides = slides.length;
    let currentIndex = 0;
    const slideInterval = 4000; // Интервал переключения в миллисекундах
  
    // Обновляем активное состояние точек
    const updateDots = () => {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };
  
    // Обновляем позицию карусели
    const updateCarousel = () => {
      carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    };
  
    // Переключаемся на следующий слайд
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    };
  
    // Переключаемся на определенный слайд (при клике на точку)
    dots.forEach((dot) => {
      dot.addEventListener('click', (event) => {
        currentIndex = parseInt(event.target.dataset.slide, 10);
        updateCarousel();
      });
    });
  
    // Запускаем автоматическое переключение
    setInterval(nextSlide, slideInterval);
  });
  