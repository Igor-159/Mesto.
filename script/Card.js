
export default class Card{
    constructor(item,cardTemplate,handleCardClick){
        this._name = item.name
        this._link = item.link
        this._cardTemplate = cardTemplate
        this._handleCardClick = handleCardClick
        
    }

    _getTemplate  ()  {
        this._cardElement = this._cardTemplate
        .content.querySelector('.element__card')
        .cloneNode(true)

        return this._cardElement;
    }

    generateCard  ()  {
        this._element = this._getTemplate()
        this._cardFoto = this._element.querySelector(".element__foto");
        this._cardFoto.src = this._link;
        this._cardFoto.alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;

        this._setEventListener()

        return this._element;
    }

    _setEventListener (){

        this._element.querySelector(".element__remove").addEventListener(
            "click", ()=> {
            this._deleteCard()}
        )

        this._element.querySelector(".element__like").addEventListener(
            "click", ()=>{
            this._likeActive()}
        )

        this._element.querySelector(".element__foto").addEventListener(
            "click",()=>{
            this._handleCardClick(this._name, this._link)
            }
        )
    }

    _likeActive ()  {
        this._element.querySelector(".element__like").classList.toggle('element__like_active');
    }

    _deleteCard ()  {
        this._element.remove();
    }
}