/// <reference types="cypress" />

describe('make sure explicit checbox works', () => {
  it('clicks the checkbox', () => {
    cy.visit('http://localhost:8002/');

    // cy.get('#Explicit').click();

    cy.get('.filters__form-group')
      .first()
      .find('[type="checkbox"]')
      .uncheck()
      .should('be.not.checked');
  });
});
