export default class EditUsers {

    inputId = 'input[name="id"]';
    inputName = '#userName';
    inputEmail = '#userEmail';
    buttomEdit = '[type="button"]';
    buttomSave = '[type="submit"]';
    buttomCancel = '[type="button"]';
    buttomBack = 'a[href="/users"]';

    typeName(name) {
        cy.get(this.inputName).clear().type(name)
    };

    typeEmail(email) {

        cy.get(this.inputEmail).clear().type(email)
    };

    clickButtomSave() {
        cy.get(this.buttomSave).click()
    };

    getBack() {
        cy.get(this.buttomBack).click()
    };

    clickButtomEdit() {
        cy.get(this.buttomEdit).click()
    };

    clickButtomCancel() {
        cy.get(this.buttomCancel).click()
    };

    getButtomEdit() {
        cy.get(this.buttomEdit)
    };

    InputName() {
        cy.get(this.inputName).should('be.disabled')

    };

    InputEmail() {
        cy.get(this.inputEmail).should('be.disabled')
    };

    clearName() {
        cy.get(this.inputName).clear()
    }

    clearEmail() {
        cy.get(this.inputEmail).clear()
    }

    disabledID() {
        cy.get(this.inputId).should('be.disabled')
    }

    valueInputID(id) {
        cy.get(this.inputId).invoke('val').should('eq', id)

    }

}
