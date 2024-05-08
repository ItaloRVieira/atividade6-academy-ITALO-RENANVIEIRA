// import { expect } from "chai";

export default class searchUser {
    buttomSearch = 'input[placeholder="E-mail ou nome"]';
    buttomNext = '#paginacaoProximo';
    buttomPrevious = '#paginacaoVoltar';
    buttomNewUser = 'a[href="/users/novo"]';
    buttomNewUserPage = 'a[href="/users/novo"] > p'
    listUsers = '#listaUsuarios';
    listUser = '#userData';
    userName = '[data-test="userDataName"]';
    userEmail = '[data-test="userDataEmail"]';
    buttomDetailsUser = '#userDataDetalhe'
    valuedetailsID = 'form > input[name="id"]'
    valuedetailsName = '#userName'
    valuedetailsEmail = '#userEmail'
    deleteUser = '[data-test="userDataDelete"]'
    editUser = '#userDataDetalhe'
    labelPaginacaoAtual = '#paginacaoAtual'

    selectSearch(){
        cy.get(this.buttomSearch).should('be.enabled')
    }

    typePesquisa(nome) {
        cy.get(this.buttomSearch).type(nome)
    };

    typePesquisa(email) {
        cy.get(this.buttomSearch).type(email)
    };

    listFindUsers(nome, email) {
        cy.get(this.listUser).within(() => {
            cy.get(this.userName).should('have.text', "Nome: " + nome);
            cy.get(this.userEmail).should('have.text', "E-mail: " + email);
        });
    };

    deleteUserList(){
        cy.get(this.deleteUser).should('be.visible');
    }

    detailsUserList(){
        cy.get(this.editUser).should('be.visible').within(function (){
            cy.contains("Ver detalhes").should('be.visible')
        })
    }
    clickNextPage(){
        cy.get(this.buttomNext).click()
    };

    clickPreviousPage(){
        cy.get(this.buttomPrevious).click()
    }

    clickNewUser() {
        cy.get(this.buttomNewUser).click()
    }

    getNewUserPage(){
        cy.get(this.buttomNewUserPage).should('have.text', "Cadastre um novo usuário")
    }

    viewuserDetails(id, nome, email){
        cy.get(this.buttomDetailsUser).click()
        cy.get(this.valuedetailsID).should('have.value', id)
        cy.get(this.valuedetailsName).should('have.value', nome)
        cy.get(this.valuedetailsEmail).should('have.value', email)
    }

    //Por algum motivo o codigo quebra quando executado apenas no terminal, analisar posteriormente 
    async finduserList(nome, email) {
        let usuarioEncontrado = false;

        const verificarUsuario = ($el) => {
            const userName = $el.find(this.userName).text();

            if (userName.includes(nome)) {
                cy.wrap($el).as('usuarioEncontrado');
                usuarioEncontrado = true;
                return false; 

            }
        };

        const percorrerUsuarios = async () => {        
            await cy.get(this.listUsers).children().each(($el) => {
                verificarUsuario($el);
                if (usuarioEncontrado == true){
                    console.log(usuarioEncontrado)
                    return false;
                    
                }
            });
            
        };

        const verificarTodasPaginas = async () => {
            do {
                await percorrerUsuarios();
                if (usuarioEncontrado == false) {
                    cy.get(this.buttomNext).click();
                    cy.wait(1000); 
                
                }
            } while (usuarioEncontrado == false);
            
            if (!usuarioEncontrado) {
                throw new Error('Usuário não encontrado');
            }
        };

        await verificarTodasPaginas();

    }

    buttomNextPage(){
        cy.get(this.buttomNext).should('be.enabled')
    }

    buttomNextPageDisabled(){
        cy.get(this.buttomNext).should('be.disabled')
    }

    buttomPreviousPageDisabled(){
        cy.get(this.buttomPrevious).should('be.disabled')
    }
}

