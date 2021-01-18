require ('./config/config.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


 
app.get('/', function (req, res) {
  res.json('Get World');
});

app.post('/usuario', function (req, res) {

    let body = req.body;

    if ( body.nombre === undefined) {

        res.status(400).json({

        })

    } else {
    
    res.json({
        persona: body
    }); }
  });

  app.put('/', function (req, res) {
    res.json('Put World');
  });

  app.delete('/', function (req, res) {
    res.json('Delete World');
  });
 
app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto 3000`);
});

