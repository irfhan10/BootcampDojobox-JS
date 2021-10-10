describe('Settings User', function () {
    it('TC01_SC011', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('[href="/settings"]').click()
        cy.get('.col-md-9 > .card > .card-header > .pt-2 > b')
            .should('exist', 'Username & Password')
    }),
    it('TC06_SC011', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('[href="/settings"]').click()
        cy.get('li.large-font > .link-white').click()
        cy.get('.col-md-9 > .card > .card-header > .pt-2 > b')
            .should('exist', 'Report Problem')
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})