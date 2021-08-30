describe('Tugas 4 - Sprint 5', function () {
    before(() => {
        cy.login()
    }),

    it('Pembelian Barang', function() {
        cy.wait(3000)
        cy.contains('HTC One M9').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()
        cy.wait(3000)
        cy.get('#next2').click()
        cy.contains('Dell i7 8gb').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()
        cy.wait(3000)
        cy.get('#next2').click()
        cy.contains('Apple monitor 24').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.wait(3000)
        cy.get('.col-lg-1 > .btn').click()
        cy.wait(2000)
        cy.get('#name').type('Zilong').should('have.value', 'Zilong')
        cy.get('#country').type('Singapore').should('have.value', 'Singapore')
        cy.get('#city').type('Changi Bay').should('have.value', 'Changi Bay')
        cy.get('#card').type('12345678900').should('have.value', '12345678900')
        cy.get('#month').type('December').should('have.value', 'December')
        cy.get('#year').type('2024').should('have.value', '2024')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(2000)
        cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!')
        cy.get('.confirm').click()
        cy.get('#nava').should('exist')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})