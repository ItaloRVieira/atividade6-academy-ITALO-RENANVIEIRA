import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import searchUser from '../pages/searchUser.page';
const searchUsers = new searchUser();
let listaUsuarios;


Given('que foi acessada a lista de usuários', function () {
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', {
        statusCode: 200,
        fixture: '/listUsers.json'
    }).as('listUser');
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.wait('@listUser').then(function (paginaUsuarios) {
        listaUsuarios = paginaUsuarios.response.body
    })
});
When('a lista está vazia', function () {
    cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', [])
    .as('listaVazia');
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.wait('@listaVazia')

})

When('o botão "próxima" é selecionado', function () {
    searchUsers.clickNextPage();
    cy.contains(searchUsers.labelPaginacaoAtual, '2 de 3')
})

When('vai para a última página', function () {
    searchUsers.clickNextPage();
    searchUsers.clickNextPage();
});

When('visualizar usuários cadastrados', function () {
    const pagInicial = listaUsuarios.slice(0, 5)
    pagInicial.forEach(function (usuario) {
        cy.contains(searchUsers.userName, 'Nome: ' + usuario.name);
        cy.contains(searchUsers.userEmail, 'E-mail: ' + usuario.email.slice(0, 18));

    })
});

When('o botão "anterior" é selecionado', function () {
    searchUsers.clickPreviousPage()
})

When('selecionar o botão "novo" no canto superior direito', function () {
    searchUsers.clickNewUser()
})

When('tem mais de seis usuários cadastrados', function () {
    const quantidadeUsuarios = listaUsuarios.length;
    const quantidadePaginas = Math.floor(quantidadeUsuarios / 6);
    expect(quantidadePaginas).to.be.greaterThan(1);
});

Then('é possível localizar o usuário', function () {
    searchUsers.listFindUsers("fakerLisette", "reich4@yahoo.com")
    searchUsers.deleteUserList()
});

Then('o botão "próxima" deve estar habilitado', function () {
    searchUsers.buttomNextPage()
})

Then('o botão próxima deve estar desabilitado', function () { 
    cy.contains(searchUsers.labelPaginacaoAtual, '3 de 3')
    searchUsers.buttomNextPageDisabled()
})

Then('é direcionado a tela de criação de usuário', function () {
    cy.url().should('equal', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/novo')
})

Then('deve retornar a página anterior', function () {
    cy.contains(searchUsers.labelPaginacaoAtual, '1 de 3');
    searchUsers.buttomPreviousPageDisabled()
});

Then('aparece uma mensagem informando que não possui usuário cadastrado', function () {
    cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should('be.visible')
})

Then('aparece uma opção para cadastrar um novo usuário', function () {
    searchUsers.getNewUserPage()
})