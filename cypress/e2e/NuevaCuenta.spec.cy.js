/// <reference types="cypress" />

describe('Nueva Cuenta', () => {

    it('<NuevaCuenta /> - Validaciones, Alertas y Crear Cuenta', () => {

        cy.visit('/nueva-cuenta')

        // Alerta de error
        cy.get('[data-cy=submit-nueva-cuenta]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'Todos los campos son obligatorios')

        // Contraseña formato incorrecto
        cy.get('[data-cy=nombre]').type('Leandro')
        cy.get('[data-cy=email]').type('lea.arturi@pepe.com')
        cy.get('[data-cy=password]').type('123')
        cy.get('[data-cy=confirmar]').type('123')
        cy.get('[data-cy=submit-nueva-cuenta]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'El password debe ser de al menos 6 caracteres')

        // Contraseña formato incorrecto
        cy.get('[data-cy=password]').clear().type('12311122')
        cy.get('[data-cy=confirmar]').clear().type('44422222')
        cy.get('[data-cy=submit-nueva-cuenta]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'Los password deben ser iguales')

        // Usuario ya registrado
        cy.get('[data-cy=password]').clear().type('12345678')
        cy.get('[data-cy=confirmar]').clear().type('12345678')
        cy.get('[data-cy=submit-nueva-cuenta]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'Ya existe un usuario con el email ingresado')

        // Nueva Cuenta
        // Habria que eliminar el usuario de la bd luego de ejecutarlo
        // cy.get('[data-cy=nombre]').clear().type('Leandro')
        // cy.get('[data-cy=email]').clear().type('lea.arturi2@pepe.com')
        // cy.get('[data-cy=password]').clear().type('12345678')
        // cy.get('[data-cy=confirmar]').clear().type('12345678')
        // cy.get('[data-cy=submit-nueva-cuenta]').click()

        // cy.get('[data-cy=seleccionaProyecto]')
        //     .should('exist')
        //     .invoke('text')
        //     .should('eq', 'Selecciona un proyecto')


    });

});