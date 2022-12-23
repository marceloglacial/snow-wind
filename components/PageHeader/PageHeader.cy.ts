/// <reference types="cypress" />

describe('Page Header', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`should render layout`, () => {
        cy.get(`title`).should('exist')
        cy.get(`meta`).should('exist')
        cy.get(`link`).should('exist')
    })
})
