describe('Register - Positif Case', function () {
    it('TC01_SC01 - TC02_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get('#name').type('Nix')
            .should('have.value', 'Nix')
        cy.get('#phone_number').type('08010305070')
            .should('have.value', '08010305070')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button Create your Hacklab account
        cy.get('.btn').click({force:true})
    }),
    
    it('TC09_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get(':nth-child(2) > .hl-primary-font').click()
        cy.get('h1')
            .should('have.text', 'Page Not Found')
    }),
    it('TC010_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get(':nth-child(3) > .hl-primary-font').click()
        cy.get('h1')
            .should('have.text', 'Page Not Found')
    }),
    it('TC011_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get(':nth-child(5) > .hl-primary-font').click()
        cy.get('h1')
            .should('have.text', 'Page Not Found')
    }),
    it('TC012_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get(':nth-child(6) > .hl-primary-font').click()
        cy.get('h1')
            .should('have.text', 'Page Not Found')
    }),
    it('TC013_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get(':nth-child(6) > .hl-primary-font').click()
        cy.contains('Back to home').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('Register - Negatif Case', function () {
    it('TC04_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get('#name').type('Nix')
            .should('have.value', 'Nix')
        cy.get('#phone_number').type('08987654321')
            .should('have.value', '08987654321')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button Create your Hacklab account
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .w-100 > .text-danger')
            .should('exist', 'The phone number has already been taken')
    }),
    it('TC05_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get('#name').type('Rexus Liuw')
            .should('have.value', 'Rexus Liuw')
        cy.get('#phone_number').type('089080706050')
            .should('have.value', '089080706050')
        cy.get('#email').type('liuw7554@gmail.com')
            .should('have.value', 'liuw7554@gmail.com')
        cy.get('#password').type('rexus12345')
            .should('have.value', 'rexus12345')
        // Button Create your Hacklab account
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .w-100 > .text-danger')
            .should('exist', 'The email has already been taken')
    }),
    it('TC06_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.get('#name').type('Nix')
            .should('have.value', 'Nix')
        cy.get('#phone_number').type('08987654321')
            .should('have.value', '08987654321')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix')
            .should('have.value', 'nix')
        // Button Create your Hacklab account
        cy.get('.btn').click()
        cy.get(':nth-child(4) > .w-100 > .text-danger')
            .should('exist', 'The password must be at least 8 characters')
    }),
    it('TC07_SC01', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        // Button Create your Hacklab account
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .w-100 > .text-danger')
            .should('exist', 'The name field is required')
        cy.get(':nth-child(2) > .w-100 > .text-danger')
            .should('exist', 'The phone number field is required')
        cy.get(':nth-child(3) > .w-100 > .text-danger')
            .should('exist', 'The email field is required')
        cy.get(':nth-child(4) > .w-100 > .text-danger')
            .should('exist', 'The password field is required')
    }),
    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})