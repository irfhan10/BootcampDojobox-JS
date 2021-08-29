describe('Tugas', function () {
    before(() => {
        cy.login()
    }),

    it('Pembelian Barang', function() {
        
        cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch').click()
        cy.wait(2000)
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()
        cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
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