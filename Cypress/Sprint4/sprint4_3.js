describe('Kumpulan Test Case Sprint 4', function () {
    it('Test 1', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Irfan').should('have.value', 'Irfan')
        cy.get('#et_pb_contact_email_0').type('irfan@gmail.com').should('have.value', 'irfan@gmail.com')
        cy.get('.et_pb_contact_submit').click()
    }),
    it('Test 2', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="male"]').check().should('have.value', 'male')
    }),
    it('Test 3', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').check().should('have.value', 'Bike')
    }),
    it('Test 4', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('audi').should('have.value', 'audi')
    }),
    it('Test 5', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').should('have.text', 'Button success')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})