// Функция для получения текущей даты и времени в формате YYYY-MM-DD HH:mm:ss
function getCurrentTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Логирование нажатий на элементы
document.querySelector(".action-button").addEventListener("click", function () {
  console.log(`[${getCurrentTimestamp()}] Кнопка 'Search' была нажата`);
  validateInputs(); // Вызов функции для валидации
});

document.querySelectorAll(".photo-item a").forEach(function (photoLink) {
  photoLink.addEventListener("click", function () {
    console.log(`[${getCurrentTimestamp()}] Клик по фотографии: ${this.href}`);
    sendLogToServer(`Клик по фотографии: ${this.href}`); // Отправка лога на сервер
  });
});

document.querySelectorAll(".navbar a").forEach(function (navItem) {
  navItem.addEventListener("click", function () {
    console.log(
      `[${getCurrentTimestamp()}] Навигация к разделу: ${this.textContent}`
    );
    sendLogToServer(`Навигация к разделу: ${this.textContent}`); // Отправка лога на сервер
  });
});

// Функция для валидации формы
function validateInputs() {
  const arrivalDateInput = document.getElementById("arrival-date");
  const departureDateInput = document.getElementById("departure-date");
  const errorMessage = document.getElementById("error-message");

  const arrivalDate = new Date(arrivalDateInput.value);
  const departureDate = new Date(departureDateInput.value);

  if (!arrivalDateInput.value || !departureDateInput.value) {
    errorMessage.textContent =
      "Please select both arrival and departure dates.";
    console.error(
      `[${getCurrentTimestamp()}] Ошибка валидации: не выбраны даты прибытия или отъезда.`
    );
    sendLogToServer("Ошибка валидации: не выбраны даты прибытия или отъезда."); // Логирование ошибки на сервер
    return;
  }

  if (arrivalDate > departureDate) {
    errorMessage.textContent =
      "Error: Arrival date cannot be later than departure date.";
    console.error(
      `[${getCurrentTimestamp()}] Ошибка валидации: дата прибытия позже даты отъезда.`
    );
    sendLogToServer("Ошибка валидации: дата прибытия позже даты отъезда.");
    return;
  }

  errorMessage.textContent = "";
  alert("Search initiated!");
  console.log(
    `[${getCurrentTimestamp()}] Форма успешно отправлена с датами: ${arrivalDate.toDateString()} - ${departureDate.toDateString()}`
  );
  sendLogToServer(
    `Форма отправлена с датами: ${arrivalDate.toDateString()} - ${departureDate.toDateString()}`
  ); // Логирование на сервер
}

// Функция для отправки логов на сервер
function sendLogToServer(logMessage) {
  fetch("/api/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      log: logMessage,
      timestamp: getCurrentTimestamp(),
    }),
  })
    .then((response) => response.json())
    .then((data) =>
      console.log(
        `[${getCurrentTimestamp()}] Лог успешно отправлен на сервер:`,
        data
      )
    )
    .catch((error) =>
      console.error(
        `[${getCurrentTimestamp()}] Ошибка отправки лога на сервер:`,
        error
      )
    );
}

// Логирование открытия и закрытия выпадающих меню
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isOpen = dropdown.style.display === "block";
  console.log(
    `[${getCurrentTimestamp()}] ${
      isOpen ? "Закрытие" : "Открытие"
    } меню: ${dropdownId}`
  );
  sendLogToServer(`${isOpen ? "Закрытие" : "Открытие"} меню: ${dropdownId}`); // Логирование действия
  dropdown.style.display = isOpen ? "none" : "block";
}

// Логирование прокрутки в навигации
let currentTextIndex = 0; // Убедитесь, что переменная объявлена только один раз
const navTexts = document.querySelectorAll(".nav-text");

document.getElementById("scrollLeft").addEventListener("click", function () {
  const newIndex = (currentTextIndex - 1 + navTexts.length) % navTexts.length;
  console.log(
    `[${getCurrentTimestamp()}] Прокрутка влево. Текущий текст: ${
      navTexts[newIndex].textContent
    }`
  );
  sendLogToServer(
    `Прокрутка влево. Текущий текст: ${navTexts[newIndex].textContent}`
  );
  showText(newIndex);
});

document.getElementById("scrollRight").addEventListener("click", function () {
  const newIndex = (currentTextIndex + 1) % navTexts.length;
  console.log(
    `[${getCurrentTimestamp()}] Прокрутка вправо. Текущий текст: ${
      navTexts[newIndex].textContent
    }`
  );
  sendLogToServer(
    `Прокрутка вправо. Текущий текст: ${navTexts[newIndex].textContent}`
  );
  showText(newIndex);
});

// Функция для показа текста (при прокрутке)
function showText(index) {
  navTexts[currentTextIndex].style.display = "none";
  navTexts[index].style.display = "block";
  currentTextIndex = index;
}

// Логирование при загрузке страницы
window.onload = function () {
  console.log(`[${getCurrentTimestamp()}] Страница загружена: BUTIK DI MOSCA`);
};
