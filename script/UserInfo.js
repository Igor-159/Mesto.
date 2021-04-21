export default class UserInfo {
    constructor (data){
        this._name = data.name
        this._hobbu = data.hobbu
    }

    getUserInfo() {
        

       this._data = {
            name: this._name.textContent,
            hobbu: this._hobbu.textContent  
        }
        return this._data
    }

    setUserInfo(item){
        this._name.textContent = item.name;
        this._hobbu.textContent = item.hobbu;
    }
}






































































