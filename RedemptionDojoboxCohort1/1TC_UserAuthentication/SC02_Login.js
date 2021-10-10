describe('Login Pertama Kali', function () {
    // Login pertama kali yg akan ke halaman /category dan /skill
    // Gunakan beberapa akun user untuk menjalankan case tertentu
    it('TC01_SC02', function() {
        // Copas link verify saat klik email verifikasi
        cy.visit('https://beta.hacklab.rocks/verify-success?message=verification-success')
        // Continue Login
        cy.get('.form-control').click()
    }),
    it('TC02_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/register')
        cy.contains('Login Here').click()
        cy.get('b')
            .should('have.text', 'Login')
    }),
    it('TC03_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button login
        cy.get('.btn').click()
    }),
    it('TC04_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('080102030405')
            .should('have.value', '080102030405')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button login
        cy.get('.btn').click()
        cy.get('.text-danger')
            .should('exist', 'The email format is invalid')
    })

    it('TC07_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button Login
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .w-100 > #multiselectContainerReact').click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(13)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(15)')
            .click({force: true})
        cy.wait(3000)
        cy.get(':nth-child(3) > .w-100 > #multiselectContainerReact').click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(5)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(7)')
            .click({force: true})
        // Button Submit
        cy.get('.form-control').click({force: true}) 
    }),
    it('TC08_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button Login
        cy.get('.btn').click()
        cy.wait(3000)
        // Button Submit
        cy.get('.form-control').click({force: true})
    }),
    it('TC09_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button Login
        cy.get('.btn').click()
        cy.get('#multiselectContainerReact').click()
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN._1YkOwrSkIvJIAvNNRNP3P5 > ul > li:nth-child(15)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN._1YkOwrSkIvJIAvNNRNP3P5 > ul > li:nth-child(17)')
            .click({force: true})
        // Button Sumbit
        cy.get('.form-control').click({force: true})
        cy.get('.text-danger')
            .should('exist', 'Please select at least 3 skills')
    }),
    it('TC010_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button Login
        cy.get('.btn').click()
        cy.wait(3000)
        // Button Sumbit
        cy.get('.form-control').click({force: true})
        cy.get('.text-danger')
            .should('exist', 'The skills field is required')
    }),

    it('TC05_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button Login
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .w-100 > #multiselectContainerReact').click()
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(13)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(15)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(17)')
            .click({force: true})
        cy.wait(3000)
        cy.get(':nth-child(3) > .w-100 > #multiselectContainerReact').click()
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(5)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(7)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN.Dv7FLAST-3bZceA5TIxEN > ul > li:nth-child(9)')
            .click({force: true})
        // Button Submit
        cy.get('.form-control').click({force: true})
    }),

    it('TC06_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@mailinator.com')
            .should('have.value', 'nix@mailinator.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button Login
        cy.get('.btn').click()
        cy.get('#multiselectContainerReact').click()
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN._1YkOwrSkIvJIAvNNRNP3P5 > ul > li:nth-child(15)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN._1YkOwrSkIvJIAvNNRNP3P5 > ul > li:nth-child(17)')
            .click({force: true})
        cy.get('#multiselectContainerReact > div.optionListContainer._3vLmCG3bB3CM2hhAiQX1tN._1YkOwrSkIvJIAvNNRNP3P5 > ul > li:nth-child(19)')
            .click({force: true})
        // Button Sumbit
        cy.get('.form-control').click({force: true})
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('Login Kedua Kali dan Seterusnya', function () {
    // Login ke dua kali dan seterusnya
    it('TC011_SC02', function() {
        cy.loginrexus()
    }),
    it('TC012_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('typonix@gmail.com')
            .should('have.value', 'typonix@gmail.com')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button login
        cy.get('.btn').click()
    }),
    it('TC013_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@gmail.com')
            .should('have.value', 'nix@gmail.com')
        cy.get('#password').type('typonix123')
            .should('have.value', 'typonix123')
        // Button login
        cy.get('.btn').click()
    }),
    it('TC014_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#password').type('nix12345')
            .should('have.value', 'nix12345')
        // Button login
        cy.get('.btn').click()
        cy.get('.text-danger')
            .should('exist', 'The email field is required')
    }),
    it('TC015_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('nix@gmail.com')
            .should('have.value', 'nix@gmail.com')
        // Button login
        cy.get('.btn').click()
        cy.get('.text-danger')
            .should('exist', 'The password field is required')
    }),
    it('TC016_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        // Button login
        cy.get('.btn').click()
        cy.get('.text-danger')
            .should('exist', 'The email field is required')
        cy.get('.text-danger')
            .should('exist', 'The password field is required')
    }),
    it('TC017_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('.text-center > .hl-font-link').click()
    }),
    it('TC018_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('.ml-auto > .normal-font > .hl-font-link').click()
    }),

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('Login Setelah Ganti Password', function () {
    // Contoh akun yg sudah berhasil ubah password
    it('TC019_SC02', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('#email').type('liuw7554@gmail.com')
            .should('have.value', 'liuw7554@gmail.com')
        cy.get('#password').type('0987654321')
            .should('have.value', '0987654321')
        // Button login
        cy.get('.btn').click()
    }),

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})