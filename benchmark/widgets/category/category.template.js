Rex('category.template', function () {

  /**
   * Template de Categoria, que contem Nome da Categoria, um link para a
   * listagem de todos os produtos da categoria e uma listagem com 6 produtos
   * pertencentes a categoria
   */
  return function (data) {
    return `
      <dt class="category">
        <h2 class="category_title">${ data.name }</h2>
        <a class="category_more" href="./search.html?keyword=${ data.name.replace(/(\ )+/g, '+') }">Ver todos</a>
      </dt>
      <dd class="products">
        <ul is="widgets-producties" category="${ data.id }" results="6">
        </ul>
      </dd>
    `;
  };

});