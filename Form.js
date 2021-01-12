export default class Form {
    constructor (quantity, maxNum, systems) {
        this._quantity = +quantity;
        this._maxNum = +maxNum;
        this._systems = systems;
    }
    renderJson() {
        let systemsArr = [];
        this._systems.split(",").forEach((e) => {
            if (e != '') {
                systemsArr.push(+e);
            }
        })
        return JSON.stringify(
            {
                quantity: this._quantity,
                maxNum: this._maxNum,
                systems: systemsArr,
            }
        )
    }
}