import{Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given(/^I launch the app$/, () => {
	cy.visit('/')
});

When(/^I click on hamburger menu$/, () => {
	cy.fixture('selectors.json').then((sel) => {
         cy.clickElement(sel.hamburger)
        cy.clickElement(sel.hamburger1).should('be.visible')
});
});

When(/^I click on Computers$/, () => {
  cy.get('[data-ref-tag="nav_em_1_1_1_7"]').should('have.length.above', 1).wait(1000)
  cy.get('[data-ref-tag="nav_em_1_1_1_7"]').should('exist').eq(0).click()
	cy.fixture('selectors.json').then((sel) => {
//         cy.clickElement(sel.computers).should('have.lenght.above',2).wait(1000)
//         cy.clickElement(sel.computers).should('exist').eq(0)
 });
});

When(/^I click on Table Accessories$/, () => {
    cy.fixture('selectors.json').then((sel) => {
        cy.clickElement(sel.tableAccessories)
               
});
});

Then(/^I filter the results by Brand “JETech”$/, () => {
    cy.fixture('selectors.json').then((sel) => {
               cy.clickElement(sel.filterDropdownButton)
               cy.clickElement(sel.newestArrival)    
});
});

Then(/^I sort the JETech results with “Newest Arrivals”$/, () => {
    cy.fixture('selectors.json').then((sel) => {
      cy.get('input#twotabsearchtextbox').type('JETech')
      cy.get('input#nav-search-submit-button').click()
  
        // cy.typeAText(sel.searchField, sel.text)
        // cy.clickElement(sel.searchButton)    
});
});

Then(/^I Click on the lowest priced item.$/, () => {
	cy.get('span.a-price[data-a-size=xl]').then(($prices) => {
        let lowestPrice = null;
  
        // Iterate through each price element to find the lowest price
        $prices.each((index, priceElement) => {
          const priceText = Cypress.$(priceElement).text();
  
  
          if (priceText.includes('$')) {
            const price = parseFloat(priceText.replace('$', '').trim());
  
            if (lowestPrice === null || price < lowestPrice) {
              lowestPrice = price;
            }
          }
  
        });
  
        // Assertion to check if the lowest price is not null
        cy.wrap(lowestPrice).should('not.be.null');
  
        // Output the lowest price
        cy.log(`About this item: $${lowestPrice}`);
  
        //click on lowest Price
        cy.get('img.s-image[data-image-index="3"]').click()
    });
});

Then(/^I Switch the Window, Assert that About this item section is present and section text to console$/, () => {
    cy.get('#feature-bullets')
    .should('exist')
    .should('be.visible')
    .wait(1000)
    .then(() => {
      cy.log('About this item');
    });
});


