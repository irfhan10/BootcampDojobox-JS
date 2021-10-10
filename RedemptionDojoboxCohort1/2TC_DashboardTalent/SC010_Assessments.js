describe('Assessement', function () {
    it('TC01_SC010 & TC03_SC010', function() {
        cy.loginrexus()
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('a > .card > .card-body').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})