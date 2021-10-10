describe('Company Dashboard', function () {
    it('TC01_SC012, TC03_SC012, TC04_SC012', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()

        // TC03_SC012
        cy.get('.w-150px').click()
        cy.go('back')
        // TC04_SC012
        cy.get('.text-black').click()

    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})