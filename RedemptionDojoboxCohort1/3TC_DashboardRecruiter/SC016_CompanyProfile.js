describe('Company Profile - Positif Case', function () {
    it('TC01_SC016 - TC04_SC016', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        
        cy.get('#navbarDropdown').click()
        cy.get('[href="/recruiter/profile"]').click()
        cy.wait(5000)
        cy.get('.rounded-pill').click({force:true})

        cy.get('.avatar').attachFile('contoh.jpg')

        // TC04_SC016
        cy.get('#province').select('DKI JAKARTA', {force: true}).should('exist', 'DKI JAKARTA')
        cy.get('#city').select('KOTA JAKARTA BARAT', {force:true}).should('exist', 'KOTA JAKARTA BARAT')
        // Button save changes
        cy.get('.pl-1 > .normal-font').click()
    }),

    it('TC08_SC016', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get('#navbarDropdown').click()
        cy.get('[href="/recruiter/profile"]').click()
        cy.wait(5000)
        cy.get('.rounded-pill').click({force:true})

        cy.get('#about_company')
            .type('Company ini merupakan company yang bergerak dibilang teknologi informasi')
        cy.get('#company_address')
            .type('Jl. Daan Mogot, KM 30 No. 15')
        cy.get('#industry_category')
            .select('Computer & Network Security').should('exist','Computer & Network Security')
        cy.get('#website_address').type('rexuscorp.com')
        cy.get('#number_of_employee').select('50-300').should('exist','50-300')
        cy.get('#benefit').type('BPJS, Asuransi, Outing')
        // Button save changes
        cy.get('.pl-1 > .normal-font').click()
    }),

    it('TC09_SC016', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get('#navbarDropdown').click()
        cy.get('[href="/recruiter/profile"]').click()
        cy.wait(5000)
        cy.get('.rounded-pill').click({force:true})

        cy.get('#about_company')
            .type('Company ini merupakan company yang bergerak dibilang teknologi informasi')
        cy.get('#company_address')
            .type('Jl. Daan Mogot, KM 30 No. 15')
        cy.get('#industry_category')
            .select('Computer & Network Security').should('exist','Computer & Network Security')
        cy.get('#website_address').type('rexuscorp.com')
        cy.get('#number_of_employee').select('50-300').should('exist','50-300')
        cy.get('#benefit').type('BPJS, Asuransi, Outing')
        // Button reset
        cy.get('.pr-0 > .normal-font').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('Company Profile - Negatif Case', function () {
    it('TC010_SC016', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get('#navbarDropdown').click()
        cy.get('[href="/recruiter/profile"]').click()
        cy.wait(5000)
        cy.get('.rounded-pill').click({force:true})

        // Button save changes
        cy.get('.pl-1 > .normal-font').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})