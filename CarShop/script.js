document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const burger = document.getElementById("burger");
  const closeBtn = document.getElementById("closeBtn");

  burger.addEventListener("click", () => sidebar.classList.add("active"));
  closeBtn.addEventListener("click", () => sidebar.classList.remove("active"));

  displayProducts();
  addFilterListeners();
});

// 🔽 Список из 20 машин (с изображениями)
const products = [
  {
    id: 1,
    name: "BMW X5",
    brand: "BMW",
    power: 250,
    mileage: 30000,
    fuel: "бензин",
    drive: "полный",
    price: 55000,
    image: "img/cars/x5.png",
    description: "Мощный внедорожник премиум-класса."
  },
  {
    id: 2,
    name: "Audi Q7",
    brand: "Audi",
    power: 240,
    mileage: 40000,
    fuel: "дизель",
    drive: "полный",
    price: 60000,
    image: "img/cars/q7.png",
    description: "Комфортный семейный кроссовер."
  },
  {
    id: 3,
    name: "Mercedes GLE",
    brand: "Mercedes",
    power: 260,
    mileage: 25000,
    fuel: "бензин",
    drive: "полный",
    price: 65000,
    image: "img/cars/gle.png",
    description: "Элегантный и технологичный кроссовер."
  },
  {
    id: 4,
    name: "Toyota RAV4",
    brand: "Toyota",
    power: 160,
    mileage: 20000,
    fuel: "гибрид",
    drive: "передний",
    price: 40000,
    image: "img/cars/rav4.png",
    description: "Надёжный гибридный кроссовер для города и путешествий."
  },
  {
    id: 5,
    name: "Honda CR-V",
    brand: "Honda",
    power: 190,
    mileage: 35000,
    fuel: "бензин",
    drive: "передний",
    price: 42000,
    image: "img/cars/crv.png",
    description: "Практичный, экономичный, просторный кроссовер."
  },
  {
    id: 6,
    name: "Ford Explorer",
    brand: "Ford",
    power: 300,
    mileage: 28000,
    fuel: "бензин",
    drive: "полный",
    price: 57000,
    image: "img/cars/explorer.png",
    description: "Большой внедорожник с просторным салоном."
  },
  {
    id: 7,
    name: "Hyundai Tucson",
    brand: "Hyundai",
    power: 180,
    mileage: 27000,
    fuel: "бензин",
    drive: "передний",
    price: 38000,
    image: "img/cars/tucson.png",
    description: "Современный городской кроссовер."
  },
  {
    id: 8,
    name: "Kia Sportage",
    brand: "Kia",
    power: 175,
    mileage: 30000,
    fuel: "бензин",
    drive: "передний",
    price: 37000,
    image: "img/cars/sportage.png",
    description: "Надёжный и стильный кроссовер."
  },
  {
    id: 9,
    name: "Nissan Qashqai",
    brand: "Nissan",
    power: 150,
    mileage: 35000,
    fuel: "бензин",
    drive: "передний",
    price: 36000,
    image: "img/cars/qashqai.png",
    description: "Компактный кроссовер для городской езды."
  },
  {
    id: 10,
    name: "Volkswagen Tiguan",
    brand: "Volkswagen",
    power: 200,
    mileage: 28000,
    fuel: "дизель",
    drive: "полный",
    price: 44000,
    image: "img/cars/tiguan.png",
    description: "Немецкий комфорт и надёжность."
  },
  {
    id: 11,
    name: "Lexus RX",
    brand: "Lexus",
    power: 230,
    mileage: 22000,
    fuel: "гибрид",
    drive: "полный",
    price: 68000,
    image: "img/cars/rx.png",
    description: "Премиум-гибрид с высоким комфортом."
  },
  {
    id: 12,
    name: "Mazda CX-5",
    brand: "Mazda",
    power: 190,
    mileage: 26000,
    fuel: "бензин",
    drive: "полный",
    price: 41000,
    image: "img/cars/cx5.png",
    description: "Спортивный и экономичный кроссовер."
  },
  {
    id: 13,
    name: "Skoda Kodiaq",
    brand: "Skoda",
    power: 200,
    mileage: 31000,
    fuel: "дизель",
    drive: "полный",
    price: 43000,
    image: "img/cars/kodiaq.png",
    description: "Просторный SUV с чешским характером."
  },
  {
    id: 14,
    name: "Chevrolet Captiva",
    brand: "Chevrolet",
    power: 170,
    mileage: 37000,
    fuel: "бензин",
    drive: "передний",
    price: 34000,
    image: "img/cars/captiva.png",
    description: "Универсальный SUV для семьи."
  },
  {
    id: 15,
    name: "Renault Koleos",
    brand: "Renault",
    power: 180,
    mileage: 29000,
    fuel: "дизель",
    drive: "передний",
    price: 35000,
    image: "img/cars/koleos.png",
    description: "Надёжный французский внедорожник."
  },
  {
    id: 16,
    name: "Peugeot 2008",
    brand: "Peugeot",
    power: 160,
    mileage: 24000,
    fuel: "гибрид",
    drive: "передний",
    price: 39000,
    image: "img/cars/2008.png",
    description: "Дизайн, технологии и комфорт."
  },
  {
    id: 17,
    name: "Dodge Ram",
    brand: "Dodge",
    power: 225,
    mileage: 20000,
    fuel: "бензин",
    drive: "полный",
    price: 48000,
    image: "img/cars/ram.png",
    description: "Мощный, надежный, внедорожный, роскошный, технологичный."
  },
  {
    id: 18,
    name: "Volvo XC60",
    brand: "Volvo",
    power: 220,
    mileage: 18000,
    fuel: "гибрид",
    drive: "полный",
    price: 69000,
    image: "img/cars/xc60.png",
    description: "Шведская безопасность и лаконичный стиль."
  },
  {
    id: 19,
    name: "Subaru Forester",
    brand: "Subaru",
    power: 200,
    mileage: 23000,
    fuel: "бензин",
    drive: "полный",
    price: 45000,
    image: "img/cars/forester.png",
    description: "Настоящий кроссовер с системой AWD."
  },
  {
    id: 20,
    name: "UAZ Patriot",
    brand: "UAZ",
    power: 135,
    mileage: 10000,
    fuel: "бензин",
    drive: "полный",
    price: 22000,
    image: "img/cars/patriot.png",
    description: "Российский внедорожник для бездорожья."
  }
];


