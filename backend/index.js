const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

const allowedOrigins = [
  'https://growth-pro-mauve.vercel.app',
  'https://growth-pro-git-master-saitejamandadi99s-projects.vercel.app',
  'https://growth-q1m9vi5is-saitejamandadi99s-projects.vercel.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
}));



app.get('/', (req,res)=>{
    res.send('Welcome to GrowthPro API')
})

app.use('/api', require('./routes/businessRoutes'));

app.listen(5000, () =>{
    console.log('Server is running on http://localhost:5000');
})