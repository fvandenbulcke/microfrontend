class LoyaltyView {
  constructor(tagId,token,customer) {
    fetch(`http://localhost:3000/view?token=${token}&customer=${customer}`, { method: 'get','Access-Control-Allow-Origin':'*' })
      .then((response) => response.body.getReader())
      .then((reader) => reader.read())
      .then((view) => {
        console.log('dans le then script')
        console.log(view)
        const clientScriptUrl = 'http://localhost:3030/client.js';

        const loyaltyDiv = document.getElementById(tagId);
        loyaltyDiv.appendChild(document.createRange().createContextualFragment(view));
        const script = document.createElement('script');
        script.src= clientScriptUrl;
        loyaltyDiv.appendChild(script);
      });
  }
}