// custom command
// Cypress.Commands.add('login', () => {
//     cy.visit('https://bukalapak.com')
//     cy.contains('Daftar').click()
// })

import 'cypress-file-upload'

Cypress.Commands.add('login', () => {
    cy.visit('https://demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type('Zilong').should('have.value', 'Zilong')
    cy.get('#loginpassword').type('zilong123').should('have.value', 'zilong123')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.contains('Zilong').should('exist')
})

// Sprint 5 - Tugas Akhir
Cypress.Commands.add('loginberhasil', () => {
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('e@dojobox.id')
            .should('have.value', 'e@dojobox.id')
        cy.get('#input-password').type('admin')
            .should('have.value', 'admin')
        cy.contains('Login').click()
        cy.wait(5000)
})
Cypress.Commands.add('logingagal', () => {
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('er@dojobox.id')
            .should('have.value', 'er@dojobox.id')
        cy.get('#input-password').type('admin')
            .should('have.value', 'admin')
        cy.contains('Login').click()
        cy.contains('OK').click()
})
// Cypress.Commands.add('lihatfacilitator', () => {
//     cy.wait(3000)
//     cy.get('#dataTable_filter > label > .form-control').type('xiahou1@gmail.com{enter}')
//     cy.wait(3000)
//     cy.get('[href="facilitator/detail/332"]').click({force: true})
//     cy.get('.btn-outline-primary').click()
// })

// Cy wait
Cypress.Commands.add('timewait', () => {
    cy.wait(7000)
})


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