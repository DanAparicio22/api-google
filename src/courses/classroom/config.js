const CONFIG = {
    scopes: [
        'https://www.googleapis.com/auth/classroom.courses',
        'https://www.googleapis.com/auth/classroom.rosters'
    ],
    credentials: {
        clientId: '796248692473-ek8emeqodp27i5a40shohei1uh84fef9.apps.googleusercontent.com',
        client_secret: 'jguDoQ2b7JGtIFPujfoQZ_VI'
        // clientId: '796248692473-m46ssr3etvi3rv9qcfjlr05s8tu02rk1.apps.googleusercontent.com',
        // client_secret: 'ATlTp8i_1rt_ZhO7lh0Xltzl'
    },
    redirectionalUrls: {
        suscription: 'https://glacial-badlands-66148.herokuapp.com/suscription',
        creation: 'https://glacial-badlands-66148.herokuapp.com/creation'
        // suscription: 'http://localhost:1234/suscription',
        // creation: 'http://localhost:1234/creation'
    }
}

module.exports = CONFIG;