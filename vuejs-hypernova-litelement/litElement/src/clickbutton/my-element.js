// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  render(){
    return html`<button @click="${this.clickHandler}">click</button>`;
  }
  
  clickHandler(e) {
    console.log(e.target);
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);