/// <reference types="cypress" />

describe('Layout', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`should render layout`, () => {
        cy.get(`.layout`).should('exist')
    })
})
