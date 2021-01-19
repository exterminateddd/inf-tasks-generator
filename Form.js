export default class Form {
    constructor (selector, selector2) {
        this._selector = selector;
        this._formElement = document.querySelector(this._selector);
        this._quantity = +this._formElement.querySelector('#quantity').value;
        this._maxNum = +this._formElement.querySelector('#max').value;
        this._systems = this._formElement.querySelector('#systems').value;
        
        this._selector2 = selector2;
        this._formElement2 = document.querySelector(this._selector2);
        this._quantity2 = +this._formElement2.querySelector('#quantity').value;
        this._maxNum2 = +this._formElement2.querySelector('#max').value;
        this._systems2 = this._formElement2.querySelector('#systems').value;
    }
    log () {
        console.log(this._formElement2);
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
                }
            }
            // {
                // quantity: this._quantity,
                // maxNum: this._maxNum,
                // systems: systemsArr.map((e) => {
                //     if (e != '') {
                //         return +e;
                //     } else {
                //         return;
                //     }
                // }),
            // }
        )
    }
}