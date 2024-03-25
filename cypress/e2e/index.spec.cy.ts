describe('Interact with Amazone web Application', () => {
  it('Click on hamburger', () => {
    cy.visit('/')
    cy.get('[data-action-type="DISMISS"]').should('exist').click()
    cy.get('.hm-icon').should('be.visible').click()
    cy.get('[data-ref-tag="nav_em_1_1_1_7"]').should('have.length.above', 1).wait(1000)
    cy.get('[data-ref-tag="nav_em_1_1_1_7"]').should('exist').eq(0).click()

    //click Tablet accessories
    cy.get('#hmenu-content > ul:nth-child(34) > li:nth-child(15) > a').click()

    
    // click on filter dropdown
    cy.get('span#a-autoid-0-announce').click()
    // //select by newest arrival
    cy.get('#s-result-sort-select_4').click()


    // search for JETech
    cy.get('input#twotabsearchtextbox').type('JETech')
    cy.get('input#nav-search-submit-button').click()

    //get the lowest Price
    // price selectr =  span.a-price[data-a-size=xl]

    //Locate all price elements on the page
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

      /// Assert that the "About this item" section is present.
      cy.get('#feature-bullets')
        .should('exist')
        .should('be.visible')
        .wait(1000)
        .then(() => {
          cy.log('Your message here');
        });

      // cy.get('#feature-bullets')
      //   .should('exist')
      //   .should('be.visible')
      //   .then(($element) => {
      //     // Log the response from cy.get('#feature-bullets')
      //     cy.log('Response from cy.get(\'#feature-bullets\'):');
      //     cy.log($element);
      //   });

  //     cy.get('#feature-bullets')
  // .should('exist')
  // .should('be.visible')
  // .then(($element) => {
  //   // Log the response from cy.get('#feature-bullets')
  //   cy.log('Response from cy.get(\'#feature-bullets\'):');
  //   cy.log($element);
  //   // You can also log specific properties of the element if needed
  //   cy.log('Text content of the element:');
  //   cy.log($element.text());
  //   cy.log('HTML of the element:');
  //   cy.log($element.html());
  //   // Add more log statements as needed
  // });

    })
  })
})