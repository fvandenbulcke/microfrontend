console.log('Execute the loyalty view script');
class LoyaltyView {
  constructor() {
    const loyaltyDiv = document.getElementById("loyalty");

    let content = '<div data-hypernova-key="ProductList" data-hypernova-id="bea75a52-b174-46ce-ab4c-dccb48818b01">';
    content += '<div data-server-rendered="true" class="k-product-list">';
    content += '<h2 class="k-product-list__header">Series</h2>';
    content += '<ul><li class="k-product-item">';
    content += '<img src="https://via.placeholder.com/200" class="k-product-item__image">';
    content += '<h4 class="k-product-item__title">Loyalty</h4></li></ul>';
    content += '<button>Add Item</button>';
    content += '</div></div>';
    loyaltyDiv.innerHTML = content;
  }
};