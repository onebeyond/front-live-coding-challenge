/* eslint-disable no-undef */
describe('Renders Home screen', () => {
  it('renders correctly', () => {
    cy.intercept('https://front-live-coding-api.herokuapp.com/phones').as('fetchPhones');
    
    cy.visit('/');
    
    cy.wait('@fetchPhones').then(({ response }) => {
      const totalItems = response.body.length;
      cy.get('[data-cy="phone-card"]').should('have.length', totalItems);
      cy.get('[data-cy="phone-card-name"]').should('be.visible');
      cy.get('[data-cy="phone-card-price"]').should('be.visible');
      cy.get('[data-cy="phone-card-see-detail-button"]').should('be.visible');
      cy.get('[data-cy="phone-card-image"]').should('be.visible');
    })
  });

  it('should navigate to detail screen', () => {
    cy.get('[data-cy="phone-card-see-detail-button"]').eq(1).click();
    cy.get('[data-cy="detail-screen"]').should('be.visible');
  });
});