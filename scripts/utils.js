const popupMenu = document.querySelector('.popup_type_menu');
const menuButton = document.querySelector('.header__menu-button');
const changeCityButton = popupMenu.querySelector('.popup__change-city-button');
const popupChangeCity = document.querySelector('.popup_type_change-city');
const backButton = popupChangeCity.querySelector('.popup__back-button');
const formChangeCity = popupChangeCity.querySelector('.popup__change-city-form');
const labelCity = formChangeCity.querySelectorAll('.popup__form-radio');
const cityName = popupMenu.querySelector('.popup__city-name');
const header = document.querySelector('.header');

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