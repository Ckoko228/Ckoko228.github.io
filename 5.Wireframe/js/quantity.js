document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product__card');
  
    productCards.forEach(card => {
      const quantityNumber = card.querySelector('.quantity__number');
      const quantityBar = card.querySelector('.quantity__bar');
      
      // Функция для генерации случайного числа от 1 до 100
      const getRandomQuantity = () => {
        return Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
      };
  
      // Функция для обновления количества
      const updateQuantity = () => {
        const quantity = getRandomQuantity();
        quantityNumber.textContent = quantity;
  
        // Обновление ширины прогресс-бара
        let fillBar = quantityBar.querySelector('.quantity__fill');
        if (!fillBar) {
          fillBar = document.createElement('div');
          fillBar.classList.add('quantity__fill');
          quantityBar.appendChild(fillBar);
        }
  
        fillBar.style.width = `${quantity}%`;
      };
  
      // Инициализация прогресс-бара
      const initializeProgressBar = () => {
        updateQuantity();
      };
  
      initializeProgressBar();
  
      // Обновление количества каждые 5 секунд
      setInterval(updateQuantity, 3000);
    });
  });
  