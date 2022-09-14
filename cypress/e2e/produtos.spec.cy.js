///<reference types="cypress" />

describe('funcionalidade pagina de produtos', () => {
    
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        .contains ('Ariel Roll Sleeve Sweatshirt')
        .click()
    });
    
    it.only('deve adicionar produto no carrinho ', () => {
    var quantidade = 2
    
        cy.get('[class="product-block grid"]')
        .contains ('Apollo Running Short').click()
        cy.get('.button-variable-item-36').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    
          cy.get('.woocommerce-message').should('contain', '× “Apollo Running Short” foram adicionados')
    
    });
    
    });