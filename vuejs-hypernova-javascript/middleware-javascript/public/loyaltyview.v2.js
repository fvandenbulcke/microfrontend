class LoyaltyView {
  constructor(tagId,token,customer,modules) {
    const clientUrl = 'http://localhost:3000/script/view';
    const link = document.createElement('link');
    link.rel= 'stylesheet';
    link.type= 'text/css';
    link.href= `${clientUrl}/css`;
    document.head.appendChild(link);

    // fetch the html then add a script tag to load the module client
    fetch(`http://localhost:3000/view?token=${token}&customer=${customer}`, { method: 'GET' } )
      .then(response => response.body.getReader().read())
      .then(content => String.fromCharCode.apply(null, content.value))
      .then((view) => {
        
        // append html view in target div
        const loyaltyDiv = document.getElementById(tagId);
        loyaltyDiv.appendChild(document.createRange().createContextualFragment(view));
        
        // append script tag in target div
        const script = document.createElement('script');
        script.src= `${clientUrl}/script`;;
        loyaltyDiv.appendChild(script);
      });
  }
}