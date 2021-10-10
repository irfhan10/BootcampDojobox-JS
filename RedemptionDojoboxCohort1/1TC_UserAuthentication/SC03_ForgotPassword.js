describe('Forgot Password - Positif Case', function () {
    // URL link reset password di copas saat buka email reset password
    it('TC01_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/login')
        cy.get('.ml-auto > .normal-font > .hl-font-link').click()
        cy.get('b').should('have.text', 'Enter your email address')
    }),
    it('TC02_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/forgot-password')
        cy.get('#email').type('rexus@mailinator.com')
            .should('have.value', 'rexus@mailinator.com')
        // Button submit
        cy.get('.btn').click()
    }),
    it('TC05_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/forgot-password')
        cy.get('.hl-font-link').click()
        cy.get('b').should('have.text', 'Login')
    }),
    it('TC06_SC03 - TC07_SC03 - TC08_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/reset-password/eyJpdiI6ImxCR0NPSTl5Wk4vV2Zzb2xHbW1Ed0E9PSIsInZhbHVlIjoiL2FscXk5NnFFdzJjVFEraERSYW5VbW9VUFdTTzBqcktyMFBBZWJUVDQ0a2owb0FlWXRUUE5YcTFPRTJzckxLK1I0bDU4ZFB5MnVhUXRqQ204U0UwY083UXZvdXcvTm1lS0lQSy9sOHdnRStNWm9sMHVKUEYrMXZrVjJvLzd5SVNzR2s2MTdhMUNzeVJ6a1VyZTJwL2luUE1oSTZ1TWZuaFlua3Y1K21aNnRVN2NnbFl6Q0gySEFXUmZMd2pMREhoaUJRYllrSHNxQlZTOHRUdnJOSVREVWtuQXYremg5VlMwV214K2I4WDJJUFRMTmVQWVdhc2RJb3p0c3htL0hCQktDRGlsNDVFZk1UTXhKYjgyazdYSFJ5WmNTYlUyZ1V6czNUNytiVWx5bDg9IiwibWFjIjoiMWEwYmVmZjlhM2Y2NGFiMTA1NmU3ZDI1NDM3MWUxODdiMWUwMDQyMjg1ODI2MjJkYTRhZmZkMWUzNTI0YzM2NSJ9')
        cy.get('#password').type('rexus12345')
        cy.get('#password_confirmation').type('rexus12345')
        // Button done 
        cy.get('.btn').click()
        cy.wait(5000)
        cy.get('b').should('have.text', 'Reset Password Success!')
        // Button continue login
        cy.get('.form-control').click()
    })

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})

