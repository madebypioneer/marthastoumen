class NewsletterSignup extends HTMLElement {
  constructor() {
    super();


    const input = this.querySelectorAll('[data-newsletter-focus]')[0];
    const closeButton = this.querySelectorAll('[data-newsletter-close]')[0];

    input.addEventListener('focus', (event) => {
      event.preventDefault();
      this.openSection();
    })

    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.closeSection();
    })
    // this.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   this.onClickHandler();
    // });
  }

  openSection() {
    const newsletter = this.querySelectorAll('[newsletter-signup]')[0];
    const newsletterContent = this.querySelectorAll('[newsletter-content]')[0];
    const newsletterFormContainer = this.querySelectorAll('[newsletter-form-container]')[0];
    const newsletterInputs = this.querySelectorAll('[data-newsletter-input]');
    const close = this.querySelectorAll('[data-newsletter-close]')[0];

    const industry = this.querySelectorAll('[industry-partners]')[0];
    const industryContent = this.querySelectorAll('[industry-content]')[0];


    // Expand Newsletter
    newsletter.classList.add('lg:w-11/12');

    // Newsletter Content
    newsletterContent.classList.add('lg:w-1/4');
    newsletterContent.classList.remove('lg:w-1/2');

    newsletterFormContainer.classList.add('lg:w-3/4');
    newsletterFormContainer.classList.remove('lg:w-1/2');

    //  Show Full Form
    newsletterInputs.forEach((input) => {
      input.classList.add('lg:w-1/3');
      input.classList.remove('hidden');
    })

    //  Show Close Button
    close.classList.remove('hidden');

    //  Narrow Industry Section
    industry.classList.add('lg:w-1/12');
    industryContent.classList.add('hidden');
  }

  closeSection() {
    const newsletter = this.querySelectorAll('[newsletter-signup]')[0];
    const newsletterContent = this.querySelectorAll('[newsletter-content]')[0];
    const newsletterFormContainer = this.querySelectorAll('[newsletter-form-container]')[0];
    const newsletterInputs = this.querySelectorAll('[data-newsletter-input]');
    const close = this.querySelectorAll('[data-newsletter-close]')[0];

    const industry = this.querySelectorAll('[industry-partners]')[0];
    const industryContent = this.querySelectorAll('[industry-content]')[0];


    // Expand Newsletter
    newsletter.classList.remove('lg:w-11/12');
    newsletter.classList.add('lg:w-1/2');

    // Newsletter Content
    newsletterContent.classList.remove('lg:w-1/4');
    newsletterContent.classList.add('lg:w-1/2');

    newsletterFormContainer.classList.remove('lg:w-3/4');
    newsletterFormContainer.classList.add('lg:w-1/2');

    //  Show Full Form
    newsletterInputs.forEach((input) => {
      input.classList.remove('lg:w-1/3');

      if (input.dataset.newsletterInput !== 'constant') {
        input.classList.add('hidden');
      }
    })

    //  Show Close Button
    close.classList.add('hidden');

    //  Narrow Industry Section
    industry.classList.remove('lg:w-1/12');
    industry.classList.add('lg:w-1/2');
    industryContent.classList.remove('hidden');
  }



  onClickHandler(evt) {
    const content = this.querySelectorAll('[data-accordion-content]')[0];
    content.classList.toggle('hidden')
  }
}

customElements.define('newsletter-signup', NewsletterSignup);