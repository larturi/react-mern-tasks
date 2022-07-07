/// <reference types="cypress" />

describe('Proyectos', () => {

    it('<Login /> - Autenticar usuario', () => {

        cy.visit('/')

        // Alerta de error
        cy.get('[data-cy=email]').clear().type('lea.arturi@gmail.com')
        cy.get('[data-cy=password]').clear().type('123123')
        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=seleccionaProyecto]')
            .should('exist')
            .invoke('text')
            .should('eq', 'Selecciona un proyecto')

    });

    it('<Proyectos /> - Validaciones', () => {

        cy.get('[data-cy=boton-nuevo-proyecto]').click()
        cy.get('[data-cy=submit-nuevo-proyecto]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'El nombre del proyecto es obligatorio')

    });

    it('<Proyectos /> - Crear Proyecto', () => {

        cy.get('[data-cy=input-nuevo-proyecto]').type('Nuevo proyecto fake')
        cy.get('[data-cy=submit-nuevo-proyecto]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'El nombre del proyecto es obligatorio')

        // Seleccionar el proyecto
        cy.get('[data-cy=listado-proyectos] li:nth-child(1) button').click()
    });

    it('<Tareas /> - Crear Tarea', () => {

        cy.get('[data-cy=submit-tarea]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'El nombre de la tarea es obligatorio')

        // Crear Tareas
        cy.get('[data-cy=input-tarea]').type('Mi nueva tarea fake 1')
        cy.get('[data-cy=submit-tarea]').click()

        cy.get('[data-cy=input-tarea]').type('Mi nueva tarea fake 2')
        cy.get('[data-cy=submit-tarea]').click()

        cy.get('[data-cy=input-tarea]').type('Mi nueva tarea fake 3')
        cy.get('[data-cy=submit-tarea]').click()
    });

    it('<Tareas /> - Completar, Descompletar, Editar, Eliminar', () => {

        // Selecciona la primera tarea y la marca como completa
        // cy.get('[data-cy=tarea]:nth-child(1) [data-cy=tarea-incompleta]').click()
        // cy.get('[data-cy=tarea]:nth-child(1) [data-cy=tarea-completa]').should('have.class', 'completo')


        // Selecciona la primera tarea y la marca como pendiente
        // cy.get('[data-cy=tarea]:nth-child(1) [data-cy=tarea-completa]').click()
        // cy.get('[data-cy=tarea]:nth-child(1) [data-cy=tarea-incompleta]').should('have.class', 'incompleto')

        // Edicion
        // cy.get('[data-cy=tarea]:nth-child(1) [data-cy=btn-editar]').click()
        // cy.get('[data-cy=input-tarea]').clear().type('Mi nueva tarea fake 1 editada')
        // cy.get('[data-cy=submit-tarea]').click()


    });

});