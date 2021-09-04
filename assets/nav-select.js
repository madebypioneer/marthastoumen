class NavSelect extends HTMLElement {
  constructor() {
    super();

    const select = this.getElementsByTagName('select');

    if (select) {
      select[0].addEventListener('change', (event) => {
        this.onClickHandler(event);
      })
    }
  }

  onClickHandler(evt) {
    evt.preventDefault();
    window.location = evt.target.value;
  }
}

customElements.define('nav-select', NavSelect);