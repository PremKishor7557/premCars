const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
const carsRoute = require('./routes/carsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')
app.use(express.json())

app.use('/api/cars/', carsRoute)
app.use('/api/users/', usersRoute)
app.use('/api/bookings/', bookingsRoute)

const path = require('path')
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
}

app.get('/', (req, res)=> res.send('Hello World'))
app.listen(port, ()=>console.log(`Node JS Server Started on Port ${port}`))