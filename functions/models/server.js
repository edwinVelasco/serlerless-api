const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')

const { dbConnection } = require('../database/config')

class Server {
    constructor() {
        this.app = express()
        this.petPath = '/pets'

        this.connectDB()

        this.middlewares()

        this.routes()
    }
    async connectDB(){
        await dbConnection()
    }
    middlewares(){
        // CORS
        this.app.use(cors())

        // body
        this.app.use( express.json() )

    }
    routes() {
        this.app.use(this.petPath, require('../routes/pets'))
    }
    // listen(){
    //     this.app.listen(this.port, () => {
    //         console.log(`Example app listening at http://localhost:${this.port}`)
    //     })
    // }
    getApp(){
        return functions.https.onRequest(this.app);
    }

}

module.exports = Server;