document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalButton = document.querySelector(".signup__form button");
    const closeModalButton = document.getElementById("closeModal");
    const modalForm = document.getElementById("modalForm");

    // Открыть модальное окно
    openModalButton.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });

    // Закрыть модальное окно
    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Обработка отправки формы
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      alert(`Спасибо, ${name}! Мы свяжемся с вами по телефону: ${phone}`);
      modal.style.display = "none";
    });
  });
