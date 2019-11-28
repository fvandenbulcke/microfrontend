// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until.js';

// Extend the LitElement base class
class MyElement extends LitElement {

  script() {
    let script = document.createElement('script');
    script.onload = this.onLoad.bind(this);
    script.src = 'http://localhost:3030/client.js';
    return script;
  }

  scriptAlert() {
    const script = document.createElement('script');
    script.textContent = `alert('scriptAlert')`;
    return script;
  }

  firstUpdated() {
    var shadow = this.shadowRoot
    const button = shadow.querySelector('button#vueButtonId');
    console.log('vueButtonId firstUpdated()')
    console.log(button)

    const body = document.getElementsByTagName('body').item(0);
    //body.appendChild(this.scriptAlert());
    this.addEventListener('click', this.handleClick);
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connectedCallback()')
  }

  handleClick(){
    console.log('handleClick()')
  }

  render(){
    console.log('my-element : Get content from hypernova static');
    
    const head = document.getElementsByTagName('head').item(0);
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'http://localhost:3030/client.js');
    //head.appendChild(script);

    /* const scriptAlert = document.createElement('script');
    scriptAlert.textContent = `alert('scriptAlert')`;
    window.addEventListener('load', function () {
      //const button = this.shadowRoot.getElementById('vueButtonId');
      const button = this._root.querySelector('#vueButtonId')
      console.log('vueButtonId addEventListener : ')
      console.log(button)
    })
    
    const otherScript = document.createElement('script');
    otherScript.setAttribute('type', 'text/javascript');
    otherScript.onload = function() {
      alert("Script loaded and ready");
      console.log('vueButtonId : ')
    }; */

    const content = html`
    <div data-hypernova-key="ProductList" data-hypernova-id="bea75a52-b174-46ce-ab4c-dccb48818b01">
    <div data-server-rendered="true" class="k-product-list">
    <h2 class="k-product-list__header">Series</h2>
    <ul><li class="k-product-item"><img src="https://via.placeholder.com/200" class="k-product-item__image">
    <h4 class="k-product-item__title">Loyalty</h4></li></ul>
    <button id="vueButtonId">Add Item</button></div></div>
    <script type="application/json" data-hypernova-key="ProductList" data-hypernova-id="bea75a52-b174-46ce-ab4c-dccb48818b01">
    <!--{"title":"Series","items":[{"title":"Loyalty","imageUrl":"https://via.placeholder.com/200"}]}--></script>
    ${this.checkIfButtonExist()}
    `
    return html` ${until(content, html`<span>Loading...</span>`)}`;
  }

  checkIfButtonExist(){
    var shadow = this.shadowRoot
    const button = shadow.querySelector('button#vueButtonId');
    console.log('checkIfButtonExist : ')
    console.log(button)
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);