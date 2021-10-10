// Hacklab
Cypress.Commands.add('loginrexus', () => {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button login
        cy.get('.btn').click({force:true})
})
Cypress.Commands.add('loginliuw', () => {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('liuw7554@gmail.com')
            .should('have.value', 'liuw7554@gmail.com')
        cy.get('#password').type('0987654321')
            .should('have.value', '0987654321')
        // Button login
        cy.get('.btn').click()
})
