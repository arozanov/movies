/// <reference types="cypress" />

import {FAVOURITES} from "/src/store/moviesStore/moviesStore";

const SICARIO = '{"273481":{"adult":false,"backdrop_path":"/4NdAMnBwSAaSsUjoXkcU5aW28RF.jpg","genre_ids":[28,80,53],"id":273481,"original_language":"en","original_title":"Sicario","overview":"An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.","popularity":56.958,"poster_path":"/kTzfTJ2YZLNloOsE3PserEFCcg5.jpg","release_date":"2015-09-17","title":"Sicario","video":false,"vote_average":7.4,"vote_count":6885}}'

describe('Check movie search', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have a form', () => {
        cy.get('form').should('exist');
    });
    it('should put text to input, add to favorites and remove from favourites', () => {
        cy.get('[data-test="search-input"]').type('Sicario');
        cy.get('[data-test="favourite-button"]').first().click().should(() => {
            expect(localStorage.getItem(FAVOURITES)).to.eq(SICARIO);
        });
        cy.visit('/favourites');
        cy.get('[data-test="favourite-button"]').first().click().should(() => {
            expect(localStorage.getItem(FAVOURITES)).to.eq('{}');
        });
    });
});