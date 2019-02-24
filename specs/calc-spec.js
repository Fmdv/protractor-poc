const CalcPage = require('../pages/calc-page')

describe('Quando quero calcular',function(){
    const calc_page = new CalcPage;

    beforeEach(function(){
        browser.get(calc_page.path);
    })

    it('Quando somar valores', function(){
        calc_page.with(2,2,'');
        expect(calc_page.result.getText()).toEqual('4');
    })

    it('Quando subtrair valores', function(){
        calc_page.with(2,2,'-');
        expect(calc_page.result.getText()).toEqual('0');
        expect(calc_page.result.getText()).toEqual('1');
    })
})