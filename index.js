import express from 'express'

const app = express()

app.get('/test', (requst, response) => {
    response.send({ message: "It's all good, man!" })
})


app.get('/', (request, response) => response.send({ message: 'Welcome to our first API' }))

app.get('/error', (request, response) => {
    response
        .status(500)
        .send({ message: 'Something went wrong', success: false })
})


app.listen(3030,() => console.log('Listening on http://localhost:3030 ...'))