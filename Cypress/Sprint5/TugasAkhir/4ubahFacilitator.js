describe('Ubah Facilitator', function() {
    it('Login Facilitator', function() {
        cy.loginberhasil()
    }),
    it('Lihat Facilitator', function() {
        cy.lihatfacilitator()
        cy.wait(3000)
    }),
    it('Ubah Facilitator', function() {
        cy.get('.odd > .dt-center').click()
        cy.wait(2000)
        cy.contains('Ubah', {force: true}).click()
    })
})
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})