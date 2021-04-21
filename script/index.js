//import '../pages/index.css';

import FormValidator from './Valid.js';

import Card from './Card.js';

import Section from './Section.js'

import PopupWithForm from './PopupWithForm.js'

import PopupWithImages from './PopupWithImages.js'

import UserInfo from './UserInfo.js'


const profileButtonNode = document.querySelector('.profile__name-edit');
const profileUserNameNode = document.querySelector('.profile__user-name');
const profileHobbyNode = document.querySelector('.profile__hobby');
const buttonImageAdd = document.querySelector('.profile__image-edit');

const profilePopup = document.querySelector('.popup-profile');
const popupFormNodeProfil = profilePopup.querySelector('.form__edit_profil');
const popupInputNameNode = profilePopup.querySelector('.popup__input_type_name');
const popupInputHobbyNode = profilePopup.querySelector('.popup__input_type_hobby');

const popupCardImage = document.querySelector('.popup-image');
const popupFormNodeImage = popupCardImage.querySelector('.form__edit_card');
const popupAddTitle = popupCardImage.querySelector('.popup__input_type_title');
const popupAddImage = popupCardImage.querySelector('.popup__input_type_image');

const cardsContainer = document.querySelector('.element');
const templateElement = document.querySelector('#template-element');

const popupImageFull = document.querySelector('.popup-full');



const popups = document.querySelectorAll('.popup');
const cardsImg = document.querySelector(".element__foto")
const titleElement = document.querySelector('.element__title');
const buttonKeyboardEsc = "Escape"

//Закрытие попап на Esc================
/*function closeEscPopup (evt) {
    if (evt.key === buttonKeyboardEsc) {
      popupClose(document.querySelector('.popup_visible'));
    };
};*/
const userData = {
    name: profileUserNameNode,
    hobbu: profileHobbyNode,
}


const userInfo = new UserInfo(userData)





const profilePopupClass = new PopupWithForm (profilePopup,
    {handleFormSubmit: (data) => {
        
        userInfo.setUserInfo(data);
        
     }})

     


profileButtonNode.addEventListener('click', () => {
    popupInputNameNode.value  = userInfo.getUserInfo().name;
    popupInputHobbyNode.value = userInfo.getUserInfo().hobbu;
    profilePopupClass.openPopup()
    
})


const popupCardImageClass = new PopupWithForm (popupCardImage,
     {handleFormSubmit: (item) => {
        const card = new Card(item, templateElement, handleCardClick);
        const cardElement  = card.generateCard();
        cardsList.setItem(cardElement)
        
     }})




buttonImageAdd.addEventListener('click', () => {
    popupCardImageClass.openPopup()
})






//Overlay закрытие попап================
/*popups.forEach((popup) => {
    popup.addEventListener('click',(evt) => {
        if(evt.target.classList.contains('popup_visible')){
            popupClose(popup);
        }
        if (evt.target.classList.contains('popup__close')) {
            popupClose(popup);
        }
    });
});*/

//Вызов поп-ап   ============================
/*function popupOpen(popup) {
    popup.classList.add('popup_visible');
    document.addEventListener('keydown', closeEscPopup);
};
//закрыть поп-ап
/*function popupClose(popup) {
    popup.classList.remove('popup_visible');
    
};*/




// Функция сабмит  ====================================
/*function handleFormSubmit(object) {
   // event.preventDefault();
    profileHobbyNode.textContent = object.name;
    profileUserNameNode.textContent = object.hobbu;
    //popupClose(profilePopup);
};*/
/*
function handleFormAddCardsSubmit(object) {
   // event.preventDefault();
    const newItemHtml = ({name:popupAddTitle.value, link:popupAddImage.value});

    cardsContainer.prepend(createCard(newItemHtml));
    popupFormNodeImage.reset();
    //popupClose(popupCardImage);
};*/
const popupFullImg = new PopupWithImages(popupImageFull)


function handleCardClick(name,link) {
    popupFullImg.openPopup(name,link)
}


/*
//Попап фулл фото=====================
function handleCardClick(name,link) {
    hendlePopupPhoto.src = link;
    hendlePopupPhoto.alt = name;
    fullFotoTitle.textContent = name;
      popupOpen(popupImageFull);
}*/

//Создание карточки=============
/*function createCard  (item) {
    
    const card = new Card(
        item,
        templateElement,
        handleCardClick
    );
    const cardElement = card.generateCard();
    return cardElement;
};*/








//ПОПАП редактирования профиля  ============================
/*profileButtonNode.addEventListener('click', () => {
    popupInputHobbyNode.value = profileHobbyNode.textContent;
    popupInputNameNode.value = profileUserNameNode.textContent;
    popupOpen(profilePopup);
});*/

//popupFormNodeProfil.addEventListener('submit',handleFormSubmit);

// ПОПАП добавления карточек   ================================
/*buttonImageAdd.addEventListener('click', () => {
    popupOpen(popupCardImage);
});
*/
//popupFormNodeImage.addEventListener('submit', handleFormAddCardsSubmit);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Перебор массива для карточек===============
//initialCards.forEach((item) => {
//    cardsContainer.prepend(createCard(item));
//});

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: '.popup__button_invalid',
    inputErrorClass: '.popup__input_type_invalide',
    errorClass: ".popup_visible",
  };


  
    const formValidationEditProfil = new FormValidator(validationConfig, popupFormNodeProfil);
    formValidationEditProfil.enableValidation()
  

    const formValidationEditCard = new FormValidator (validationConfig, popupFormNodeImage)
    formValidationEditCard.enableValidation()




    const cardsList = new Section({
        items: initialCards,
        renderer: (item) => {
          const card = new Card(item, templateElement, handleCardClick)
            
      
          const cardElement = card.generateCard();
      
          cardsList.setItem(cardElement);
          },
        },
        cardsContainer
      );

      cardsList.renderItems()