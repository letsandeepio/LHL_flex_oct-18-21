/// <reference types="cypress" />

describe('tests for the search input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8002/');
    cy.get('.radius').as('searchInput');
  });

  it('can type into the search field', () => {
    cy.get('@searchInput')
      .type('Daft Punk', { delay: 300 })
      .should('have.value', 'Daft Punk');
  });

  it('use Back space inside the search field', () => {
    cy.get('@searchInput')
      .type('Dart{backspace}{backspace}ft Punk', { delay: 300 })
      .should('have.value', 'Daft Punk');
  });
});
