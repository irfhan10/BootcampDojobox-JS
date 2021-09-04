describe('Non-aktifkan Facilitator', function() {
    it('Login Facilitator', function() {
        cy.loginberhasil()
    }),
    it('Lihat Facilitator dan Non-aktifkan Facilitator', function() {
        //Lihat Facilitator
        cy.wait(3000)
        cy.get('#dataTable_filter > label > .form-control').type('xiahou1@gmail.com{enter}')
        cy.wait(3000)
        cy.get('[href="facilitator/detail/332"]').click({force: true})

        //Non-aktifkan Facilitator
        cy.contains('Ubah Data').click()
        cy.get('#user_is_active').select('Nonaktif')
        cy.wait(3000)
        cy.get('#edit').click()
        cy.contains('Perubahan fasilitator berhasil diproses')
            .should('have.text', 'Perubahan fasilitator berhasil diproses')
        cy.contains('OK').click({force: true})
        cy.go('back')
        cy.get('#user_is_active > .badge')
            .should('have.text', 'Non Aktif')
    })
})
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})