describe('Job Posting - Positif Case', function () {
    it('TC01_SC014 - TC05_SC014', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get('.w-150px').click()
        // Job description
        cy.get('#title').type('QA Tester')
        cy.get('#job_role').select('Quality Assurance')
        cy.get('#job_type').select('Full-Time')
        cy.get('#job_level').select('Junior Level')
        cy.get('#province').select('DKI JAKARTA').should('exist','DKI JAKARTA')
        cy.get('#city').select('KOTA JAKARTA BARAT').should('exist','KOTA JAKARTA BARAT')
        cy.get('#can_work_remotely').check({force:true})
        cy.get('#description').type('Melakukan pengujian terhadap aplikasi')
        // Button next
        cy.get('.p-2 > .normal-font').click()
        // Job requirements
        cy.get('#key_responsibilitis').type('Testing aplikasi web dan mobile, Membuat test case dokumen')
        cy.get('#requirements').type('S1, Lulusan TI/SI, Pengalaman 1 Tahun, Fresh Graduate Welcome')
        // Button next
        cy.get('.d-flex > :nth-child(2) > .normal-font').click()
        // Sallary & Benefits
        cy.get('#sallary_min').type('4500000')
        cy.get('#sallary_max').type('5000000')
        cy.get('#benefit').type('BPJS, Asuransi')
        // Button post a new job
        cy.get('.ml-auto > .normal-font').click()
        // Button modal berhasil
        cy.get('.sc-jSgvzq').click()
    }),

    it('TC011_SC014', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get('.w-150px').click()
        // Job description
        cy.get('#title').type('QA Tester')
        cy.get('#job_role').select('Quality Assurance')
        cy.get('#job_type').select('Full-Time')
        cy.get('#job_level').select('Junior Level')
        cy.get('#province').select('BANTEN').should('exist','BANTEN')
        cy.get('#city').select('KOTA TANGERANG').should('exist','KOTA TANGERANG')
        cy.get('#can_work_remotely').check({force:true})
        cy.get('#description').type('Melakukan pengujian terhadap aplikasi')
        // Button next
        cy.get('.p-2 > .normal-font').click()
        // Job requirements
        cy.get('#key_responsibilitis').type('Testing aplikasi web dan mobile, Membuat test case dokumen')
        cy.get('#requirements').type('S1, Lulusan TI/SI, Pengalaman 1 Tahun, Fresh Graduate Welcome')
        // Button next
        cy.get('.d-flex > :nth-child(2) > .normal-font').click()
        // Sallary & Benefits
        cy.get('#sallary_min').type('4500000')
        cy.get('#sallary_max').type('5000000')
        cy.get('#benefit').type('BPJS, Asuransi')
        // Button reset
        cy.get('.d-flex > :nth-child(2) > .normal-font').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('Job Posting - Negatif Case', function () {
    it('TC06_SC014 - TC08_SC014', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get('.w-150px').click()
        // Button next
        cy.get('.p-2 > .normal-font').click()
        // Button next
        cy.get('.d-flex > :nth-child(2) > .normal-font').click()
        // Button post a new job
        cy.get('.ml-auto > .normal-font').click()

        cy.get('.text-danger')
        .should('exist','The requirements field is required.')
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})