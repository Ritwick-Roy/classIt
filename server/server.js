const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const PORT=process.env.PORT_BACKEND;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});


app.listen(PORT, () =>
  console.log(`Express server is running on port: ${PORT}`)
);
