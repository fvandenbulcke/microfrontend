export default class contentService {
  static getContent() {
    return new Promise(function(resolve, reject){
      const xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          const response = JSON.parse(this.responseText);
          resolve(response.results.uuid.html)
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
                "imageUrl": "https://via.placeholder.com/200"
                
              }
            ]
          }
        }
      }
      xhr.open("POST", 'http://localhost:3030/batch', true);
      xhr.setRequestHeader("Access-Control-Allow-Origin","*")
      xhr.setRequestHeader("Access-Control-Allow-Headers","application/json")
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(JSON.stringify(payload));
    })
  }
}
