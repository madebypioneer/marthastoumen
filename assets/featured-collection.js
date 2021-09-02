class SlickProductSlider extends HTMLElement {
  constructor() {
    super();

    this.slickSlider();
  }

  slickSlider() {
    const slider = this.querySelectorAll('[data-slick-slider]')[0];
    const sliderNext = this.querySelectorAll('[data-slick-next]')[0];

    console.log(this.querySelectorAll('[data-slick-slider]')[0]);

    if (slider) {
      $(slider).slick({
        nextArrow: $(sliderNext),
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    }
  }
}

customElements.define('slick-product-slider', SlickProductSlider);