describe('Create Company - Negatif Case', function () {
    it('TC06_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.wait(2000)
        // Button create company
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .w-100 > .text-danger')
            .should('exist', 'The company name field is required.')
        cy.get(':nth-child(2) > .w-100 > .text-danger')
            .should('exist', 'The province field is required.')
        cy.get(':nth-child(3) > .w-100 > .text-danger')
            .should('exist', 'The city field is required.')
    }),
    it('TC07_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.wait(2000)
        // Button create company
        cy.get('.btn').click()
        cy.get('#province').select('BANTEN', {force: true}).should('exist', 'BANTEN')
        cy.get('#city').select('KOTA TANGERANG', {force:true}).should('exist', 'KOTA TANGERANG')
        // Button create company
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .w-100 > .text-danger')
            .should('exist', 'The company name field is required.')
    }),
    it('TC08_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.wait(2000)
        // Button create company
        cy.get('.btn').click()
        cy.get('#company_name').type('Nix Comp').should('have.value', 'Nix Comp')
         // Button create company
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .w-100 > .text-danger')
            .should('exist', 'The province field is required.')
        cy.get(':nth-child(3) > .w-100 > .text-danger')
            .should('exist', 'The city field is required.')
    }),
    it('TC010_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.wait(2000)
        cy.get('#company_name').type('Nix Comp').should('have.value', 'Nix Comp')
        cy.get('#province').select('BANTEN', {force: true}).should('exist', 'BANTEN')
        cy.get('#city').select('KOTA TANGERANG', {force:true}).should('exist', 'KOTA TANGERANG')
        cy.get('.text-muted').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('Create Company - Positif Case', function () {
    it('TC01_SC05 - TC02_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.wait(2000)
        cy.get('#company_name').type('Nix Comp').should('have.value', 'Nix Comp')
        cy.get('#province').select('BANTEN', {force: true}).should('exist', 'BANTEN')
        cy.get('#city').select('KOTA TANGERANG', {force:true}).should('exist', 'KOTA TANGERANG')
        // Button create company ini sengaja di non-aktifkan terlebih dahulu, karena untuk melihat
        // case negatif dan case yg lainnya, kemudian bisa aktifkan
        // Button create company
        //cy.get('.btn').click()
    }),
    it('TC09_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.wait(2000)
        cy.get('.text-muted').click()
    }),
    it('TC011_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.get(':nth-child(2) > .hl-primary-font').click()
        cy.get('h1').should('have.text', 'Page Not Found')
    }),
    it('TC012_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.get(':nth-child(3) > .hl-primary-font').click()
        cy.get('h1').should('have.text', 'Page Not Found')
    }),
    it('TC013_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.get(':nth-child(5) > .hl-primary-font').click()
        cy.get('h1').should('have.text', 'Page Not Found')
    }),
    it('TC014_SC05', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.dropdown-menu > .cursor-pointer').click({force:true})
        cy.get(':nth-child(6) > .hl-primary-font').click()
        cy.get('h1').should('have.text', 'Page Not Found')
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})