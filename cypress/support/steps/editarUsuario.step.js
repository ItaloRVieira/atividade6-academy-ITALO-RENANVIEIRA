import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';

import EditUsers from '../pages/editUser.page';
const editUser = new EditUsers();
import createNewUser from "../pages/createUser.page";
const createUser = new createNewUser();

const { faker } = require('@faker-js/faker');
let id;
var emailExist;

Before({ tags: '@cadastroUsuario' }, function () {
    var email = faker.random.alpha({ count: 14 }).toLowerCase() + '@meuemail.com';
    var name = faker.name.firstName() + 'abcd';
    cy.request({
        method: 'POST',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body: {
            "name": name,
            "email": email
        }
    }).then(function (criarUsuario) {
        id = criarUsuario.body.id;
        cy.wrap(id).as('usuarioId')
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + id);
    })
})
Given('foi selecionado o botão editar usuário', function () {
    editUser.clickButtomEdit();
});

When('informou um nome válido para alteração', function () {
    var newName = faker.name.firstName() + 'zxcv';
    cy.wrap(newName).as('nameFaker');
    editUser.typeName(newName)
});

When('informou um email válido para alteração', function () {
    var novoEmail = faker.random.alpha({ count: 14 }).toLowerCase() + '@meuemail.com';
    cy.wrap(novoEmail).as('emailFaker');
    editUser.typeEmail(novoEmail);
});

When('clicou no botão salvar', function () {
    editUser.clickButtomSave()
});

When('clicou no botão cancelar', function () {
    editUser.clickButtomCancel()
});

When('informou nome que contenha um caractere especial ao editar', function () {
    const nameNewUser = this.nameFaker;
    editUser.typeName(nameNewUser + '#');
});

//codigo está retornando email aleatorio, corrigir 
When('informou um email já cadastrado ao editar', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', {
        statusCode: 200,
        fixture: '/listUsers.json'
    });
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + id);
    editUser.clickButtomEdit();
    editUser.typeEmail(emailExist);
});

Then('não é realizada requisição para editar usuário', function () {
    cy.intercept('PUT', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/' + id)
        .then(function (intercept) {
            expect(intercept).to.be.null;
        })
});

Then('os campos nome e email deverão estar desabilitado', function () {
    editUser.InputName()
    editUser.InputEmail()
})

Then('informações são editadas', function () {
    cy.intercept('PUT', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/' + id).as('usuarioEditado');
    cy.wait('@usuarioEditado')
        .then(function (intercept) {
            const nameNewUser = this.nameFaker;
            const emailNewUser = this.emailFaker;
            expect(intercept.response.body.name).is.eq(nameNewUser);
            expect(intercept.response.body.email).is.eq(emailNewUser);

        });
});

Then('retorna para a lista de usuarios', function () {
    cy.url().should('equal', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
})

Then('é exibida uma mensagem informando que o nome possui formato inválido', function () {
    cy.contains("Formato do nome é inválido.").should('be.visible')
})

Then('é exibida uma mensagem informando que já está cadastrado', function () {
    cy.get('h2').contains('Erro').should('be.visible');
    cy.contains("Este e-mail já é utilizado por outro usuário.").should('be.visible');
});

Then('edição não é realizada', function () {
    cy.intercept('PUT', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/' + id).as('postIntercept');
    cy.wait('@postIntercept').then(function (intercept) {
        expect(intercept.response.statusCode).to.eq(422)
    })
});

When('informou email com formato inválido', function () {
    editUser.typeEmail('iva_streich4yahoo.com');
});

When('informou nome com 100 caracteres', function () {
    const name100 = faker.random.alpha({ count: 100 });
    editUser.typeName(name100)
    cy.wrap(name100).as('nameHundred')
});

When('é exibida uma mensagem informando que e email possui formato inválido', function () {
    cy.contains("Formato de e-mail inválido").should('be.visible');
})

Then('O nome é editado', function () {
    cy.intercept('PUT', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/' + id).as('usuarioEditado');
    cy.wait('@usuarioEditado')
        .then(function (intercept) {
            const nameNewUser = this.nameHundred;
            expect(intercept.response.body.name).is.eq(nameNewUser);

        })
});

Then('é exibida uma mensagem informando que o usuário foi editado com sucesso', function () {
    cy.contains("Informações atualizadas com sucesso!").should('be.visible')
})

When('informou um nome com 101 caracteres', function () {
    const name101 = faker.random.alpha({ count: 101 });
    editUser.typeName(name101)
})

Then('é exibida mensagem informando que o limite de caracteres para nome é 100', function () {
    cy.contains("Informe no máximo 100 caracteres para o nome").should('be.visible')
})

When('informou email com 60 caracteres', function () {
    const email60 = faker.random.alpha({ count: 52 }).toLowerCase() + '@net.com';
    cy.wrap(email60).as('emailFaker');
    editUser.typeEmail(email60);
})

Then('O email é editado', function () {
    cy.intercept('PUT', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/' + id).as('usuarioEditado');
    cy.wait('@usuarioEditado')
        .then(function (intercept) {
            const emailNewUser = this.emailFaker;
            expect(intercept.response.body.email).is.eq(emailNewUser);

        })
});

When('informou email com 61 caracteres', function () {
    const email61 = faker.random.alpha({ count: 53 }).toLowerCase() + '@net.com';
    cy.wrap(email61).as('emailFaker');
    editUser.typeEmail(email61);
})

Then('é exibida mensagem informando que o limite de caracteres para email é 60', function () {
    cy.contains("Informe no máximo 60 caracteres para o e-mail").should('be.visible');
});

When('informou um nome com 3 caracteres', function () {
    const name3 = faker.random.alpha({ count: 3 });
    editUser.typeName(name3);
});

Then('é exibida mensagem informando que o nome deve conter no mínimo 4 caracteres', function () {
    cy.contains("Informe pelo menos 4 letras para o nome.").should('be.visible')
})

When('não informou nome', function () {
    editUser.clearName()
})

When('não informou email', function () {
    editUser.clearEmail()
})

Then('é exibida mensagem informando que o campo nome é obrigatório', function () {
    cy.contains("O campo nome é obrigatório.").should('be.visible')
})

Then('é exibida mensagem informando que o campo email é obrigatório', function () {
    cy.contains("O campo e-mail é obrigatório.").should('be.visible')
})

Then('campo ID está desabilitado', function () {
    editUser.disabledID()
})

Then('campo ID deve exibir o ID do usuário', function () {
    console.log(editUser.valueInputID(id))
})