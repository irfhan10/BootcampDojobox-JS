describe('Tugas', function () {
    it('Registrasi', function() {
        cy.visit('https://demoblaze.com/index.html')
        cy.get('#signin2').click()
        cy.wait(2000)
        cy.get('#sign-username').type('Zilong').should('have.value', 'Zilong')
        cy.get('#sign-password').type('zilong123').should('have.value', 'zilong123')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})