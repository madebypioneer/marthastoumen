class QuickAddQuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true })



    this.querySelectorAll('button').forEach(
        (button) => button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) {
      console.log('new target aquired')
      this.updateQuantity(this.input);
    }
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `#cart-notification-product-${this.productId}`,
      },
      {
        id: 'cart-notification-button'
      },
      {
        id: 'cart-icon-bubble'
      }
    ];
  }

  updateQuantity(input) {
    console.log('clicked');
    console.log(input.dataset.index);
    console.log(input.value)

    const body = JSON.stringify({
      line: this.dataset.index,
      quantity: this.value
    });

    fetch(`${routes.cart_change_url}?line=${input.dataset.index}&quantity=${input.value}`)
        .then((response) => {
          console.log(response);



          return response.text();
        })
        .then(() => {
          fetch(`/cart.js`)
              .then((response) => {
                // console.log(JSON.parse(response.body));

                return response.text();
                // const cartNotificationButton = document.getElementById('cart-notification-button');
                // cartNotificationButton.innerText = `View my cart (${response.item_count})`

              })
              .then((state) => {
                const parsedState = JSON.parse(state);
                console.log(parsedState)
                const cartNotificationButton = document.getElementById('cart-notification-button');
                cartNotificationButton.innerText = `View my cart (${parsedState.item_count})`

                const cartCountBubble = document.getElementsByClassName('cart-count-bubble')[0];
                cartCountBubble.innerHTML = `<span aria-hidden="true">${parsedState.item_count}</span><span class="visually-hidden">${parsedState.item_count} items</span>`
              })
        })


    //       // this.classList.toggle('is-empty', parsedState.item_count === 0);
    //       // document.getElementById('main-cart-footer')?.classList.toggle('is-empty', parsedState.item_count === 0);
    //       //
    //       // this.getSectionsToRender().forEach((section => {
    //       //   const elementToReplace =
    //       //       document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
    //       //
    //       //   elementToReplace.innerHTML =
    //       //       this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
    //       // }));
    //       //
    //       // this.updateLiveRegions(line, parsedState.item_count);
    //       // document.getElementById(`CartItem-${line}`)?.querySelector(`[name="${name}"]`)?.focus();
    //       // this.disableLoading();
    //     }).catch(() => {
    //   // this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
    //   // document.getElementById('cart-errors').textContent = window.cartStrings.error;
    //   // this.disableLoading();
    // });
  }
}

customElements.define('quick-add-quantity-input', QuickAddQuantityInput);

