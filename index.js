const profilButtonNode = document.querySelector('.button__open-edit__profil');
const popupProfilNode = document.querySelector('.popup-profil');
const popupCardNode = document.querySelector('.popup-card')
const popupCloseButtonProfilNode = document.querySelector('.button-close-popup-profil');
const popupCloseButtonCardNode = document.querySelector('.button-close-popup-card')
const profilTitleNode = document.querySelector('.profil__title')
const profilSubtitleNode = document.querySelector ('.profil__subtitle')
const formProfilNode = document.querySelector('.form-edit-profil')
const profilNameNode = document.querySelector('.user__input-name')
const profilProfessionNode = document.querySelector('.input-profession')
const popupSubmitNode = document.querySelector('.form__button')
const cardButtonNode = document.querySelector('.button-open-add_card')
const listCard = document.querySelector('.grid-cards')
const templateElement = document.querySelector('.template')
const inputTitleCard = document.querySelector('.input-title-card')
const inputURLCard = document.querySelector('.input-URL-card')
const popupImgFull = document.querySelector('.popup-full-img')
const cardImgElement = document.querySelector('.grid-card__img')






const CARD_LIST = [
    {title:'Карачаевск',
     URL:'images/kirill-pershin-1088404-unsplash.png'},
    {title:'Эльбрус',
    URL:'images/kirill-pershin-1556355-unsplash.png'},
    {title:'Карачаевск',
    URL:'images/kirill-pershin-1404681-unsplash.png'},
    {title:'Ахтарск',
    URL:'images/kirill-pershin-1556355-unsplash.png'},
    {title:'Саратов',
    URL:'images/kirill-pershin-1404681-unsplash.png'},
    {title:'Астрахань',
    URL:'images/kirill-pershin-1088404-unsplash.png'}   
]

function renderList(){
    const listItems = CARD_LIST.map(composeItem);
    listCard.append(...listItems)
}

/*class Card{
    _container
    _title
    _img
    _view



    constructor(title, img, template){
        this._title = title
        this._img = img
        this._template = template
    }
    _render = () => {
        this._view = this._template.content.cloneNode(true)
        this._view.querySelector('.grid-card__img').src = this._img;
        this._view.querySelector('.button_like').
        addEventListener('click', this._handleButtonTogleLike)
        this._view.querySelector('.grid-card__button-remove')
        .addEventListener('click',this._removeItem);
        this._view.querySelector('.grid-card__title').textContent = this._title;
        return this._view
    }
    _handleButtonTogleLike = event =>{
        event.target.classList.toggle('button_like-active')
    }
    _removeItem = event =>{
        this._view.remove()
    }
}*/


function composeItem(item){
    const newItem = templateElement.content.cloneNode(true);
    const cardImg = newItem.querySelector('.grid-card__img');
    cardImg.src = item.URL;
    cardImg.addEventListener('click', handlePopupImgFull(item))
    const likeButton = newItem.querySelector('.button_like')
    likeButton.addEventListener('click',handleButtonTogleLike)
    const removeButton = newItem.querySelector('.grid-card__button-remove');
    removeButton.addEventListener('click',removeItem);
    const titleItem = newItem.querySelector('.grid-card__title');
    titleItem.textContent = item.title;
    return newItem
}

function handlePopupImgFull(item){
    popupOpen(popupImgFull);
    popupImgFull.querySelector('.full-img__image').src = item.URL;
    popupImgFull.querySelector('.full-img__title').textContent = item.title;
    
    popupImgFull.querySelector('.full-img__image').alt = item.title;
    
}





function removeItem(event){
    const targetElement = event.target;
    const targetItem = targetElement.closest('.grid-card')
    targetItem.remove()
}





formProfilNode.addEventListener('submit',handleFormSubmit);


function handleFormSubmit(event){
    
event.preventDefault();
const profilNameNode = event. currentTarget.querySelector('.user__input-name');
profilTitleNode.textContent = profilNameNode.value;

event.preventDefault();
const profilProfessionNode = event.currentTarget.querySelector('.input-profession')
profilSubtitleNode.textContent = profilProfessionNode.value;

popupProfilNode.classList.remove('popup__visible')
}


function bindAddItemListener(){
    const addButtonElementCard = document.querySelector('.button-add-card')
    addButtonElementCard.addEventListener('click',addNewItem)

}

function addNewItem (){
    const inputURL = inputURLCard.value
   
    const inputText = inputTitleCard.value
    const newCard = composeItem ({title:inputText, URL:inputURL})
    listCard.prepend(newCard)
    inputTitleCard.value = ""
    inputURLCard.value = ""
}




/*profilButtonNode.addEventListener('click', popupOpen(popupProfilNode));
popupCloseButtonProfilNode.addEventListener('click',handleCloseButtonPopup);
popupCloseButtonCardNode.addEventListener('click',handleCloseButtonPopup)
cardButtonNode.addEventListener('click', popupOpen(popupCardNode));

*/
function popupOpen(popup){
     
popup.classList.add('popup__visible');
    
} 

function handleCloseButtonPopup(){
    const popups = document.querySelectorAll('.popup')
    popups.forEach((popup)=>{
        popup.classList.remove('popup__visible')
    })
    
} 


renderList()
bindAddItemListener()








function handleButtonTogleLike(event){
    event.target.classList.toggle('button_like-active')
}

function showError(form, input){
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add('popup__input_state_invalid')
}
function hideError(form, input){

const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove('popup__input_state_invalid')
}

function checkInputValidity(form, input){
    if(input.validity.valid){
        hideError(form, input)
    }else{
        showError(form, input)
    }
}

function setButtonState(button, isActive){
    if(isActive){
        button.disabled = false;
        button.classList.remove('popup__button_invalid')
    }else{
        button.disabled = true;
        button.classList.add('popup__button_invalid')
    }
}

function setEventListener (form){
    const inputList = form.querySelectorAll('.form__input')
    const submitButton = form.querySelector('.form__button')
    inputList.forEach((input)=>{
        input.addEventListener('input',(event)=>{
            checkInputValidity(form, input); 
            setButtonState(submitButton, form.checkValidity())
        }
        )
    })
}





function enableValidation(){
    const forms = document.querySelectorAll('.form');

    forms.forEach((form)=>{
        setEventListener(form)

        form.addEventListener('submit', (event)=>{
            event.preventDefault()
        })

        const submitButton = form.querySelector('.form__button');
        setButtonState(submitButton, form.checkValidity())


    })

}


enableValidation()




