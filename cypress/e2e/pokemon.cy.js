/* eslint-disable no-undef */
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000/')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('pokemon profile can be navigated to from main page', function () {
    cy.visit('http://localhost:5000/')
    cy.contains('pidgeotto').click()
    cy.contains('keen eye')
    cy.contains('big pecks')
  })
})
