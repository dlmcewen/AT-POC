/// <reference types="Cypress" />

describe('Automated Test', function(){

  it('C478 Test', function() {
  Cypress.Screenshot.defaults({screenshotOnRunFailure: false})

      cy.visit('https://davidstestx.channeltivity.com/Login')
      expect(true).to.equal(true)
  })
})


