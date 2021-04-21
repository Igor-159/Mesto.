import Popup from './Popup.js'

export default class PopupWithImages extends Popup {
    constructor (popupSelector){
        super (popupSelector)

    }
    openPopup(name,link){
        super.openPopup()
        this._popupSelector.querySelector('.popup__image').src = link;
        this._popupSelector.querySelector('.popup__image').alt = name;
        this._popupSelector.querySelector('.popup__figcaption').textContent = name;
        
        
    }
    
}
