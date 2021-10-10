describe('Jobs Listing', function () {
    it('TC01_SC015 & TC02_SC015', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.w-150px').click()
    }),
    it('TC03_SC015', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.text-white > .mr-2').click()
    }),
    it('TC013_SC015', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get(':nth-child(2) > .nav-link').click()
        //cy.get(':nth-child(1) > .card-body > .row > .col-md-3 > .m-2').select('Close')
    }),
    it('TC014_SC015, TC015_SC015, TC016_SC015', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card-body > .row > .col-md-5').click()
        cy.get(':nth-child(2) > .w-120px').click()

        // Edit job
        // Job description
        cy.get('#title').click()
            .type('{selectall}{backspace}').type('Project Management Office')
        cy.get('#job_role').select('Project Officer')
        cy.get('#job_type').select('Full-Time')
        cy.get('#job_level').select('Junior Level')
        cy.get('#province').select('DKI JAKARTA').should('exist','DKI JAKARTA')
        cy.get('#city').select('KOTA JAKARTA SELATAN').should('exist','KOTA JAKARTA SELATAN')
        cy.get('#can_work_remotely').check({force:true})
        cy.get('#description').click()
            .type('{selectall}{backspace}').type('Melakukan management project secara administratif')
        // Button next
        cy.get('.p-2 > .normal-font').click()
        // Job requirements
        cy.get('#key_responsibilitis').click()
            .type('{selectall}{backspace}').type('Membuat dokumen project, administrasi')
        cy.get('#requirements').click()
            .type('{selectall}{backspace}').type('S1, Lulusan TI/SI, Pengalaman 1 Tahun, Fresh Graduate Welcome')
        // Button next
        cy.get('.d-flex > :nth-child(2) > .normal-font').click()
        // Sallary & Benefits
        cy.get('#sallary_min').click()
            .type('{selectall}{backspace}').type('4500000')
        cy.get('#sallary_max').click()
            .type('{selectall}{backspace}').type('5000000')
        cy.get('#benefit').click()
            .type('{selectall}{backspace}').type('BPJS, Asuransi')
        // Button post a new job
        cy.get('.ml-auto > .normal-font').click()
        // Button modal berhasil
        cy.get('.sc-fubCzh').click()
    }),
    it('TC018_SC015', function() {
        cy.loginrexus()
        cy.get('#navbarDropdown').click()
        cy.get('.cursor-pointer').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .card-body > .row > .col-md-5').click()
        cy.get(':nth-child(2) > .d-flex > .ml-auto > .normal-font').click()
    })
    
Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})