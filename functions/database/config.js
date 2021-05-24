const mongoose = require('mongoose')

const dbConnection = async() =>{
    try{
        // 'mongodb+srv://evelasco:e13456@cluster0.k8en9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        // 'mongodb://mongo/enviame'
        await mongoose.connect(
            'mongodb://localhost:27017/apiTest',
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            })

        console.log('Database Online')

    } catch (e) {
        console.log(e)
        throw new Error('Error connection mongo')
    }

}

module.exports = {
    dbConnection
}
