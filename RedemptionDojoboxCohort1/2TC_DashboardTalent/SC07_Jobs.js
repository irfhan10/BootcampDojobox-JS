describe('Jobs - User sudah upload CV', function () {
    it('TC01_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
    }),
    it('TC02_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.p-4').type('IT Project Manager')
        // Button search
        cy.get('.form-group > .normal-font').click()
    }),

    // Untuk case TC04_SC07, TC05_SC07, TC06_SC07, TC07_SC07 belum ke handle, belum tau caranya

    it('TC08_SC07 & TC010_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10').click()
        cy.get('.align-content-between > :nth-child(1) > .medium-font')
            .should('have.text', 'Business Development Manager')
        // Button apply
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .normal-font').click()
    }),
    it('TC011_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10').click()
        cy.get('.align-content-between > :nth-child(1) > .medium-font')
            .should('have.text', 'Business Development Manager')
        // Button apply
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .normal-font').click()
    }),

    // Untuk case TC09_SC07, TC012_SC07, TC013_SC07, TC014_SC07, TC015_SC07 modal quiz tidak tampil
    // it('TC09_SC07', function() {
    //     cy.loginrexus()
    //     cy.get(':nth-child(2) > .nav-link').click()
    //     cy.get('.p-4').type('IT Project Manager')
    //     // Button search
    //     cy.get('.form-group > .normal-font').click()
    //     cy.get('.col-md-6 > .card > .card-body').click()
    //     cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .normal-font').click({force:true})
    // }),

    it('TC017_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10').click()
        cy.get('.align-content-between > :nth-child(1) > .medium-font')
            .should('have.text', 'Business Development Manager')
        // Button share
        cy.get('.d-inline-block').click()
        cy.get(':nth-child(1) > svg > circle').click({force:true})
    }),
    it('TC018_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10').click()
        cy.get('.align-content-between > :nth-child(1) > .medium-font')
            .should('have.text', 'Business Development Manager')
        // Button share
        cy.get('.d-inline-block').click()
        cy.get(':nth-child(2) > svg > circle').click({force:true})
    }),
    it('TC019_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10').click()
        cy.get('.align-content-between > :nth-child(1) > .medium-font')
            .should('have.text', 'Business Development Manager')
        // Button share
        cy.get('.d-inline-block').click()
        cy.get(':nth-child(3) > svg > circle').click({force:true})
    }),
    it('TC020_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10').click()
        cy.get('.align-content-between > :nth-child(1) > .medium-font')
            .should('have.text', 'Business Development Manager')
        // Button share
        cy.get('.d-inline-block').click()
        cy.get(':nth-child(4) > svg > circle').click({force:true})
    }),
    it('TC021_SC07', function() {
        cy.loginrexus()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10').click()
        cy.get('.align-content-between > :nth-child(1) > .medium-font')
            .should('have.text', 'Business Development Manager')
        // Button share
        cy.get('.d-inline-block').click()
        cy.get(':nth-child(5) > svg > circle').click({force:true})
    }),

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('Jobs - User belum upload CV pada profile', function () {
    it('TC022_SC07, TC023_SC07, TC024_SC07', function() {
        // Dijadikan satu flow
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('atok@mailinator.com')
            .should('have.value', 'atok@mailinator.com')
        cy.get('#password').type('123456789')
            .should('have.value', '123456789')
        // Button login
        cy.get('.btn').click()

        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10').click()
        cy.get('.align-content-between > :nth-child(1) > .medium-font')
            .should('have.text', 'Business Development Manager')
        // Button apply
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .normal-font').click()
        // Link close and go back
        cy.get('.pl-3').click()
        cy.wait(3000)
        // Button apply
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .normal-font').click()
        // Button complete a CV now pada modal You cannot apply
        cy.get('.p-2 > .btn').click()
    }),
    
    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})