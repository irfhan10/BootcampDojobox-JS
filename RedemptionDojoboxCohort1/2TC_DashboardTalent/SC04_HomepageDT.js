describe('Homepage - Dashboard Talent', function () {
    it('TC01_SC04 - TC02_SC04', function() {
        cy.loginrexus()
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('input').type('Quality Control {enter}')
        cy.wait(3000)
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})