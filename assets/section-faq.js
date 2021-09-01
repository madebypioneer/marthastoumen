class FAQAccordion extends HTMLElement {
  constructor() {
    super();

    const toggleButton = this.querySelectorAll('[data-accordion-toggle]')[0];

    toggleButton.addEventListener('click', (event) => {
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