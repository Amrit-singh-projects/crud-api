const express = require("express")
const morgan = require("morgan")
const cors =  require('cors')
const {PORT,NODE_ENV}=require("./config")
const {dbConnection} = require("./config/db")
const getStudents = require("./routes/student")
const app = express()


let StartServer = async () => {

    /*database start connection*/
    dbConnection()
    /*database end here*/

    /*Middleware section starts here */
    if(NODE_ENV === 'development'){
        app.use(morgan("dev"))
    }
    app.use(express.json())
    app.use(cors())
    /*Middleware section end */

    /*Load Routes Starts here */
    app.use('/api/students/',getStudents)
    /*Load Routes Ends here */

    // listen Port
    app.listen(PORT,err =>{
        if(err) throw err
        console.log(`server is running on port number ${PORT}`)
    })
}

StartServer()