// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until.js';
import contentService from './contentService';


// Extend the LitElement base class
class MyElement extends LitElement {

  handleResponse(){
    console.log('handleResponsehandleResponsehandleResponsehandleResponse');
  }
  
  rezzzznder(){
    console.log('my-element : Get content from hypernova');
    contentService.getContent().then((content) =>{
      console.log('my-element : content returned : '+content);
      return html`
        <p>A paragraph</p>
      `;
    })
  }

  render(){
    console.log('my-element : Get content from hypernova');
    const content1 = new Promise(function(resolve, reject){
      const message = contentService.getContent2()
      resolve(html([`${message}`]))
    });
    
    /* const content2 = new Promise(function(resolve, reject){
      const xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          console.log('Requête finie en code 4, traitement ici.');
          console.log("Complete.\nBody length: " + this.responseText.length);
          console.log("Body:\n" + this.responseText);
          resolve(html([`${JSON.parse(this.responseText).body}`]))
        }
      };
      
      xhr.open("POST", 'http://localhost:3000', true);
      xhr.send('');
    }) */

    const content3 = contentService.getContent().then((data) => html([`${data}`]))

    const finalContent = content1;

    console.log('Content : ')
    console.log(finalContent)
    return html` ${until(finalContent, html`<span>Loading...</span>`)}`;
  }
  clickHandler(e) {
    console.log(e.target);
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);