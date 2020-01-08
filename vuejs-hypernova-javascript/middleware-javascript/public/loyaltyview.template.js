class LoyaltyView {
  constructor(tagId) {
    const loyaltyDiv = document.getElementById(tagId);
    loyaltyDiv.appendChild(document.createRange().createContextualFragment(HTML_VIEW));
    const script = document.createElement('script');
    script.src= CLIENT_SCRIPT_URL;
    loyaltyDiv.appendChild(script);
  }
}