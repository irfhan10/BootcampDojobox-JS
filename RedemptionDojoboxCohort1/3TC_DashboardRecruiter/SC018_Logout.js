describe('Logout', function () {
    it('TC01_SC018', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.wait(3000)
        cy.contains('Log Out').click()
    }),
    it('TC02_SC018', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.wait(3000)
        cy.contains('Log Out').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})