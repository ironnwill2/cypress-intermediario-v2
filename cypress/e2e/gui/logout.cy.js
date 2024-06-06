describe('logout', () => {

    beforeEach(()=>{
        cy.login()
        cy.visit('/')
    })



    it('passes', () => {
      cy.logout()
  
      cy.url().should('be.equal',`${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })