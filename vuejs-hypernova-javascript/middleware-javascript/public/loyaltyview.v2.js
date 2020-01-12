class LoyaltyView {
  constructor(token,customer,modules) {
    const clientUrl = 'http://localhost:3000/script/view';
    
    // append module css to document
    const link = document.createElement('link');
    link.rel= 'stylesheet';
    link.type= 'text/css';
    link.href= `${clientUrl}/css`;
    document.head.appendChild(link);

    // append module client script to document
    const script = document.createElement('script');
    script.src= `${clientUrl}/script`;
    document.head.appendChild(script);

    // fetch the html then add a script tag to load the module client
    modules.forEach(module => {
      fetch(`http://localhost:3000/view?token=${token}&customer=${customer}&code=${module.code}`, { method: 'GET' } )
        .then(response => response.body.getReader().read())
        .then(content => String.fromCharCode.apply(null, content.value))
        .then((view) => {
          
          // append html view in target div
          const loyaltyDiv = document.getElementById(module.tagId);
          loyaltyDiv.appendChild(document.createRange().createContextualFragment(view));
          
        });
    });
  }
}