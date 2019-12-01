// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until.js';

// Extend the LitElement base class
class MyElement extends LitElement {

  firstUpdated() {
    this.insertDivInShadowDom();
  }

  insertDivInShadowDom(){
    const shadow = this.shadowRoot
    const firstDiv = shadow.querySelector('div#divlit');
    const mydiv = document.createElement('div');
    mydiv.textContent = "my button";
    firstDiv.appendChild(mydiv);
  }

  render(){
    console.log('my-element : render from js_on_load');
    
    const content = html`
    <div id="divlit">
    <h2 class="k-product-list__header">Series</h2>
    <ul><li class="k-product-item"><img src="https://via.placeholder.com/200" class="k-product-item__image">
    <h4 class="k-product-item__title">Loyalty</h4></li></ul>
    <button id="vueButtonId">Add Item</button></div>
    ${this.checkIfButtonExist('html is rendered')}
    `
    return html` ${until(content, html`<span>Loading...</span>`)}`;
  }

  checkIfButtonExist(message){
    var shadow = this.shadowRoot
    const button = shadow.querySelector('button#vueButtonId');
    console.log(`checkIfButtonExist when ${message}: ${!!button}`)
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);