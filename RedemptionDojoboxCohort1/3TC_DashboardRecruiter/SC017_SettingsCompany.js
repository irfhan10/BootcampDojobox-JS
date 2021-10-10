describe('Settings Company', function () {
    it('TC01_SC017 & TC02_SC017', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()

        cy.get('#navbarDropdown').click()
        cy.get('[href="/recruiter/reports"]').click()

        // TC02_SC017
        cy.get('.p-4').type('Data')
        cy.get('form > :nth-child(2) > .form-control').type('Data user belum ada')
        // Button send report
        cy.get('.pr-0 > .normal-font').click({force:true})
    }),
    
    it('TC04_SC017', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()

        cy.get('#navbarDropdown').click()
        cy.get('[href="/recruiter/reports"]').click()

        cy.get('.p-4').type('Data')
        cy.get('form > :nth-child(2) > .form-control').type('Data user belum ada')
        // Button reset
        cy.get('.pl-1 > .normal-font').click({force:true})
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})