import { html } from 'lit-element';

export default class contentService {
  static getContent() {
    return new Promise(function(resolve, reject){
      const xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          /* console.log('Requête finie en code 4, traitement ici.');
          console.log("Complete.\nBody length: " + this.responseText.length);
           */
          console.log("Body:\n" + this.responseText);
          //return JSON.parse(this.responseText)
          //resolve(JSON.parse(this.responseText))
          resolve(this.responseText)
        }
      };
      
      const payload = {
        "uuid": {
          "name": "ProductList",
          "data": {
            "title": "Series",
            "items": [
              {
                "title": "serie",
                "imageUrl": "https://via.placeholder.com/400"
                
              }
            ]
          }
        }
      }
      xhr.open("POST", 'http://localhost:3030/batch',payload, true);
      xhr.setRequestHeader("Access-Control-Allow-Origin","*")
      xhr.setRequestHeader("Access-Control-Allow-Headers","application/json")
      xhr.send('');
    })
  }
  static getContent2() {
    return '<div data-hypernova-key="ProductList" data-hypernova-id="bea75a52-b174-46ce-ab4c-dccb48818b01"><div data-server-rendered="true" class="k-product-list"><h2 class="k-product-list__header">Series</h2> <ul><li class="k-product-item"><img src="https://via.placeholder.com/400" class="k-product-item__image"> <h4 class="k-product-item__title">Loyalty</h4></li></ul> <button>Add Item</button></div></div><script type="application/json" data-hypernova-key="ProductList" data-hypernova-id="bea75a52-b174-46ce-ab4c-dccb48818b01"><!--{"title":"Series","items":[{"title":"Loyalty","imageUrl":"https://via.placeholder.com/400"}]}--></script><script src="http://localhost:3030/client.js"></script>'
  }
}
