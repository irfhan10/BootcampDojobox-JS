describe('List Data All Applicant', function () {
    it('TC013_SC01', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get('.text-black').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})