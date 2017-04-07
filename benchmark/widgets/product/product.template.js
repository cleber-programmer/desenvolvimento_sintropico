Rex('product.template', function () {

  /**
   * Template do card para um produto, com imagem, nome e valor mais
   * barato
   */
  return function (data) {
    return `
     <li class="products_item">
        <a class="products_link" href="">
          <figure>
            <img class="products_img" src="${ data.product.thumbnail.url }">
            <figcaption>
              <span class="product_name">${ data.product.productname }</span>
              <span class="products_price">R$ ${ data.product.pricemin }</span>
            </figcaption>
          </figure>
        </a>
      </li>
    `;
  };

});