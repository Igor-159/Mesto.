export default class Section {
    constructor ({items, renderer}, containerSelector){
        this._renderedItems = items;
        this._renderer = renderer;

        this._containerSelector = containerSelector;
    }


    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item) );
    }

    setItem(element) {
        this._containerSelector.append(element);
    }
}