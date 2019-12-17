const express = require('express');
const bodyParser = require('body-parser');
const Stream = require('stream');
const StringBuilder = require("string-builder");
const fetch = require("node-fetch");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

/* this line tells Express to use the public folder as our static folder from which we can serve static files*/

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

app.get('/', function(req, res){
  const writableStream = new Stream.Writable()
  console.log('app.get 3000')
  //res.send(writableStream)
  //res.setHeader('content-type', 'text/javascript');

  getView().then((view) => {
    console.log('view');
    console.log(view);

    let mavue = '<div data-hypernova-key=\"ProductList\" data-hypernova-id=\"50447b5f-1a38-4abe-916c-87d3e1b7d1de\"><div data-server-rendered=\"true\" class=\"k-product-list\"><h2 class=\"k-product-list__header\">Series</h2> <ul><li class=\"k-product-item\"><img src=\"https://via.placeholder.com/400\" class=\"k-product-item__image\"> <h4 class=\"k-product-item__title\">serie</h4></li></ul> <button id=\"vueButtonId\">Add Item</button></div></div>';
    mavue +='<script src="http://localhost:3030/client.js"></script>';
    
    let sb = new StringBuilder();
    sb.append('class LoyaltyView {');
    sb.append('constructor() {');
    sb.append('console.log(\'LoyaltyView constructor\');');
    sb.append(`const loyaltyDiv = document.getElementById("loyalty");loyaltyDiv.innerHTML = \'${mavue}\';`);
    sb.append('};};');
  
    res.send(sb.toString());
  });
});

function getView(){
  const payload = {
    "uuid": {
      "name": "ProductList",
      "data": {
        "title": "Series",
        "items": [
          {
            "title": "serie",
            "imageUrl": "https://via.placeholder.com/200"
            
          }
        ]
      }
    }
  };

  return fetch('http://localhost:3030/batch', {
    method: 'post',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(res => res.results.uuid.html);
}
