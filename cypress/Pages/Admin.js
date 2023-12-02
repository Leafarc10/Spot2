class AdminPages{

    elements={

      
        //CHECK BUSQUEDA PRINCIPAL
        checkSearch: ()=> cy.get('.MuiInputBase-colorPrimary').eq(0),
        //Input de Busqueda
        search: ()=> cy.get('input[aria-invalid="false"]').eq(1),
        //Zona
        checkZona: ()=> cy.get('.MuiMenuItem-gutters').eq(0),
        //Nombre
        checkName: ()=> cy.get('.MuiMenuItem-gutters').eq(1),
        // .MuiMenuItem-gutters').eq(1),
        //Id
        checkId: ()=> cy.get('.MuiMenuItem-gutters').eq(2),


      
        //Botones de Espacio/Complejo
        space: ()=> cy.get('.MuiButtonGroup-groupedContainedPrimary').eq(0),
        complex: ()=> cy.get('.MuiButtonGroup-groupedContainedPrimary').eq(1),


        //TIPO DE INMUEBLE
        type: ()=> cy.get('[data-testid="filter-button"]').eq(0),
        //Check Box type
        retail: ()=> cy.get('[data-testid="checkbox-retail"]'),
        oficina: ()=> cy.get('[data-testid="checkbox-office"]'),
        industria: ()=> cy.get('[data-testid="checkbox-industrial"]'),
        terreno: ()=> cy.get('[data-testid="checkbox-land"]'),




        //TIPO DE OPERACION
        typeOperation: ()=> cy.get('[data-testid="filter-button"]').eq(1),
        //Renta
        rent: ()=> cy.get('[data-testid="rent_operation_filter"]'),
        //Venta
        sale: ()=> cy.get('[data-testid="sale_operation_filter"]'),



        //RANGO DE PRECIO
        priceRange: ()=> cy.get('[data-testid="filter-button"]').eq(2),
        divisa: ()=> cy.get('[name="currency_type"]'),
        priceOrSurface: ()=> cy.get('.css-voga0h > .MuiStack-root'),
        maxValue: ()=> cy.get('[data-testid="max_price"]'),
        minValue: ()=> cy.get('[data-testid="min_price"]'),
        applyPriceFilters: ()=> cy.get('[data-testid="apply-filters"]'),





        //SUPERFICIE
        surface: ()=> cy.get('[data-testid="filter-button"]').eq(3),



        //FILTROS
        filters: ()=> cy.get('[data-testid="filter-button"]').eq(4),
        cleanFilters: ()=> cy.get('.css-1mzerio > .MuiButton-text > .MuiTypography-root')





        
    }


    searchZona(){
        cy.wait(500)
        this.elements.checkSearch().click()
        cy.wait(1000)
        this.elements.checkZona().click()
    }

    searchName(name){
        cy.wait(500)
        this.elements.checkSearch().click()
        cy.wait(1000)
        this.elements.checkName().click()
        cy.wait(1000)
        this.elements.search().click({force: true}).type(name)
        cy.wait(1000)
    }



    searchId(id){
        cy.wait(500)
        this.elements.checkSearch().click()
        cy.wait(1000)
        this.elements.checkId().click()
        cy.wait(1000)
        this.elements.search().click({force: true}).type(id)
        cy.wait(1000)
    }



    selectButtonSpace(){
        cy.wait(500)
        this.elements.space().click()
    }

    selectButtonComplex(){
        cy.wait(500)
        this.elements.complex().click()
    }


    selectType(){
        cy.wait(500)
        this.elements.type().click()

        
        this.elements.retail().click()
        this.elements.oficina().click()
        this.elements.industria().click()
        this.elements.terreno().click()
    }

    selectTypeOperartion(){
        cy.wait(500)
        this.elements.typeOperation().click()
        this.elements.rent().click()
        this.elements.sale().click()
    }

    selectPriceRange(){
        cy.wait(500)
        this.elements.priceRange().click()
    }

    selectSurface(){
        cy.wait(500)
        this.elements.surface().click()
    }



    selectFilters(){
        cy.wait(500)
        this.elements.filters().click()
    }

    selectCleanFilters(){
        cy.wait(500)
        this.elements.cleanFilters().click()
    }


    selectPriceRangeMxn(min, max){
        cy.wait(500)
        this.elements.priceRange().click()
        cy.wait(500)
        this.elements.minValue().click().type(min)
        cy.wait(500)
        this.elements.maxValue().click().type(max)
        cy.wait(500)
        this.elements.applyPriceFilters().click()
    }


    selectPriceRangeUsd(min, max){
        cy.wait(500)
        this.elements.priceRange().click()
        cy.wait(500)
        this.elements.divisa().click()
        cy.wait(500)
        this.elements.minValue().click().type(min)
        cy.wait(500)
        this.elements.maxValue().click().type(max)
        cy.wait(500)
        this.elements.applyPriceFilters().click()
    }






}

module.exports = new AdminPages();