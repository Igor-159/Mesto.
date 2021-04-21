
 class FormValidator{
    constructor(validationConfig, form){
        this._formSelector =  validationConfig.formSelector
        this._inputSelector =  validationConfig.inputSelector
        this._submitButtonSelector = validationConfig.submitButtonSelector
        this._inactiveButtonClass = validationConfig.inactiveButtonClass
        this._inputErrorClass = validationConfig.inputErrorClass
        this._errorClass = validationConfig.errorClass
        this._form = form 
        
        this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._errors = Array.from(this._form.querySelectorAll(`#${this._inputErrorClass.id}-error`));
    }

    _showError(){
        this._inputSelector.classList.add(this._inputErrorClass);
        this._errors.textContent = this._inputSelector.validationMessage;
        this._errors.classList.add(this._errorClass);
    }

    _hideError(){
        this._inputs.classList.remove(this._inputErrorClass);
        this._errors.classList.remove(this._errorClass);
        this._errors.textContent = "";
    }

    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showError(input);
        } else {
            this._hideError(input);
        }
    }
    
    _setButtonState() {
        
        if (this._form.checkValidity()) {
            this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
            this._submitButtonSelector.disabled = false;
        } else {
            this._submitButtonSelector.classList.add(this._inactiveButtonClass);
            this._submitButtonSelector.disabled = true; 
        }
    }


    _setEventListeners(){
        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonState();
            });
        });
    }

    enableValidation(){
        this._setEventListeners()

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log('отправка формы');
        });
        this._setButtonState()
    }
}