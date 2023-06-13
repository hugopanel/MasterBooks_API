const express = require('express');
var jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/info', (req, res) => {
  res.json({
    "name": "MasterBooks API",
    "build": "23061301"
  });
});

app.post('/lib/auth', (req, res) =>{
    var userId = String(req.body.id);  

    var token = jwt.sign({ "id": userId }, 'mastercampmdp');
    res.send(token);
});

app.listen(port, () => {
  console.log(`API running and listening on port ${port}`);
});

