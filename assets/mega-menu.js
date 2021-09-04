class MegaMenu extends HTMLElement {
  constructor() {
    super();

    // Category Hover -> Set Products + Category Image
    const collectionsNodeList = this.querySelectorAll('[data-category]');
    const collections = Array.from(collectionsNodeList);

    const productLinkNodeList = this.querySelectorAll('[data-product-link]');
    const productLinks = Array.from(productLinkNodeList);

    if (collections?.length > 0) {
      collections.map((item) => {
        item.addEventListener('mouseenter', () => {
          this.setCollection(item.dataset.category);
          item.classList.add('italic','text-vine');
        })
      })
    }

    if (productLinks?.length > 0) {
      productLinks.map((item) => {
        item.addEventListener('mouseenter', () => {
          this.setProductImage(item.dataset.productLink)
        })
      })
    }
  }

  setCollection(id) {
    const productsNodeList = this.querySelectorAll('[data-products]');
    const products = Array.from(productsNodeList);

    const collectionNodeList = this.querySelectorAll('[data-category-image]');
    const collections = Array.from(collectionNodeList);

    // Show or Hide Collection Products
    if (products?.length > 0) {
      products.map((product) => {
        if (product.dataset.products === id) {
          product.classList.remove('hidden');

          const firstProduct = product.querySelectorAll('[data-product-link]')[0];

          if (firstProduct) {
            this.setProductImage(firstProduct.dataset.productLink)
          }
        } else {
          product.classList.add('hidden');
        }
      })
    }

    // Show or Hide Collection Image Link
    if (collections?.length > 0) {
      collections.map((collection) => {
        if (collection.dataset.categoryImage === id) {
          collection.classList.remove('hidden');
        } else {
          collection.classList.add('hidden');
        }
      })
    }
  }

  setProductImage(id) {
    const productNodeList = this.querySelectorAll('[data-product]');
    const products = Array.from(productNodeList);

    if (products?.length > 0) {
      products.map((product) => {
        if (product.dataset.product === id) {
          product.classList.remove('hidden');
        } else {
          product.classList.add('hidden');
        }
      })
    }
  }

  onClickHandler(evt) {
    const content = this.querySelectorAll('[data-accordion-content]')[0];
    content.classList.toggle('hidden')
  }
}

customElements.define('mega-menu', MegaMenu);