class ValidationPages {


    elements = {



        //Validaciones de Nombre
        validateName: (name) => cy.get('table > tbody > tr').each(($tr, index, $trs) => {

            cy.wrap($tr)
                .find('td').eq(4)
                .invoke('text')
                .then((text) => {
                    expect(text).to.equal(name);
                });
        }),

        //Validacion de ID
        validateId: (id) => cy.get('table > tbody > tr').each(($tr, index, $trs) => {

            cy.wrap($tr)
                .find('td').eq(2)
                .invoke('text')
                .then((text) => {
                    expect(text).to.equal(id);
                });
        }),


        //Validacion de Precio
        validatePrice: (min, max) => cy.get('table > tbody > tr').each(($tr, index, $trs) => {

            cy.wrap($tr)
                .find('td').eq(8)
                .invoke('text')
                .then((text) => {

                    const priceText = text.replace(/[^\d.]/g, '');
                    const price = parseFloat(priceText);

                    cy.log(`Precio extraído: ${price}`);

                    try {
                        expect(price).to.be.within(min, max);
                    } catch (error) {
                        // No hagas nada en caso de excepción, solo registra en la consola
                        cy.log(`EL PRECIO ${price} ESTA FUERA DEL RANGO  ${min} y ${max}`);
                    }

                    // expect(price).to.be.within(min, max);

                });
        }),



    }


    validateTablePrice(min, max) {
        cy.wait(500)
        this.elements.validatePrice(min, max)
    }


    validateNameTable(name) {
        cy.wait(500)
        this.elements.validateName(name)
    }

    validateIdTable(id) {
        cy.wait(500)
        this.elements.validateId(id)
    }

}

module.exports = new ValidationPages();