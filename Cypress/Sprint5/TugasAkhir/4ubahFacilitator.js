describe('Ubah Facilitator', function() {
    it('Login Facilitator', function() {
        cy.loginberhasil()
    }),
    it('Lihat Facilitator dan Ubah Facilitator', function() {
        //Lihat Facilitator
        cy.wait(3000)
        cy.get('#dataTable_filter > label > .form-control').type('xiahou1@gmail.com{enter}')
        cy.wait(3000)
        cy.get('[href="facilitator/detail/332"]').click({force: true})

        //Ubah Facilitator
        cy.contains('Ubah Data').click()
        cy.get('#user_province_id').select('JAWA BARAT')
            .should('have.value', '32')
        cy.get('#user_city_id').select('KOTA BANDUNG')
            .should('have.value', '3273')
        cy.get('#user_subdistrict_id').select('Ujung Berung')
            .should('have.value', '327326')
        cy.get('#user_address')
            .type('{selectall}','{backspace}')
            .type('Jl. Ujung Berung 9, Kota Bandung')
            .should('have.value', 'Jl. Ujung Berung 9, Kota Bandung')
        cy.get('.custom-control').click()
        cy.get('input[type="file"]').attachFile('contoh.jpg')
            .should('exist')
        cy.get('#edit').click()
        cy.wait(2000)
        cy.contains('Perubahan fasilitator berhasil diproses')
            .should('have.text', 'Perubahan fasilitator berhasil diproses')
        cy.contains('OK').click({force: true})
        cy.go('back')
    })
})
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})