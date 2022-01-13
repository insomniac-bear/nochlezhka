const sliderParkButton = document.querySelector('.hedonismfest__button_slider_park');
const sliderLadyButton = document.querySelector('.hedonismfest__button_slider_lady');
const sliderDrinkButton = document.querySelector('.hedonismfest__button_slider_drink');
const sliderExhibitionButton = document.querySelector('.hedonismfest__button_slider_exhibition');
const sliderTeamButton = document.querySelector('.hedonismfest__button_slider_team');

const sliderButtons = document.querySelectorAll('.hedonismfest__button');

const hedonismfestImage = document.querySelector('.hedonismfest__image');

function setImage(imageLinkValue, altValue){
  hedonismfestImage.setAttribute('src', imageLinkValue);
  hedonismfestImage.setAttribute('alt', altValue);
}

function defaultButtonColor(buttons) {
  buttons.forEach(function(item){
    removeActiveColorButton(item);
    addNonActiveColorButton(item);
  });
}

function addActiveColorButton(button) {
  button.classList.add('hedonismfest__button_status_active');
}

function removeActiveColorButton(button) {
  button.classList.remove('hedonismfest__button_status_active');
}

function addNonActiveColorButton(button) {
  button.classList.add('hedonismfest__button_status_non-active');
}

function setButtonColor(button){
  defaultButtonColor(sliderButtons);
  addActiveColorButton(button);
}

sliderParkButton.addEventListener('click', function(event){
  setImage("./images/fest-park.svg", "парк");
  setButtonColor(event.target);
});

sliderLadyButton.addEventListener('click', function(event){
  setImage("./images/fest-lady.svg", "девушка");
  setButtonColor(event.target);
});

sliderDrinkButton.addEventListener('click', function(event){
  setImage("./images/fest-drink.svg", "напитки");
  setButtonColor(event.target);
});

sliderExhibitionButton.addEventListener('click', function(event){
  setImage("./images/fest-exhibition.svg", "выставка");
  setButtonColor(event.target);
});

sliderTeamButton.addEventListener('click', function(event){
  setImage("./images/fest-team.svg", "компания");
  setButtonColor(event.target);
});

function initPage(button){
  addActiveColorButton(button);
}

initPage(sliderLadyButton);

const popupMenu = document.querySelector('.popup_type_menu')
const menuButton = document.querySelector('.header__menu-button')
const changeCityButton = popupMenu.querySelector('.popup__change-city-button')
const popupChangeCity = document.querySelector('.popup_type_change-city')
const backButton = popupChangeCity.querySelector('.popup__back-button')
const formChangeCity = popupChangeCity.querySelector('.popup__change-city-form')
const labelCity = formChangeCity.querySelectorAll('.popup__form-radio')
const cityName = popupMenu.querySelector('.popup__city-name')
const openDonateButtonInPopup = popupMenu.querySelector('.popup__open-donate-button')
const openDonateButtonInHeader = document.querySelector('.header__donate-button')
const popupDonate = document.querySelector('.popup_type_donate')
const popupBuyTicket = document.querySelector('.popup_type_buy-ticket')
const closeDonatePopupButton = popupDonate.querySelector('.popup__close-button')
const closePurchasePopupButton = popupBuyTicket.querySelector('.popup__close-button')
const sumOfMoneyButton = popupDonate.querySelectorAll('.popup__sum-of-money')
const inputDonationSum = popupDonate.querySelector('.popup__sum-of-money-input')
const inputDonatorEmail = popupDonate.querySelector('.popup__email-input')
const inputBuyerEmail = popupBuyTicket.querySelector('.popup__email-input')
const header = document.querySelector('.header')

function openPopup (popup) {
  popup.classList.add('popup_opened')
}

function closePopup (popup) {
  popup.classList.remove('popup_opened')
}

const eventsCards = document.querySelectorAll(".events__card");
eventsCards.forEach(element => {
  element.querySelector(".events__like-button").addEventListener("click", event => {
   event.target.classList.toggle("events__like-button_active");
 })
})

menuButton.addEventListener('click', function () {
  popupMenu.classList.toggle('popup_opened')
  if (popupChangeCity.classList.contains('popup_opened')) {
    closePopup(popupChangeCity);
    closePopup(popupMenu);
    getCheckedRadio()
  }
  if (popupDonate.classList.contains('popup_opened')) {
    closePopup(popupDonate)
    closePopup(popupMenu)
  }
})

changeCityButton.addEventListener('click', function () {
  closePopup(popupMenu);
  openPopup(popupChangeCity)
})

backButton.addEventListener('click', function () {
  openPopup(popupMenu);
  closePopup(popupChangeCity)
  getCheckedRadio ()
})

function getCheckedRadio () {
  labelCity.forEach(function (item) {
    if (item.checked) {
      cityName.textContent = item.value;
    }
  });
}

openDonateButtonInPopup.addEventListener('click', function () {
  closePopup(popupMenu);
  openPopup(popupDonate);
});

openDonateButtonInHeader.addEventListener('click', function () {
  openPopup(popupDonate);
})

closeDonatePopupButton.addEventListener('click', function () {
  closePopup(popupDonate);
});

closePurchasePopupButton.addEventListener('click', function () {
  closePopup(popupBuyTicket);
});

sumOfMoneyButton.forEach(function (item) {
  item.addEventListener('click', function () {
    sumOfMoneyButton.forEach(function (item) {
      item.classList.remove('popup__sum-of-money_active')
    })
    item.classList.add('popup__sum-of-money_active')
  })
});

inputDonationSum.addEventListener('click', function () {
  sumOfMoneyButton.forEach(function (item) {
    item.classList.remove('popup__sum-of-money_active');
  });
});

let prevScroll = window.scrollY;
let curScroll;

window.addEventListener('scroll', () => {
  curScroll = window.scrollY;
  let headerHidden = header.classList.contains('header_hidden');

  if (curScroll > prevScroll && !headerHidden) {
    header.classList.add('header_hidden');
  } else if (curScroll < prevScroll && headerHidden) {
    header.classList.remove('header_hidden');
  }

  prevScroll = curScroll;
});

const donateFormElement = document.querySelector('.popup__donate-form');

donateFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendDonationData();
  closePopup(popupDonate);
  donateFormElement.reset();
});

const buyTicketForm = document.querySelector('.popup__buy-ticket-form');

buyTicketForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendPurchaseData();
  closePopup(popupBuyTicket);
  buyTicketForm.reset();
});

const sendDonationData = () => {
  const email = inputDonatorEmail.value;
  const paymentMethod = popupDonate.querySelector('input[type=radio]:checked').value;
  let donationAmount;

  if (inputDonationSum.value){
    donationAmount = inputDonationSum.value;
  } else {
    donationAmount = popupDonate.querySelector('.popup__sum-of-money_active').value;
  }

  console.log(`Сумма пожертвования: ${donationAmount}, Email: ${email}, Способ оплаты: ${paymentMethod}`);
};

const sendPurchaseData = () => {
  const email = inputBuyerEmail.value;
  const paymentMethod = popupBuyTicket.querySelector('input[type=radio]:checked').value;
  // add data about amount of tickets
  const amount = 1;

  console.log(`Кол-во билетов: ${amount}, Email: ${email}, Способ оплаты: ${paymentMethod}`);
};
