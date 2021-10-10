describe('User Profile Belum Lengkap', function () {
    it('TC01_SC06 - TC06_SC06', function() {
        cy.loginrexus()
        // Personal Information
        cy.get('#province').select('DKI JAKARTA', {force:true}).should('exist', 'DKI JAKARTA')
        cy.get('#city').select('KOTA JAKARTA SELATAN', {force:true}).should('exist', 'KOTA JAKARTA SELATAN')
        cy.get('#marital_status').select('Single', {force:true}).should('exist', 'Single')

        // Job & Skill Interest
        cy.get('#industry_category').type('Computer Software{downarrow}{enter}')
        cy.get('#industry_category').type('Robotics{downarrow}{enter}')
        cy.get('#industry_category').type('E-Commerce{downarrow}{enter}')

        // Background Information Summary 
        cy.get('#about_you').type('Saya tester')
        cy.get(':nth-child(5) > :nth-child(3) > .w-100 > .undefined').type('PT. Test 123')
        cy.get(':nth-child(5) > :nth-child(4)').type('Tester Manual')
        cy.get(':nth-child(5) > :nth-child(5)').type('Testing Aplikasi Secara Manual')
        cy.get(':nth-child(5) > .form-row > :nth-child(1)')
            .click().type('{selectall}','{backspace}').type('12 Dec 2019').type('{enter}')
        cy.get(':nth-child(5) > .form-row > :nth-child(2)')
            .click().type('{selectall}','{backspace}').type('12 Dec 2020').type('{enter}')

        // Background Information Education
        cy.get(':nth-child(9) > :nth-child(3)').type('Universitas Testing')
        cy.get(':nth-child(9) > :nth-child(4)').select('Bachelor (S1){downarrow}{enter}').should('exist','Bachelor (S1)')
        cy.get(':nth-child(9) > :nth-child(5)').type('Teknik Informatika')
        cy.get(':nth-child(9) > :nth-child(6)').type('Lulus 4 Tahun')
        cy.get(':nth-child(9) > .form-row > :nth-child(1)')
            .click().type('{selectall}','{backspace}').type('12 Sep 2015').type('{enter}')
        cy.get(':nth-child(9) > .form-row > :nth-child(2)')
            .click().type('{selectall}','{backspace}').type('12 Okt 2019').type('{enter}')
        // Button save changes
        cy.get('.py-5 > :nth-child(2) > .normal-font').click()
    }),
    it('TC07_SC06', function() {
        cy.loginrexus()
        // Personal Information
        cy.get('#province').select('DKI JAKARTA', {force:true}).should('exist', 'DKI JAKARTA')
        cy.get('#city').select('KOTA JAKARTA SELATAN', {force:true}).should('exist', 'KOTA JAKARTA SELATAN')
        cy.get('#marital_status').select('Single', {force:true}).should('exist', 'Single')
        // Button save changes
        cy.get('.py-5 > :nth-child(2) > .normal-font').click()
    }),
    it('TC08_SC06', function() {
        cy.loginrexus()
        // Job & Skill Interest
        cy.get('#industry_category').type('Computer Software{downarrow}{enter}')
        cy.get('#industry_category').type('Robotics{downarrow}{enter}')
        cy.get('#industry_category').type('E-Commerce{downarrow}{enter}')
        // Button save changes
        cy.get('.py-5 > :nth-child(2) > .normal-font').click()
    }),
    it('TC09_SC06', function() {
        cy.loginrexus()
        // Background Information Summary 
        cy.get('#about_you').type('Saya tester')
        cy.get(':nth-child(5) > :nth-child(3) > .w-100 > .undefined').type('PT. Test 123')
        cy.get(':nth-child(5) > :nth-child(4)').type('Tester Manual')
        cy.get(':nth-child(5) > :nth-child(5)').type('Testing Aplikasi Secara Manual')
        cy.get(':nth-child(5) > .form-row > :nth-child(1)')
            .click().type('{selectall}','{backspace}').type('12 Dec 2019').type('{enter}')
        cy.get(':nth-child(5) > .form-row > :nth-child(2)')
            .click().type('{selectall}','{backspace}').type('12 Dec 2020').type('{enter}')
        // Button save changes
        cy.get('.py-5 > :nth-child(2) > .normal-font').click()
    }),
    it('TC010_SC06', function() {
        cy.loginrexus()
        // Background Information Education
        cy.get(':nth-child(9) > :nth-child(3)').type('Universitas Testing')
        cy.get(':nth-child(9) > :nth-child(4)').select('Bachelor (S1){downarrow}{enter}').should('exist','Bachelor (S1)')
        cy.get(':nth-child(9) > :nth-child(5)').type('Teknik Informatika')
        cy.get(':nth-child(9) > :nth-child(6)').type('Lulus 4 Tahun')
        cy.get(':nth-child(9) > .form-row > :nth-child(1)')
            .click().type('{selectall}','{backspace}').type('12 Sep 2015').type('{enter}')
        cy.get(':nth-child(9) > .form-row > :nth-child(2)')
            .click().type('{selectall}','{backspace}').type('12 Okt 2019').type('{enter}')
        // Button save changes
        cy.get('.py-5 > :nth-child(2) > .normal-font').click()
    })

// Untuk yg Background Information Education tidak bisa, karena :nth-child(3) 
// berubah-ubah (:nth-child(4), :nth-child(5)) dst sehingga menjadi tidak ditemukan, 
// hal ini di sebabkan saat input Job & Skill Interest
// menggunakan enter, sehingga pada Background Information Summary form nya auto bertambah

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('User Profile - Edit Profile', function () {
    it('TC012_SC06, TC013_SC06, TC014_SC06,', function() {
        // Edit personal information
        cy.loginliuw()
        cy.get('#navbarDropdown').click({force:true})
        cy.get('[href="/profile"]').click()
        // Button edit profile
        cy.get('.w-150px').click()
        cy.get('.my-3 > div > .hc-ic > path').attachFile('contoh.jpg')
        cy.get('#fullname').type('{selectall}','{backspace}').type('Ace Testing')
        cy.get('#phone_number').type('{selectall}','{backspace}').type('08555333111')
        // Button save changes
        cy.get('.py-5 > :nth-child(2) > .normal-font').click({force:true})
    }),
    // it('TC015_SC06', function() {
    //     // Edit job & skill interest
    //     cy.loginrexus()
    //     cy.get('#navbarDropdown').click()
    //     cy.get('[href="/profile"]').click()
    //     // Button edit profile
    //     cy.get('.w-150px').click()
    //     cy.get('#skill_interest').type('Quality Assurance{downarrow}{enter}')
    //     // Button save changes
    //     cy.get('.py-5 > :nth-child(2) > .normal-font').click()
    // }),
    it('TC019_SC06', function() {
        cy.loginliuw()
        cy.get('#navbarDropdown').click()
        cy.get('[href="/profile"]').click()
        cy.get('.ml-auto').click({force:true})
    }),
    it('TC020_SC06', function() {
        cy.loginliuw()
        cy.get('#navbarDropdown').click()
        cy.get('[href="/profile"]').click()
        // Button edit profile
        cy.get('.w-150px').click()
        cy.get('.sc-pGacB').attachFile('contoh.jpg')
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})