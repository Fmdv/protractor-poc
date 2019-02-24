const LoginPage = require('../pages/login-page')
const TasksPage = require('../pages/tasks-page')
//fernanda123@mark7.com.br

describe('Quando errar login',function(){
    const login_page = new LoginPage;

    beforeEach(function(){
        browser.get(login_page.path);
    })

    it('Quando não informar campos', function(){
        login_page.with('','');
        expect(login_page.message.getText()).toEqual('Email incorreto ou ausente.');
    })
    it('Quando informar apenas senha', function(){
        login_page.with('','123Aa321');
        expect(login_page.message.getText()).toEqual('Email incorreto ou ausente.');
    })
    it('Quando informar apenas e-mail', function(){
        login_page.with('fernanda123@mark7.com.br','');
        expect(login_page.message.getText()).toEqual('Senha ausente.');
    })
    it('Quando informar email e senha inválido', function(){
        login_page.with('fernanda12@mark7.com.br','teste1');
        expect(login_page.message.getText()).toEqual('Usuário não cadastrado.');
    })
    it('Quando informar email inválido e senha válida', function(){
        login_page.with('fernanda12@mark7.com.br','123Aa321');
        expect(login_page.message.getText()).toEqual('Usuário não cadastrado.');
    })
    it('Quando informar email válido e senha inválida', function(){
        login_page.with('fernanda123@mark7.com.br','teste1');
        expect(login_page.message.getText()).toEqual('Senha inválida.');
    })
    it('Quando informar email válido e senha com menos de 6 caracteres', function(){
        login_page.with('fernanda123@mark7.com.br','teste');
        expect(login_page.message.getText()).toEqual('Senha deve ter no mínimo 6 caracteres.');
    })
})

describe('Quando logar',function(){
    const login_page = new LoginPage;

    beforeEach(function(){
        browser.get(login_page.path);
    })
    it('Quando informar email e senha válidos', function(){
        login_page.with('fernanda123@mark7.com.br','123Aa321');
        var tasks_page = new TasksPage;
        expect(tasks_page.login.getText()).toEqual('fernanda123@mark7.com.br');
    })
})