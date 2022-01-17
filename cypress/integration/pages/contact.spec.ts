import { beforeEach, cy, describe } from 'local-cypress';

describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display correct heading', () => {
    cy.get('h2').should('contains', /contact me/i);
  });
});
