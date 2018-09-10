/// <reference types="Cypress" />

describe('Automated Test', function(){

  it('Test', function() {
  Cypress.Screenshot.defaults({screenshotOnRunFailure: false})

    expect(true).to.equal(true)
    expect(true).to.equal(false)
  })
})


