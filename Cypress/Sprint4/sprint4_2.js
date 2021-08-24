describe('Kumpulan Test Case', function () {
    it('tc-1', function() {
        // cy.visit('https://bukalapak.com')
        // cy.get('.bl-link > .pr-4').click()
        // cy.get('.bl-text-field__inner').type('Irfan')
        // cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        // cy.get('select').select('audi')
        // cy.get('[value="Bike"]').check()
        
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Irfan')
        cy.get('#lastName').type('Irmawan')
        cy.get('#userEmail').type('irmawanirfan3@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('1234567890')
        //cy.get('.subjects-auto-complete__value-container').type('Belajar Cypress')
        //cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').check()
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#currentAddress').type('Kab. Tangerang')
        cy.get('#submit').click()

    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})