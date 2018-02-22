import WEBPACK_EVENTS from '../fixture/webpack-events';

const URL = 'http://localhost:7000?force_socket_port=6969';

describe('JARVIS', () => {
    it('dashboard is accessible', () => {
        cy.visit(URL);
    });
    it('renders correct navigation', () => {
        cy.visit(URL);
        cy.get('.project').should('contain', WEBPACK_EVENTS.PROJECT.name);
        cy.get('.version').should('contain', WEBPACK_EVENTS.PROJECT.version);
        cy.get('.makers').should('contain', WEBPACK_EVENTS.PROJECT.makers.name);
        cy.get('.makers').should('contain', WEBPACK_EVENTS.PROJECT.makers.email);
        cy.get('.makers').should('contain', WEBPACK_EVENTS.PROJECT.makers.url);
    });
    it('renders correct compiler status tile', () => {
        cy.visit(URL);
        cy.get('.board').should('contain', WEBPACK_EVENTS.PROGRESS.message);
        cy.get('.board').should('contain', `done in ${WEBPACK_EVENTS.STATS.time / 1000} sec`);
    });
});