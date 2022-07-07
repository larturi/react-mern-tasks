/// <reference types="cypress" />

describe('Formularios', () => {
    it('Login Page', () => {
        cy.visit('/')

        // Probar titulo
        cy.get('[data-cy=titulo]')
            .invoke('text')
            .should('equal', 'Iniciar Sesión')

        // Revosar que exista el formulario
        cy.get('[data-cy=form-login]').should('exist')

        // Revisar los dos inputs
        cy.get('[data-cy=email]').should('exist')
        cy.get('[data-cy=password]').should('exist')
        cy.get('[data-cy=submit]')
            .should('exist')
            .should('have.value', 'Iniciar Sesión')

        // Link a Nueva Cuenta
        cy.get('[data-cy=nueva-cuenta]')
            .should('exist')
            .should('have.attr', 'href')
            .should('eq', '/nueva-cuenta')

        cy.get('[data-cy=nueva-cuenta]')
            .should('have.attr', 'href')
            .should('eq', '/nueva-cuenta')

        cy.visit('/nueva-cuenta')

    });
});