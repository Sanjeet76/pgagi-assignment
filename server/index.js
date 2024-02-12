const express = require('express');
const {dbConn} = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chat');
const stepsRoutes = require('./routes/steps');
const profileRoute = require('./routes/profile');
const app = express();
const port = 4001;
app.use(express.json())
app.use(cors());


dbConn();

app.use('/api', userRoutes);
app.use('/api', chatRoutes);
app.use('/api', stepsRoutes);
app.use('/api', profileRoute);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})