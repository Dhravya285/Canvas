import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import SignUp from './routes/signup.js' 
import {WebSocketServer} from 'ws'

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

const server = app.listen(3000, () => {
    console.log('server Running on port 3000');
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === 1) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => console.log("Client disconnected"));
});