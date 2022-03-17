/// <reference types='cypress'/>
import { newBoard } from "../pageObject/board";
import { loginPage } from "../pageObject/login"
import { logOut } from "../pageObject/logOut";
import { myOrganizations } from "../pageObject/my-organizations";

describe('my-organizations', ()=>{

    let organizationId;
    let organizationName;

    before('login', ()=>{
        
        cy.visit('/login')
        loginPage.login('markopzs1@test.com', 'password123');
    })

    xit('visit page', ()=>{
        
        cy.get('h2').should('be.visible');
        
    })

    xit('create organization', ()=>{
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations' 
        }).as('orgIntercept');

        myOrganizations.createOrganization('nova11');

        cy.wait('@orgIntercept').then((intercept)=>{
            expect(intercept.response.statusCode).eq(201);

            organizationId = intercept.response.body.id;
            organizationName = intercept.response.body.name;

            cy.visit('my-organizations')
            cy.get('.organization-list-item').eq(-1).should('contain', organizationName)
            cy.visit(`/organizations/${organizationId}/boards`);
            cy.get('li[data-cy="organization-boards"]').should('be.visible');
        })
    })

    // Cypress._.times(7, ()=>{
    //     it('delete ogranization', ()=>{
        
    //         myOrganizations.deleteOrganization('password123')
    //     }) 
    // })

    it('delete ogranization', ()=>{
        
        myOrganizations.deleteOrganization('password123')
    })

    xit('logout', ()=>{
        logOut.logoutButton();
    })

})