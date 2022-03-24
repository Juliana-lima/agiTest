/// <reference types="cypress" />

describe('Testando a funcionalidade do campo de busca', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#search-open').invoke('show').click();
    });
    it('Deve buscar artigos com caracteres válidos', () => {
        
        cy.get('.desktop-search > .search-form > label > .search-field').type('Artigos de teste');
        cy.get('.desktop-search > .search-form > .search-submit').click();
        cy.get('.archive-title').should('contain', 'Resultados da busca por: Artigos de teste');

    });
    it('Deve buscar artigos com caracteres inválidos ', () => {
        cy.get('.desktop-search > .search-form > label > .search-field').type('s&*@d');
        cy.get('.desktop-search > .search-form > .search-submit').click();
        cy.get('.entry-title').should('contain', 'Nenhum resultado');
    });

});