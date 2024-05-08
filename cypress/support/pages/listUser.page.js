export default class ListUsers {
    buttomNext = '#paginacaoProximo';
    buttomPrevious = '#paginacaoVoltar';

    clickNextPage() {
        cy.get(this.buttomNext).click()
    };

    clickPreviousPage() {
        cy.get(this.buttomPrevious).click()
    }
}