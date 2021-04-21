import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor (popupSelector, {handleFormSubmit}){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.form');
        this._formSubmit = this._formSubmit.bind(this)
    }
    closePopup() {
      super.closePopup();
      this._form.reset()
      
    }
    _getInputValues() {   
        this._inputList = this._form.querySelectorAll('.popup__input');   
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
        
    }

    _formSubmit(event){
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.closePopup()
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._formSubmit)
    }
}   