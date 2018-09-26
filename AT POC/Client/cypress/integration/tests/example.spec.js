/// <reference types="Cypress" />

describe('Automated Test', function(){

  it('C478 Test', function() {
  Cypress.Screenshot.defaults({screenshotOnRunFailure: false})

    expect(true).to.equal(true)
  })
})


