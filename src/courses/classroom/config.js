const CONFIG = {
    scopes: [
        'https://www.googleapis.com/auth/classroom.courses',
        'https://www.googleapis.com/auth/classroom.rosters'
    ],
    credentials: {
        clientId: '796248692473-ek8emeqodp27i5a40shohei1uh84fef9.apps.googleusercontent.com',
        client_secret: 'jguDoQ2b7JGtIFPujfoQZ_VI'
    },
    redirectionalUrls: {
        suscription: 'http://localhost:1234/suscription',
        creation: 'http://localhost:1234/creation'
    }
}

module.exports = CONFIG;