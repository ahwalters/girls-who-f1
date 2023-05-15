const express = require('express')
const dotenv = require('dotenv');
dotenv.config()

const port = process.env.PORT

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

const server = express();

server.use(express.json);

const SpotifyRouter = require('./spotify-router')
server.use('/', SpotifyRouter)

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})