import { defineConfig } from 'cypress'

export default defineConfig({
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    screenshotOnRunFailure: false,
    e2e: {
        baseUrl: 'http://localhost:3000',
        specPattern: [
            'pages/**/*.cy.{js,jsx,ts,tsx}',
            'components/**/*.cy.{js,jsx,ts,tsx}',
        ],
        // setupNodeEvents(on, config) {
        //     // implement node event listeners here
        // },
    },
})
