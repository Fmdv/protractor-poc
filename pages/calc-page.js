class CalcPage{
    constructor(){
        this.path = 'protractor-demo/';
        this.num_1 = element(by.model('first'));
        this.num_2 = element(by.model('second'));
        this.btn_go = element(by.id('gobutton'));
        this.combo_operator = element(by.model('operator'));
        this.result = element(by.binding('latest'));
    }
    with(valor1, valor2, operator){
        this.num_1.sendKeys(valor1);
        this.num_2.sendKeys(valor2);
        this.combo_operator.sendKeys(operator);
        this.btn_go.click();
    }
}

module.exports = CalcPage;