// 🔽 Отображение каталога
function displayProducts() {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" style="width:100%; border-radius:4px;">
      <h3>${p.name}</h3>
      <p><strong>Марка:</strong> ${p.brand}</p>
      <p><strong>Цена:</strong> €${p.price}</p>
      <button onclick="showProductDetails(${p.id})">Подробнее</button>
    `;
    catalog.appendChild(div);
  });
}

// 🔽 Модалка
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalAddBtn = document.getElementById("modalAddToCart");
let currentProductId = null;

function showProductDetails(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  modalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:4px;">
    <h3>${product.name}</h3>
    <p><strong>Марка:</strong> ${product.brand}</p>
    <p><strong>Цена:</strong> €${product.price}</p>
    <p><strong>Мощность:</strong> ${product.power} кВт</p>
    <p><strong>Пробег:</strong> ${product.mileage.toLocaleString()} км</p>
    <p><strong>Топливо:</strong> ${product.fuel}</p>
    <p><strong>Привод:</strong> ${product.drive}</p>
    <p><strong>Описание:</strong> ${product.description}</p>
  `;
  currentProductId = id;
  modal.style.display = "block";
}

modalClose.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

modalAddBtn.onclick = () => {
  addToCart(currentProductId);
  modal.style.display = "none";
};

// 🔽 Добавление в корзину
function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const product = products.find(p => p.id === id);
  if (!product) return;
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Товар добавлен в корзину!");
}

// 🔽 Фильтрация
function addFilterListeners() {
  const fields = ["brandFilter", "nameFilter", "minPrice", "maxPrice", "powerFilter", "mileageFilter", "fuelFilter", "driveFilter", "sortOption"];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", filterAndSortProducts);
  });
}

function filterAndSortProducts() {
  const brand = document.getElementById("brandFilter").value;
  const name = document.getElementById("nameFilter").value.toLowerCase();
  const minPrice = +document.getElementById("minPrice").value || 0;
  const maxPrice = +document.getElementById("maxPrice").value || Infinity;
  const power = +document.getElementById("powerFilter").value || 0;
  const mileage = +document.getElementById("mileageFilter").value || Infinity;
  const fuel = document.getElementById("fuelFilter").value;
  const drive = document.getElementById("driveFilter").value;
  const sort = document.getElementById("sortOption").value;

  let filtered = products.filter(p =>
    (brand === "all" || p.brand === brand) &&
    p.name.toLowerCase().includes(name) &&
    p.price >= minPrice && p.price <= maxPrice &&
    p.power >= power &&
    p.mileage <= mileage &&
    (fuel === "all" || p.fuel === fuel) &&
    (drive === "all" || p.drive === drive)
  );

  if (sort === "asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "desc") filtered.sort((a, b) => b.price - a.price);

  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" style="width:100%; border-radius:4px;">
      <h3>${p.name}</h3>
      <p><strong>Марка:</strong> ${p.brand}</p>
      <p><strong>Цена:</strong> €${p.price}</p>
      <button onclick="showProductDetails(${p.id})">Подробнее</button>
    `;
    catalog.appendChild(div);
  });

nextButton.addEventListener('click', () => {
  if (currentIndex < reviewItems.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentIndex * (reviewItems[0].offsetWidth + 20); // 20 - отступ между элементами
  reviewCarousel.style.transform = `translateX(${offset}px)`;
  
  // Управление кнопками
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === reviewItems.length - 1;
}

// Инициализация кнопок
updateCarousel();
}
$(document).ready(function () {
  $('.review-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  });
});

$('.review-carousel').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


