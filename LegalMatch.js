describe('Legal Match Exam', function()
{
		
	it('Click Submit Button Clicked under Dynamic Element', function()
	{	
		//Launch https://www.way2automation.com/demo.html#"
		cy.visit("https://www.way2automation.com/demo.html#")	

		//Click Submit Button Clicked under Dynamic Element
		cy.contains("a",'Submit Button Clicked').should('have.attr','href')
		.then((href) => {
			cy.visit(href)
		})		
	})

	it('Register a user', function()
	{
		cy.get('input[name=name]').type("Test User")
		cy.get('input[name=phone]').type("123-456-7890")
		cy.get('input[name=email]').type("cosavago@givmail.com")
		cy.get('[name=country]').select("Philippines")
		cy.get('input[name=city]').type("Cebu City")
		cy.get(':nth-child(10) > input').type('testuser1')
		cy.get(':nth-child(11) > input').type('Password1')
		cy.contains("a",'EXPLORE LIFETIME MEMBERSHIP').should('have.attr','href')
		.then((href) => {
			cy.visit(href)
		})
	
	})

it('Navigate Automation Architech in Selenium-7-live projects', function () {

	cy.contains('section', '30+ Courses video library FREE ACCESS')
		.should('be.visible')
		.scrollIntoView()
		.next()
		.within(function () {
			function getNextSlide() {
			  cy.contains('.swiper-slide', 'with 7 live projects').then(
				function (el) {
				  if (Cypress.dom.isVisible(el)) {
					cy.wrap(el).contains('Get Started').click()
				  } else {
					cy.wait(1000)
					cy.get('.swiper-button-next').click().then(getNextSlide)
				  }
				},
			  )
			}
			getNextSlide()

			//assert the url page to be equals to  "https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects"
			cy.url().should('equal','https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects')
		  }
		)
	})

	it('Search for the course and click on Start button', function () {
		
		//Search for the course and click the Start button of course Git Commands
		cy.contains('.item','Page Object Model - Git Commands').then(
		function (el1) {
			if (Cypress.dom.isVisible(el1)) {
				cy.wrap(el1).contains('Start').click()
			} 
		},
		)
	})
	 
	it('Select Pay in British Pounds', function () {

		cy.visit("https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects")

		cy.contains('.checkout-button-group','Pay in British Pounds').then(
			function (el2) {
				if (Cypress.dom.isVisible(el2)) {
				cy.wrap(el2).click() //click the radio button
				cy.wrap(el2).should('contain','£15') //verify if the unit price is £15
				cy.wrap(el2).children('.col-sm-4').find('.product-enroll').click() //click on the Enroll button
				} 
			},
		)

		cy.get('button[id=enroll-button').invoke('text').should('contain','Processing')
	
	})
		
	it('Assert page loaded contains Order Summary', function () {
					
		//assert if page contains Order Summary
		cy.get('.m-b-5-xs').should('contain', 'Order Summary')
				
		//assert if item ordered is correct
		cy.get("[data-testid=course-description-sales-link]").should('have.text','Automation Architect in Selenium - 7 Live Projects')
				
		//assert if amount billed is correct
		cy.get("[data-testid=total-display]").should('contain','£15.00')
	})

	it('Verify required field validation in Contact Info', function () {
		
		 //click on Email Address textbox
		cy.get('input[id=email]').click()
		
		//click on the Name textbox to navigate away from Email textbox
		cy.get('input[id=username]').click()

		//verify the required fied validation message in Email Address
		cy.get('[data-test=email-input-error]')
		.should('have.text','Cannot be blank') 

		//click on the Name on Card textbox to navigate away from Name textbox
		cy.get('input[data-test="credit-card-name"]').click()

		///verify the required fied validation message in Name
		cy.get('[data-test=name-input-error]')
		.should('have.text','Cannot be blank')

		//click on the Street Address textbox to navigate away from Name on Card textbox
		cy.get('input[id=billingStreetAddressLine1]').click()
		
		//verify the required fied validation message in Name on Card
		cy.get('[data-test=credit-card-name-error]').should('have.text','Cannot be blank')	
		
		//click on the Card Number textbox and navigate away
		cy.get('iframe')
		.its('0.contentDocument.body').should('not.be.empty')
		.then(cy.wrap)
		.find('input[data-elements-stable-field-name=cardNumber]').click().type('1{backspace}')

		//click on the Expiration Date textbox and navigate away
		cy.get('iframe')
		.its('1.contentDocument.body').should('not.be.empty')
		.then(cy.wrap)
		.find('input[data-elements-stable-field-name=cardExpiry]').type('1{backspace}')

		//verify the required fied validation message in Card Number
		cy.get(':nth-child(1) > :nth-child(2) > ._2Upk1 > [data-test="stripe-component-field-error"] > ._2kIOe')
		.should('have.text','Cannot be blank')

		// //click on the CVC Code textbox to navigate away from Expiration textbox
		cy.get('iframe')
		.its('2.contentDocument.body').should('not.be.empty')
		.then(cy.wrap)
		.find('input[data-elements-stable-field-name=cardCvc]').type('1{backspace}')
		
		//verify the required fied validation message in Expiration Date
		cy.get('.p-r-2-xs > ._2Upk1 > [data-test="stripe-component-field-error"] > ._2kIOe')
		.should('have.text','Cannot be blank')		

		//click on the Street Address textbox to navigate away from CVC Code textbox
		cy.get('input[id=billingStreetAddressLine1]').click()

		//verify the required fied validation message in CVC Code
		cy.get('.p-l-2-xs > ._2Upk1 > [data-test="stripe-component-field-error"] > ._2kIOe')
		.should('have.text','Cannot be blank')
		
		//click on the City textbox to navigate away from Street Address textbox
		cy.get('input[id=billingCity]').click()

		//verify the required fied validation message in Street Address
		cy.get('[data-test=billingStreetAddressLine1-error]')
		.should('have.text','Cannot be blank')

		//click on the Postal textbox to navigate away from City textbox
		cy.get('input[id=billingPostalCode]').click()

		//verify the required fied validation message in City
		cy.get('[data-test=billingCity-error]')
		.should('have.text','Cannot be blank')

		//click on the City textbox to navigate away from Postal Code textbox
		cy.get('input[id=billingCity]').click()

		//verify the required fied validation message in City
		cy.get('[data-test="billingPostalCode-error"]')
		.should('have.text','Cannot be blank')

	})
})
