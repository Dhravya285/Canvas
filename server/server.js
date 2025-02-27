import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import SignUp from './routes/signup.js' 

dotenv.config({ path: '.env.local' });

const app = express()
app.use(cors())
app.use(bodyParser.json())

const mongourl = process.env.mongoUrl

if (!mongourl) {
    console.error('Error: mongoUrl environment variable is not set.');
    process.exit(1);
}

mongoose.connect(mongourl)
    .then(() => {
        console.log('DB connected');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    })

app.use('/api/v1/auth/signup', SignUp)    

app.listen(3000, () => {
    console.log('server Running on port 3000');
})