describe('My Applicant', function () {
    it('TC01_SC08 & TC04_SC08', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('[href="/my-applicant"]').click()
        cy.get('[data-id="Submitted"]').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})