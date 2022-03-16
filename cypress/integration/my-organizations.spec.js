/// <reference types='cypress'/>
import { newBoard } from "../pageObject/board";
import { loginPage } from "../pageObject/login"
import { myOrganizations } from "../pageObject/my-organizations";

describe('my-organizations', ()=>{

    before('backend login', ()=>{
        //cy.loginViaBackend(); ne radi (o.O)
        cy.visit('/login')
        loginPage.login('markopzs1@test.com', 'password123');
    })

    xit('visit page', ()=>{
        //cy.visit('/my-organizations')
        cy.get('h2').should('be.visible');
        
    })

    it('delete ogranization', ()=>{
        cy.get(".vs-c-my-organization__content").eq(0).click()
        myOrganizations.modalConfirmBtn.click();
        cy.get('#tools')
    })

    xit('create organization', ()=>{
        myOrganizations.addNewOrganization.click();
        myOrganizations.nameOrganization('nova');
        myOrganizations.nextBtn.click();
        myOrganizations.nextBtn.click();
        myOrganizations.modalConfirmBtn.click();
    })

    xit('add new board', ()=>{
        newBoard.addNewBoard.click();
        newBoard.nameBoard('novi Board');
        newBoard.nextBtn.click();
        newBoard.scrumRadioBtn.click({force: true});
        newBoard.nextBtn.click();
        newBoard.nextBtn.click();
        newBoard.finishBtn.click();
    })

    

})