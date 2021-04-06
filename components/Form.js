export default class Form {
    constructor (selector, selector2) {
        this._selector = selector;
        this._formElement = document.querySelector(this._selector);
        this._quantity = +document.querySelector('#quantity').value;
        this._maxNum = +document.querySelector('#max').value;
        this._systems = document.querySelector('#systems').value;
        
        this._formElement2 = document.querySelector(this._selector2);
        this._quantity2 = +document.querySelector('#quantity2').value;
        this._maxNum2 = +document.querySelector('#max2').value;
        this._systems2 = document.querySelector('#systems2').value;
        
        this._variants = document.querySelector('#variables').value;
    }
    renderJson() {
        let systemsArr = [];
        this._systems.split(",").forEach((e) => {
            if (e != '') {
                systemsArr.push(+e);
            }
        })
        let systemsArr2 = [];
        this._systems2.split(",").forEach((e) => {
            if (e != '') {
                systemsArr2.push(+e);
            }
        })
        return JSON.stringify(
            {
                    to10 : {
                        quantity: this._quantity2,
                        maxNum: this._maxNum2,
                        systems: systemsArr2,
                    },
                from10 : {
                    quantity: this._quantity,
                    maxNum: this._maxNum,
                    systems: systemsArr,
                },
                variants : +this._variants,
            }
        )
    }
}