const express = require('express');
const bodyParser = require('body-parser');
const request = require("request-promise");

const fs = require('fs').promises;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

/* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.use(express.static('public'));

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

/**
 * Load and return loyaltyview.js
 */
app.get('/script', function(req, res){
  res.download('./public/loyaltyview.js', 'loyaltyview.js')
});

/**
 * Load loyaltyview.template.js with minimal code
 * step:
 * 1- get template
 * 2- get html view
 * 3- replace url of module view client.js
 * 4- replace module html in template
 * /!\ the client knows all urls of module
 * /!\ customer and token have to been stored in localstorage (no available now)
 */
app.get('/script/template', function(req, res){
  console.log('get view by template')
  const templatePromise = fs.readFile('./public/loyaltyview.template.js',{encoding: 'utf8'});
  const viewPromise = getView();

  Promise.all([templatePromise,viewPromise]).then((values) => {
    let template = values[0];
    template = template.replace('CLIENT_SCRIPT_URL','\'http://localhost:3030/client.js\'')
    template = template.replace('HTML_VIEW',`\'${values[1]}\'`)
    res.send(template);
  });
});

/**
 * Load loyaltyview.v2.js
 * Script contains only code to call:
 * 1- endpoint to get the html
 * 2- endpoint to get the client script
 */
app.get('/script/view', function(req, res){
  res.download('./public/loyaltyview.v2.js', 'loyaltyview.js')
});
app.get('/view', function(req, res){
  const {token, customer} = req.query;
  getView(token, customer)
    .then((view) => {res.send(view);});
});
app.get('/script/view/script', function(req, res){
  request('http://localhost:3030/client.js').pipe(res);
});

function getView(token, customer){
  const payload = {
    "uuid": {
      "name": "ProductList",
      "data": {
        "token": token || "no_token",
        "customer": customer || "no_customer"
      }
    }
  };

  return request('http://localhost:3030/batch', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => {
    return JSON.parse(res).results.uuid.html;
  });
}
