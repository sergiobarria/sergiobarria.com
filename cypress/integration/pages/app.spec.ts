import { cy, describe, it } from 'local-cypress';

describe('App Navigation', () => {
  it('clicks all links', () => {
    const pages = ['about', 'blog', 'portfolio', 'library', 'contact'];

    cy.visit('/');

    pages.forEach((page) => {
      cy.get(`a[href*=${page}]`).then((link) => {
        cy.request(link.prop('href'));
      });
    });
  });
});
