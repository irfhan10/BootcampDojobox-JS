describe('Lihat Facilitator', function() {
    it('Login Facilitator', function() {
        cy.loginberhasil()
    }),
    it('Lihat Facilitator', function() {
        cy.lihatfacilitator()
    })
})
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})