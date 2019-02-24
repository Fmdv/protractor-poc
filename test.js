describe('Calcular ', function(){
    
    beforeEach(function(){
        browser.get('https://juliemr.github.io/protractor-demo/');

        num_1 = element(by.model('first'));
        num_2 = element(by.model('second'));
        btn_go = element(by.id('gobutton'));
        select_operator = element(by.model('operator'));
        result = element(by.binding('latest'));
        
    });

    it('Quando eu quero somar valores', function(){
        num_1.sendKeys(2);
        num_2.sendKeys(4);
        btn_go.click();
        expect(result.getText()).toEqual('6');
    })

    it('Quando eu quero subtrair valores', function(){
        num_1.sendKeys(10);
        select_operator.sendKeys('-');
        num_2.sendKeys(3);
        btn_go.click();
        expect(result.getText()).toEqual('7');
    })
    it('Quando eu quero dividir valores', function(){
        num_1.sendKeys(10);
        select_operator.sendKeys("/");
        num_2.sendKeys(2);
        btn_go.click();
        expect(result.getText()).toEqual('5');
    })
    it('Quando eu quero multiplicar valores', function(){
        num_1.sendKeys(10);
        select_operator.sendKeys('*');
        num_2.sendKeys(3);
        btn_go.click();
        expect(result.getText()).toEqual('30');
    })
})