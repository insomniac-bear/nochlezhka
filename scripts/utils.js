const popupMenu = document.querySelector('.popup_type_menu');
const menuButton = document.querySelector('.header__menu-button');
const changeCityButton = popupMenu.querySelector('.popup__change-city-button');
const popupChangeCity = document.querySelector('.popup_type_change-city');
const backButton = popupChangeCity.querySelector('.popup__back-button');
const formChangeCity = popupChangeCity.querySelector('.popup__change-city-form');
const labelCity = formChangeCity.querySelectorAll('.popup__form-radio');
const cityName = popupMenu.querySelector('.popup__city-name');
const header = document.querySelector('.header');
const inputContainer = document.querySelector(".popup__buy-ticket-amount");
const buttonRemove = inputContainer.querySelector(".popup__decrease-ticket-button");
const buttonAdd = inputContainer.querySelector(".popup__increase-ticket-button");
let inputField = inputContainer.querySelector(".popup__ticket-amount-field");

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

const eventsCards = document.querySelectorAll(".events__card");
eventsCards.forEach(element => {
  element.querySelector(".events__like-button").addEventListener("click", event => {
   event.target.classList.toggle("events__like-button_active");
 })
})

menuButton.addEventListener('click', function () {
  popupMenu.classList.toggle('popup_opened');
  if (popupChangeCity.classList.contains('popup_opened')) {
    closePopup(popupChangeCity);
    closePopup(popupMenu);
    getCheckedRadio();
  }
  if (popupDonate.classList.contains('popup_opened')) {
    closePopup(popupDonate);
    closePopup(popupMenu);
  }
})

changeCityButton.addEventListener('click', function () {
  closePopup(popupMenu);
  openPopup(popupChangeCity);
})

backButton.addEventListener('click', function () {
  openPopup(popupMenu);
  closePopup(popupChangeCity);
  getCheckedRadio ();
})

function getCheckedRadio () {
  labelCity.forEach(function (item) {
    if (item.checked) {
      cityName.textContent = item.value;
    }
  });
}

function validate() {
  if (inputField.value >= 1) {
    inputField.classList.remove("popup__ticket-amount-field_error");
  } else {
    inputField.classList.add("popup__ticket-amount-field_error");
  }
}

inputField.onfocus = function () {
  validate();
};

inputField.onblur = function () {
  if (inputField.value < 0) {
    inputField.focus();
  }
  validate();
};

function increaseTicket() {
  inputField.value = ++inputField.value;
  validate();
}

function decreaseTicket() {
  if (inputField.value <= 1) {
    return;
  }
  validate();
  inputField.value = --inputField.value;
}

validate();
buttonAdd.addEventListener("click", increaseTicket);
buttonRemove.addEventListener("click", decreaseTicket);