describe('Insurance Project', () => {
    before(function () {

        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })
    it('Insurance Framework', function () {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        cy.get('input[name="email"]').type(this.data.Email)
        cy.get('input[name="password"]').type(this.data.Password)
        //cy.contains("Log in").click()
        cy.get('input[value="Log in"]').click()

           //cy.origin("https://demo.guru99.com/insurance/v1/header.php", () => {
        //})
        cy.get('#newquote').click()
        cy.get('select').invoke('val', 'No cover')
        cy.get('input[value="Yes"]').click()
        cy.get('input[name="incidents"]').type(this.data.Incidents)
        cy.get('input[name="registration"]').type(this.data.Registration)
        cy.get('input[name="mileage"]').type(this.data.Mileage)
        cy.get('input[name="value"]').type(this.data.Value)
        
        cy.get('#quotation_vehicle_attributes_parkinglocation').select('Locked Garage')
        cy.get('#quotation_vehicle_attributes_policystart_1i').select('2015')
        cy.get('#quotation_vehicle_attributes_policystart_2i').select('May')
        cy.get('#quotation_vehicle_attributes_policystart_3i').select('10')
        cy.get('input[value="Calculate Premium"]').click()
        cy.get('#calculatedpremium').should('be.visible')
        cy.get('input[value="Save Quotation').should('be.visible')
        cy.get('input[value="Save Quotation').should('not.be.disabled').click()
        cy.get('body b').eq(1).contains('Your identification number is :')
        cy.get('body b').eq(1).should('contain','Your identification number is :')
     
    })
})

