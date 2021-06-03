const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://serverless-66e18-default-rtdb.firebaseio.com/' 
})
const frbConnection = admin.firestore();

module.exports = {
    frbConnection
}
