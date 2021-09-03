// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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

// Tugas Akhir
Cypress.Commands.add('loginberhasil', () => {
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('e@dojobox.id')
            .should('have.value', 'e@dojobox.id')
        cy.get('#input-password').type('admin')
            .should('have.value', 'admin')
        cy.contains('Login').click()
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
Cypress.Commands.add('lihatfacilitator', () => {
        cy.get('#dataTable_filter > label > .form-control').type('xiahou1@gmail.com{enter}')
})
