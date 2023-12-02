class HomePages{

    elements={

        //Menu lateral
        menu: ()=> cy.get('#kt_aside_toggle'),
        //Modulo Admin
        admin: ()=> cy.get('.fa-share-square')

    }


    clickMenu(){
        this.elements.menu().click()
    }

    clickAdmin(){
        this.elements.admin().click({force:true})
    }
 
 


}

module.exports = new HomePages();