/// <reference types='cypress'/>
import { loginPage } from "../pageObject/login"

describe('login test', ()=>{

    beforeEach('login', ()=>{
        cy.visit('/')
        cy.url().should('contain', '/login')
    })

    xit('login with social', ()=>{
        loginPage.googleBtn
    })

    it('valid credentials', ()=>{

        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login',

        }).as('loginIntercept');

        loginPage.login('markopzs1@test.com', 'password123');

        cy.wait('@loginIntercept').then((intercept) => {
            expect(intercept.response.statusCode).eq(200)
        })
        cy.url().should('contain', '/my-organizations')
    })
})