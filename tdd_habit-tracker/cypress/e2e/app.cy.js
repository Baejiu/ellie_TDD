import '@testing-library/cypress/add-commands'

describe('Habit Tracker', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('renders', () => {
    // 'exist' = Habit Tracker가 존재해야 한다 
    cy.findByText('Habit Tracker').should('exist');
  })

  it('adds new habit at the end', () => {
    cy.findByPlaceholderText('Habit').type('New Habit');
    cy.findByText('Add').click();

    // 'have.text' = text값을 가지고 있다
    cy.findAllByTestId('habit-name').last().should('have.text', 'New Habit');
    cy.findAllByTestId('habit-count').last().should('have.text', '0');
  })

  it('increases count', () => {
    cy.findAllByTitle('increase').first().click();
    cy.findAllByTestId('habit-count').first().should('have.text', '1');
  })

  it('decreases count', () => {
    cy.findAllByTitle('increase').first().click();
    cy.findAllByTitle('decrease').first().click();
    cy.findAllByTestId('habit-count').first().should('have.text', '0');
  })

  it('does not decreases below 0', () => {
    cy.findAllByTitle('decrease').first().click();
    cy.findAllByTestId('habit-count').first().should('have.text', '0');
  })

  it('shows active count on the header', () => {
    cy.findAllByTitle('increase').first().click();
    cy.findAllByTitle('increase').last().click();
    cy.findByTestId('total-count').should('have.text', '2');
  })

  it('reset to 0 when clicking reset all', () => {
    cy.findAllByTitle('increase').first().click();
    cy.findAllByTitle('increase').last().click();
    cy.findByTestId('Reset All').click();

    //habit-count의 모든 요소를 가지고 와서 each(배열 순회) 
    // -> 각각의 아이템을 받아서 wrap() 해주어 cy 메서드를 사용할 수 있음
    cy.findAllByTestId('habit-count').each((item) => {
      cy.wrap(item).should('have.text', '0');
    })
  })
  it('deletes an item', () => {
    cy.findAllByTitle('delete').first().click();


    // 'not.exist' = Habit Tracker가 존재하지 않는다 
    cy.findAllByTestId('habit-name').findByText('Reading').should('not.exist');
  })
})