describe('Forgot Password - Negatif Case', function () {
    it('TC03_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/forgot-password')
        cy.get('#email').type('belumdaftar@gmail.com')
            .should('have.value', 'belumdaftar@gmail.com')
        // Button submit
        cy.get('.btn').click()
    }),
    it('TC04_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/forgot-password')
        // Button submit
        cy.get('.btn').click()
        cy.get('.text-danger').should('exist', 'The email field is required')
    }),
    it('TC09_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/reset-password/eyJpdiI6ImxCR0NPSTl5Wk4vV2Zzb2xHbW1Ed0E9PSIsInZhbHVlIjoiL2FscXk5NnFFdzJjVFEraERSYW5VbW9VUFdTTzBqcktyMFBBZWJUVDQ0a2owb0FlWXRUUE5YcTFPRTJzckxLK1I0bDU4ZFB5MnVhUXRqQ204U0UwY083UXZvdXcvTm1lS0lQSy9sOHdnRStNWm9sMHVKUEYrMXZrVjJvLzd5SVNzR2s2MTdhMUNzeVJ6a1VyZTJwL2luUE1oSTZ1TWZuaFlua3Y1K21aNnRVN2NnbFl6Q0gySEFXUmZMd2pMREhoaUJRYllrSHNxQlZTOHRUdnJOSVREVWtuQXYremg5VlMwV214K2I4WDJJUFRMTmVQWVdhc2RJb3p0c3htL0hCQktDRGlsNDVFZk1UTXhKYjgyazdYSFJ5WmNTYlUyZ1V6czNUNytiVWx5bDg9IiwibWFjIjoiMWEwYmVmZjlhM2Y2NGFiMTA1NmU3ZDI1NDM3MWUxODdiMWUwMDQyMjg1ODI2MjJkYTRhZmZkMWUzNTI0YzM2NSJ9')
        cy.get('#password').type('rexus12345')
        cy.get('#password_confirmation').type('rexus123')
        // Button done 
        cy.get('.btn').click()
        cy.get('.text-danger')
            .should('exist', 'The password confirmation does not match.')
    }),
    it('TC010_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/reset-password/eyJpdiI6ImxCR0NPSTl5Wk4vV2Zzb2xHbW1Ed0E9PSIsInZhbHVlIjoiL2FscXk5NnFFdzJjVFEraERSYW5VbW9VUFdTTzBqcktyMFBBZWJUVDQ0a2owb0FlWXRUUE5YcTFPRTJzckxLK1I0bDU4ZFB5MnVhUXRqQ204U0UwY083UXZvdXcvTm1lS0lQSy9sOHdnRStNWm9sMHVKUEYrMXZrVjJvLzd5SVNzR2s2MTdhMUNzeVJ6a1VyZTJwL2luUE1oSTZ1TWZuaFlua3Y1K21aNnRVN2NnbFl6Q0gySEFXUmZMd2pMREhoaUJRYllrSHNxQlZTOHRUdnJOSVREVWtuQXYremg5VlMwV214K2I4WDJJUFRMTmVQWVdhc2RJb3p0c3htL0hCQktDRGlsNDVFZk1UTXhKYjgyazdYSFJ5WmNTYlUyZ1V6czNUNytiVWx5bDg9IiwibWFjIjoiMWEwYmVmZjlhM2Y2NGFiMTA1NmU3ZDI1NDM3MWUxODdiMWUwMDQyMjg1ODI2MjJkYTRhZmZkMWUzNTI0YzM2NSJ9')
        cy.get('#password_confirmation').type('rexus12345')
        // Button done 
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .w-100 > .text-danger')
            .should('exist', 'The password confirmation does not match.')
    }),
    it('TC011_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/reset-password/eyJpdiI6ImxCR0NPSTl5Wk4vV2Zzb2xHbW1Ed0E9PSIsInZhbHVlIjoiL2FscXk5NnFFdzJjVFEraERSYW5VbW9VUFdTTzBqcktyMFBBZWJUVDQ0a2owb0FlWXRUUE5YcTFPRTJzckxLK1I0bDU4ZFB5MnVhUXRqQ204U0UwY083UXZvdXcvTm1lS0lQSy9sOHdnRStNWm9sMHVKUEYrMXZrVjJvLzd5SVNzR2s2MTdhMUNzeVJ6a1VyZTJwL2luUE1oSTZ1TWZuaFlua3Y1K21aNnRVN2NnbFl6Q0gySEFXUmZMd2pMREhoaUJRYllrSHNxQlZTOHRUdnJOSVREVWtuQXYremg5VlMwV214K2I4WDJJUFRMTmVQWVdhc2RJb3p0c3htL0hCQktDRGlsNDVFZk1UTXhKYjgyazdYSFJ5WmNTYlUyZ1V6czNUNytiVWx5bDg9IiwibWFjIjoiMWEwYmVmZjlhM2Y2NGFiMTA1NmU3ZDI1NDM3MWUxODdiMWUwMDQyMjg1ODI2MjJkYTRhZmZkMWUzNTI0YzM2NSJ9')
        cy.get('#password').type('rexus12345')
        // Button done 
        cy.get('.btn').click()
        cy.get('.text-danger').should('exist', 'The password field is required.')
    }),
    it('TC012_SC03', function() {
        cy.visit('https://beta.hacklab.rocks/reset-password/eyJpdiI6ImxCR0NPSTl5Wk4vV2Zzb2xHbW1Ed0E9PSIsInZhbHVlIjoiL2FscXk5NnFFdzJjVFEraERSYW5VbW9VUFdTTzBqcktyMFBBZWJUVDQ0a2owb0FlWXRUUE5YcTFPRTJzckxLK1I0bDU4ZFB5MnVhUXRqQ204U0UwY083UXZvdXcvTm1lS0lQSy9sOHdnRStNWm9sMHVKUEYrMXZrVjJvLzd5SVNzR2s2MTdhMUNzeVJ6a1VyZTJwL2luUE1oSTZ1TWZuaFlua3Y1K21aNnRVN2NnbFl6Q0gySEFXUmZMd2pMREhoaUJRYllrSHNxQlZTOHRUdnJOSVREVWtuQXYremg5VlMwV214K2I4WDJJUFRMTmVQWVdhc2RJb3p0c3htL0hCQktDRGlsNDVFZk1UTXhKYjgyazdYSFJ5WmNTYlUyZ1V6czNUNytiVWx5bDg9IiwibWFjIjoiMWEwYmVmZjlhM2Y2NGFiMTA1NmU3ZDI1NDM3MWUxODdiMWUwMDQyMjg1ODI2MjJkYTRhZmZkMWUzNTI0YzM2NSJ9')
        // Button done 
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .w-100 > .text-danger')
            .should('exist', 'The password field is required.')
        cy.get(':nth-child(3) > .w-100 > .text-danger')
            .should('exist', 'The password confirmation field is required.')
    }),
    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
})