import { cy, describe } from 'local-cypress';

describe('Spotify integration works as expected', () => {
  it('should show "not playing" when not playing song', () => {
    cy.intercept('/api/now-playing', {
      fixture: 'spotify/not-playing.json',
    }).as('spotify');

    cy.visit('/');
    cy.wait('@spotify');

    cy.get('p')
      .contains(/not listening/i)
      .should('exist');
  });

  it('should show song data when playing a song', () => {
    cy.intercept('/api/now-playing', {
      fixture: 'spotify/playing.json',
    }).as('spotify');

    cy.visit('/');
    cy.wait('@spotify');

    cy.get('p')
      .contains(/not listening/i)
      .should('not.exist');
  });
});
