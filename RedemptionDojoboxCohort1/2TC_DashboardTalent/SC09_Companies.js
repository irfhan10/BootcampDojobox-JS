describe('Companies', function () {
    it('TC01_SC09, TC02_SC09, TC07_SC09', function() {
        cy.loginrexus()
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.p-4').type('Tokopedia')
        // Button search
        cy.get('.form-group > .normal-font').click()
        cy.get('.col-md-6 > .card > .card-body').click()
        cy.get('.mb-2 > b').should('have.text', 'Tokopedia')
    })

    // Untuk test case TC03_SC09, TC04_SC09, TC05_SC09, TC06_SC09 belum ke handle, belum tau caranya

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})