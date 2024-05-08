import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';

import searchUser from '../pages/searchUser.page';
const searchUsers = new searchUser();

const { faker } = require('@faker-js/faker');
let id;

Before({ tags: '@cadastroUsuarioEdit' }, function () {
    var email = faker.random.alpha({ count: 5 }).toLowerCase() + '@meuemail.com';
    var name = faker.name.firstName().toLowerCase() + 'abcd';
    cy.wrap(email).as('usuarioEmail')
    cy.wrap(name).as('usuarioName')
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

Given('foi acessada a lista de usuários', function () {
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', {
        statusCode: 200,
        fixture: '/listUsers.json'
    }).as('listUser');
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.wait('@listUser')
});

When('visualizar a barra de pesquisa', function () { });

When('pesquisar um email cadastrado', function () {
    const emailUser = this.usuarioEmail
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=' + emailUser).as('searchUserEmail');
    searchUsers.typePesquisa(emailUser);
    cy.wait('@searchUserEmail')
});

When('pesquisar um nome cadastrado', function () {
    const nameUser = this.usuarioName
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=' + nameUser).as('searchUserName');
    searchUsers.typePesquisa(nameUser);
    cy.wait('@searchUserName')
});

When('pesquisar por um nome não cadastrado', function () {
    const notUserList = faker.name.firstName().toLowerCase() + '@'
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=' + notUserList).as('searchNotUserName');
    searchUsers.typePesquisa(notUserList);
    cy.wait('@searchNotUserName')
});

When('pesquisar por um email não cadastrado', function () {
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=' + "iva_streich4yahoo.com").as('searchNotUserEmail');
    searchUsers.typePesquisa("iva_streich4yahoo.com");
    cy.wait('@searchNotUserEmail')
});

Then('ela está habilitada', function () {
    searchUsers.selectSearch();
});

Then('é possível visualizar nome, email, ver detalher, excluir usuário', function () {
    const emailUser = this.usuarioEmail
    const nameUser = this.usuarioName
    searchUsers.listFindUsers(nameUser, emailUser)
    searchUsers.deleteUserList()
    searchUsers.detailsUserList();
});

Then('aparece uma mensagem informando que não tem usuário cadastrado', function () {
    cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should('be.visible')
});

Then('aparece um botão para cadastrar um novo usuário', function () {
    searchUsers.getNewUserPage()
});
