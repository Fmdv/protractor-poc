class LoginPage{
    constructor(){
        this.path = '/login ';
        this.email = element(by.id('login_email'));
        this.senha = element(by.id('login_password'));
        this.btn_login = element(by.css('.loginButton'));
        this.message = element(by.css('.alert-login'));
    }
    with(email, senha){
        this.email.sendKeys(email);
        this.senha.sendKeys(senha);
        this.btn_login.click();
    }
}

module.exports = LoginPage;