let elem = document.querySelector('#main-collection-product-grid');
let infScroll = new InfiniteScroll( elem, {
  // options
  path: '.pagination__item--prev',
  append: '.product-card-post',
  history: false,
});