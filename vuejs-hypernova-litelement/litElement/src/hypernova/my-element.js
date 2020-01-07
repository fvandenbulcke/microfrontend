// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until.js';
import contentService from './contentService';

// Extend the LitElement base class
class MyElement extends LitElement {
// exemple avec la dépendance @polymer/lit-element + _didrender
// https://stackblitz.com/edit/lit-element-example-ku954n?file=index.js

  firstUpdated() {
    contentService.getContent().then((data) => {
      const loyaltyDiv = this.shadowRoot.querySelector('div#loyalty');
      loyaltyDiv.innerHTML = data;
      this.executeWebpackScriptInShadowDom();
    });
  }

  render(){
    return html`<div id="loyalty"></div>`;
  }

  executeClickButtonScriptInShadowDom(){
    this.getContent('http://127.0.0.1:8081/components/list-element/src/loadHtmlFromServer/click.js').then((data) => {
      eval(data)
    })
  }

  executeWebpackScriptInShadowDom(){
    this.getContent('http://localhost:3030/client.js').then((data) => {
      eval(data)
    })
  }

  getContent(url) {
    return new Promise(function(resolve, reject){
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          resolve(this.responseText)
        }
      };
      xhr.open("GET", url, true);
      xhr.send('');
    })
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);