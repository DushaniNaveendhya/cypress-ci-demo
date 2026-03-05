describe('Home Page Test', () => {

  it('Check if title contains Welcome', () => {
    cy.visit('index.html')
    cy.get('#title').should('have.text', 'Welcome')
  })

})