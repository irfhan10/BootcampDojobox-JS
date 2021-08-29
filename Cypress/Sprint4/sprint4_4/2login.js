describe('Tugas', function () {
    it('Login', function() {
        cy.visit('https://demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.wait(2000)
        cy.get('#loginusername').type('Zilong').should('have.value', 'Zilong')
        cy.get('#loginpassword').type('zilong123').should('have.value', 'zilong123')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('Zilong').should('exist')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})