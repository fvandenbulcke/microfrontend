getView = function getView(token,customer){
  const payload = {
    "uuid": {
      "name": "ProductList",
      "data": {
        token,
        customer
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

class LoyaltyView {
  constructor(tagId,token,customer) {
    getView(token,customer).then((view) => {
      const clientScriptUrl = 'http://localhost:3030/client.js';

      const loyaltyDiv = document.getElementById(tagId);
      loyaltyDiv.appendChild(document.createRange().createContextualFragment(view));
      const script = document.createElement('script');
      script.src= clientScriptUrl;
      loyaltyDiv.appendChild(script);
    });
  }
}