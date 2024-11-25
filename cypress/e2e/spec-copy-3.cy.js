describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').click()
    cy.get('body').type("miley cyrus{enter}")
    cy.get('[data-hveid="CBEQAA"] > .nPDzT > .YmvwI').click()
  })
})