/* eslint-disable no-undef */
describe('Renders Home screen', () => {
  it('renders correctly', () => {
    cy.intercept('https://front-live-coding-api.herokuapp.com/phones/1').as('fetchPhone');
    
    cy.visit('/details/1');
    cy.get('[data-cy="loader"]').should('be.visible');
    cy.wait('@fetchPhone').then(() => {
      cy.get('[data-cy="detail-screen-content"]').should('be.visible');
      cy.get('[data-cy="phone-card-price"]').should('be.visible');
      cy.get('[data-cy="phone-card-see-detail-button"]').should('be.visible');
      cy.get('[data-cy="phone-card-image"]').should('be.visible');
    })
  });

  it('should navigate to home screen', () => {
  });
});