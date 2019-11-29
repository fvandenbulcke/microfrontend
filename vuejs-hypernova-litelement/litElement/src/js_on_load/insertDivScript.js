var shadow = this.shadowRoot
const button = shadow.querySelector('button#vueButtonId')
console.log('vueButtonId firstUpdated()')
this.checkIfButtonExist('first update')
button.onclick = () => {
  console.log('click click click')
}
