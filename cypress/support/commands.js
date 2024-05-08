import createNewUser from "../support/pages/createUser.page"
const createUser = new createNewUser();
import searchUser from "./pages/searchUser.page";
const SearchUser = new searchUser()


Cypress.Commands.add('accessNewUserPage', function () {
  cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users').then(function (){
    SearchUser.clickNewUser()
  })
});
