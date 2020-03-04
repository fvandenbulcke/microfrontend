import { LitElement, css, html } from 'lit-element';

class MyElement extends LitElement {
  static get styles() {
    return css`
      .wc-class { color: red; }
    `;
  }

  render(){
    return html`
      <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-success">Success</button>
      <p class="wc-class">A paragraph</p>
      <slot name="body-content"></slot>
    `;
  }
}
customElements.define('my-element', MyElement);