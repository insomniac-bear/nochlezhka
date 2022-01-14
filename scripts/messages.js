const openDonateButtonInPopup = popupMenu.querySelector('.popup__open-donate-button');
const openDonateButtonInHeader = document.querySelector('.header__donate-button');
const popupDonate = document.querySelector('.popup_type_donate');
const popupBuyTicket = document.querySelector('.popup_type_buy-ticket');
const closeDonatePopupButton = popupDonate.querySelector('.popup__close-button');
const closePurchasePopupButton = popupBuyTicket.querySelector('.popup__close-button');
const sumOfMoneyButton = popupDonate.querySelectorAll('.popup__sum-of-money');
const inputDonationSum = popupDonate.querySelector('.popup__sum-of-money-input');
const inputDonatorEmail = popupDonate.querySelector('.popup__email-input');
const inputBuyerEmail = popupBuyTicket.querySelector('.popup__email-input');

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
      item.classList.remove('popup__sum-of-money_active');
    })
    item.classList.add('popup__sum-of-money_active');
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
  const amount = 1;

  console.log(`Кол-во билетов: ${amount}, Email: ${email}, Способ оплаты: ${paymentMethod}`);
};
