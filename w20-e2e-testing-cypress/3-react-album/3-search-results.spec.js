/// <reference types="cypress" />

describe('test search results', () => {
  it('make sure results are loaded', () => {
    cy.visit('http://localhost:8002/');

    cy.intercept('GET', '**/search*', { fixture: 'result' });

    cy.get('.radius').type('Daft Punk', { delay: 300 });

    cy.get(".album").should('contain',"Homework")
  });
});
