const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());



app.get('/', (req,res)=>{
    res.send('Welcome to GrowthPro API')
})

app.use('/api', require('./routes/businessRoutes'));

app.listen(5000, () =>{
    console.log('Server is running on http://localhost:5000');
})