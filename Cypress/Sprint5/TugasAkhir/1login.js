describe('Login', function() {
    it('Login Berhasil', function() {
        cy.loginberhasil()
    }),
    it('Login Gagal', function() {
        cy.logingagal()
    })
})
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})