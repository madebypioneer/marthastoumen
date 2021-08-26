class FAQAccordion extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      event.preventDefault();
      this.onClickHandler();
    });
  }

  onClickHandler(evt) {
    const content = this.querySelectorAll('[data-accordion-content]')[0];
    content.classList.toggle('hidden')
  }
}

customElements.define('faq-accordion', FAQAccordion);