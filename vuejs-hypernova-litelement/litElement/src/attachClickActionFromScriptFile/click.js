var shadow = this.shadowRoot
const button = shadow.querySelector('button#vueButtonId')
console.log(button)
button.onclick = () => {
  console.log('click click click')
}
