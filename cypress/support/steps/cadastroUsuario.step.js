import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import createNewUser from "../pages/createUser.page";
const createUser = new createNewUser();
const { faker } = require('@faker-js/faker');

const name = faker.name.firstName() + 'abcd';

Given('foi acessada a tela de criação de usuário', function () {
    cy.accessNewUserPage();
});
When('informou nome válido', function () {
    createUser.typeName(name)
});

When('informou um email válido', function () {
    var novoEmail = faker.random.alpha({ count: 14 }).toLowerCase() + '@meuemail.com';
    cy.wrap(novoEmail).as('emailFaker');
    createUser.typeEmail(novoEmail);
});

When('clicou no botão salvar', function () {
    createUser.buttomSave()
});

Then('o usuário é criado', function () {
    cy.intercept('POST', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users').as('newUser');
    cy.wait('@newUser').then(function (intercept) {
        const emailCriado = this.emailFaker;
        expect(intercept.response.body.email).is.eq(emailCriado)
    })
});

Then('é exibida uma mensagem informando que o usuário foi salvo', function () {
    cy.contains("Usuário salvo com sucesso!").should('be.visible')
});

When('informou um email já cadastrado', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', {
        statusCode: 200,
        fixture: '/listUsers.json'
    }).as('repeatedUser');
    cy.wait('@repeatedUser').then(function () {
        cy.accessNewUserPage();
        createUser.typeEmail('iva_streich4@yahoo.com');
        cy.intercept('POST', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users')
        .as('newUser');

    })
});

Then('usuário não é criado', function () {
    cy.wait('@newUser').then(function (intercept) {
        expect(intercept.response.statusCode).to.eq(422)
    })
});
Then('é exibida uma mensagem informando que já existe email cadastrado', function () {
    cy.contains("Este e-mail já é utilizado por outro usuário.").should('be.visible')
});

When('informou nome que contenha um caractere especial', function () {
    createUser.typeName(name + '#');
});

Then('é exibida uma mensagem informando que o nome possui formato inválido', function () {
    cy.contains("Formato do nome é inválido.").should('be.visible')
});

Then('não é feita requisição para criação de usuário', function () {
    cy.intercept('POST', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users').as('newUser')
        .then(function (intercept) {
            expect(intercept).to.be.null;
        })
})

When('informou um email com formato inválido', function () {
    createUser.typeEmail(name + name);
})

Then('é exibida uma mensagem informando que o email possuí formato inválido', function () {
    cy.contains("Formato de e-mail inválido").should('be.visible')
});

When('informou um nome com 100 caracteres', function () {
    const nameHundred = faker.random.alpha({ count: 100 });
    createUser.typeName(nameHundred);
});

When('informou nome com 101 caracteres', function () {
    const name101 = faker.random.alpha({ count: 101 });
    createUser.typeName(name101);
});

Then('é exibida uma mensagem informando que o limite de caracteres para nome é 100', function () {
    cy.contains("Informe no máximo 100 caracteres para o nome").should('be.visible')
});

When('informou um email com 60 caracteres', function () {
    const email60 = faker.random.alpha({ count: 52 }).toLowerCase() + '@net.com';
    cy.wrap(email60).as('emailFaker');
    createUser.typeEmail(email60);
});

When('informou um email com 61 caracteres', function () {
    const email61 = faker.random.alpha({ count: 53 }) + '@net.com';
    createUser.typeEmail(email61);
});

Then('é exibida uma mensagem informando que o limite de caracteres para email é 60', function () {
    cy.contains("Informe no máximo 60 caracteres para o e-mail").should('be.visible');
});

When('informou nome com 3 caracteres', function () {
    const name3 = faker.random.alpha({ count: 3 });
    createUser.typeName(name3);
});

Then('é exibida uma mensagem informando que o nome deve conter no mínimo 4 caracteres', function () {
    cy.contains("Informe pelo menos 4 letras para o nome.").should('be.visible')
});

Then('é exibida uma mensagem informando que o campo nome é obrigatório', function () {
    cy.contains("O campo nome é obrigatório.").should('be.visible')
});

Then('é exibida uma mensagem informando que o campo email é obrigatório', function () {
    cy.contains("O campo e-mail é obrigatório.").should('be.visible')
});


