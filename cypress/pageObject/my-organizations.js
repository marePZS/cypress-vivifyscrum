class MyOrganizations {

    get nextBtn(){
        return cy.get('[name="next_btn"]');
    }

    get finishBtn(){
        return this.nextBtn;
    }


    get previousBtn(){
        return cy.get('[name="previous_btn"]');
    }

    get modalConfirmBtn(){
        return cy.get('.vs-c-modal--features-confirm-button');
    }

    get addNewOrganization(){
        return cy.get('.vs-c-my-organization--add-new');
    }

    get inputName(){
        return cy.get('input');
    }

    nameOrganization(name){
        this.inputName.type(name);
    }

    
}

export const myOrganizations = new MyOrganizations();