import { beforeEach, cy, describe, it } from 'local-cypress';

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display correct heading', () => {
    cy.get('h1').should('contains', /hi, i\'m sergio/i);
  });
});
