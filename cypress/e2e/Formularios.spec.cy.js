/// <reference types="cypress" />

describe('Formularios', () => {

    it('<Login /> - Login Page', () => {
        cy.visit('/')

        // Probar titulo
        cy.get('[data-cy=titulo]')
            .invoke('text')
            .should('equal', 'Iniciar Sesión')

        // Revisar que exista el formulario
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

    it('<NuevaCuenta /> - Nueva Cuenta', () => {

        cy.visit('/nueva-cuenta')

        // Probar titulo
        cy.get('[data-cy=titulo]')
            .invoke('text')
            .should('equal', 'Obtener una Cuenta')

        // Revisar que exista el formulario
        cy.get('[data-cy=nueva-cuenta]').should('exist')

        // Revisar los inputs
        cy.get('[data-cy=nombre]').should('exist')
        cy.get('[data-cy=email]').should('exist')
        cy.get('[data-cy=password]')
            .should('exist')
            .should('have.attr', 'type', 'password')
        cy.get('[data-cy=confirmar]')
            .should('exist')
            .should('have.attr', 'type', 'password')

        // Submit
        cy.get('[data-cy=submit-nueva-cuenta]')
            .should('exist')
            .should('have.value', 'Registrarme')

        // Link a Iniciar Sesion
        cy.get('[data-cy=iniciar-sesion]')
            .should('exist')
            .should('have.attr', 'href')
            .should('eq', '/')

        cy.visit('/')

    });

});