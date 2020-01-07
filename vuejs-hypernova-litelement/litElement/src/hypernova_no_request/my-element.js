// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  firstUpdated() {
    console.log('firstUpdated() :');
    console.log(this);
    const loyaltyDiv = this.shadowRoot.querySelector('div#loyalty');
    const script = document.createElement( 'script' );
    script.src= 'http://127.0.0.1:8000/components/list-element/src/attachClickActionFromScriptFile/click.js';
    loyaltyDiv.appendChild(script);
  }

  render(){
    return html`<div id="loyalty">
    <div data-hypernova-key="ProductList" data-hypernova-id="bea75a52-b174-46ce-ab4c-dccb48818b01"><div data-server-rendered="true" class="k-product-list"><h2 class="k-product-list__header">Series</h2> <ul><li class="k-product-item"><img src="https://via.placeholder.com/200" class="k-product-item__image"> <h4 class="k-product-item__title">Loyalty</h4></li></ul> <button>Add Item</button></div></div>
      <script type="application/json" data-hypernova-key="ProductList" data-hypernova-id="bea75a52-b174-46ce-ab4c-dccb48818b01"><!--{"title":"Series","items":[{"title":"Loyalty","imageUrl":"https://via.placeholder.com/400"}]}--></script>
    </div>`;
  }

}
// Register the new element with the browser.
customElements.define('my-element', MyElement);