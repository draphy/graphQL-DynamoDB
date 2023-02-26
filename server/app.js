const express = require('express')
const app = express()
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const dotenv =require ("dotenv") 
const mongoose = require('mongoose')
const cors =require('cors')
dotenv.config();

const port = process.env.PORT

app.use(cors())


//Database 
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once('open',()=>console.log('Database connected'))



//graphql endpoint
app.use('/graphql', graphqlHTTP({
  schema,
    graphiql: process.env.NODE_ENV === 'development',
  }));



//Server
app.listen(port , ()=>console.log(`Server is Running on port ${port}`))