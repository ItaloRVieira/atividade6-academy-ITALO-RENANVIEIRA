import createNewUser from "../support/pages/createUser.page"
const createUser = new createNewUser();
import searchUser from "./pages/searchUser.page";
const SearchUser = new searchUser()

Cypress.Commands.add('deleteUser', function(userId) {
    cy.request({
        method: 'DELETE',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/' + userId,
    })
  });

Cypress.Commands.add('accessNewUserPage', function () {
  cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users').then(function (){
    SearchUser.getNewUser()
  })
});

Cypress.Commands.add('novoUsuario', function(name, email){
  createUser.typeName(name);
  createUser.typeEmail(email);
  createUser.buttomSave();
});