class FAQAccordion extends HTMLElement {
  constructor() {
    super();

    // this.accordion = this.querySelector('[data-accordion]');
    alert('working');
    this.accordions = document.querySelectorAll('[data-accordion]')[0];
    this.accordions.addEventListener('click', alert('hello'));
    // this.accordion.addEventListener('click', this.onClickHandler.bind(this));
  }

  onClickHandler(evt) {
    console.log("I've been touched");

    const content = this.accordion.querySelector('[data-accordion-content]');
    content.toggleClass('hidden')
    // this.cartNotification.setActiveElement(document.activeElement);
    //
    // const submitButton = this.querySelector('[type="submit"]');
    //
    // submitButton.setAttribute('disabled', true);
    // submitButton.classList.add('loading');
    //
    // const body = JSON.stringify({
    //   ...JSON.parse(serializeForm(this.form)),
    //   sections: this.cartNotification.getSectionsToRender().map((section) => section.id),
    //   sections_url: window.location.pathname
    // });

    // fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
    //     .then((response) => response.json())
    //     .then((parsedState) => {
    //       this.cartNotification.renderContents(parsedState);
    //     })
    //     .catch((e) => {
    //       console.error(e);
    //     })
    //     .finally(() => {
    //       submitButton.classList.remove('loading');
    //       submitButton.removeAttribute('disabled');
    //     });
  }
}

customElements.define('section-faq', FAQAccordion);