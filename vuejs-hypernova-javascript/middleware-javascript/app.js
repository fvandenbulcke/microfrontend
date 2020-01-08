const express = require('express');
const bodyParser = require('body-parser');
const StringBuilder = require("string-builder");
const fetch = require("node-fetch");

const fs = require('fs').promises;


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.use(express.static('public'));

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

/**
 * Load and return a js script
 */
app.get('/script', function(req, res){
  res.download('./public/loyaltyview.js', 'loyaltyview.js')
});

app.get('/template', function(req, res){
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

app.get('/view', function(req, res){
  console.log('get view with parameters')
  const {token, customer} = req.query;
  getView(token, customer)
    .then((view) => res.send(view));
});

/**
 * Build the class as string + load the div content from vue-server
 * other idea: const writableStream = new Stream.Writable()
 */
app.get('/', function(req, res){
  console.log('get view by template')
  getView().then((view) => {
    const clientScriptUrl = '\'http://localhost:3000/client.js\'';

    let sb = new StringBuilder();
    sb.append('class LoyaltyView {');
    sb.append('constructor() {');
    sb.append('const loyaltyDiv = document.getElementById("loyalty");');
    sb.append(`loyaltyDiv.appendChild(document.createRange().createContextualFragment(\'${view}\'));`);
    sb.append('const script = document.createElement(\'script\');');
    sb.append(`script.src= ${clientScriptUrl};`);
    sb.append('loyaltyDiv.appendChild(script);');
    sb.append('};};');
  
    res.send(sb.toString());
  });
});

function getView(token, customer){
  const payload = {
    "uuid": {
      "name": "ProductList",
      "data": {
        "token": token || "35e8f36a-3458-4ce1-b077-8d7f05f452d3",
        "customer": customer || "1"
      }
    }
  };

  return fetch('http://localhost:3030/batch', {
    method: 'post',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => {
    return res.json();
  })
  .then(res => JSON.parse(JSON.stringify(res.results.uuid.html).replace('\\n',' ')));
}
