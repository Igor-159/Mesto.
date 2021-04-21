export default   class Popup {
    constructor (popupSelector){
        this._popupSelector = popupSelector;
        this._popupCloseButton = this._popupSelector.querySelector('.popup__close')
    }

    openPopup () {
        this._popupSelector.classList.add('popup_visible');
        this.setEventListeners ();
    }
    closePopup () {
       this._popupSelector.classList.remove('popup_visible');
    }
    _handleEscClose (event) {
    
            if (event.key === "Escape") {
              this.closePopup();
            };
    }
    setEventListeners () {
        this._popupCloseButton.addEventListener('click',()=>{
        this.closePopup()});
        document.addEventListener('keydown', (event) => { this._handleEscClose(event)});
    }
}
