describe('Task Creation and Verification', () => {
  it('should add a task and verify the values', () => {
    // Visit the page
    cy.visit('http://localhost:5000'); // replace with your actual URL

    // Add value to the "title" text field
    cy.get('input[name="title"]').type('Buy fruit');

    // Add value to the "description" text field
    cy.get('input[name="description"]').type('No bananas');

    // Press the "Add task" button
    cy.get('button').contains('Add Task').click();

    // Verify the values in the new form
    cy.get('ul').within(() => {
      cy.get('li').first().within(() => {
        cy.get('input[name="title"]').should('have.value', 'Buy fruit');
        cy.get('input[name="description"]').should('have.value', 'No bananas');
      });
    });
  });
});
