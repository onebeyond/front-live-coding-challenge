/* eslint-disable no-undef */
describe('Renders Home screen', () => {
  it('renders correctly', () => {
    cy.intercept('https://front-live-coding-api.herokuapp.com/phones/1').as('fetchPhone');
    
    cy.visit('/details/1');

    cy.get('[data-cy="detail-screen"]').should('be.visible');

    cy.wait('@fetchPhone').then(() => {
      cy.get('[data-cy="detail-screen-content"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-back-button"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-name"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-description"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-price"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-proccessor"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-ram"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-screen"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-color"]').should('be.visible');
      cy.get('[data-cy="detail-screen-content-image"]').should('be.visible');
    })
  });

  it('should navigate to home screen', () => {
    cy.get('[data-cy="detail-screen-content-back-button"]').should('be.visible').click();
  });
});