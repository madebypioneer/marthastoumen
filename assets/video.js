class VideoSection extends HTMLElement {
  constructor() {
    super();

    const modal = this.querySelectorAll('[data-modal]')[0];
    const openModalButton = this.querySelectorAll('[data-modal-open-button]')[0];
    const closeModalButton = this.querySelectorAll('[data-modal-close-button]')[0];

    openModalButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.openModal(modal);
    });

    closeModalButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.closeModal(modal);
    });


    // Close modal on outer click
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }

  openModal(modal) {
    modal.style.display = "flex";
  }

  closeModal(modal) {
    modal.style.display = "none";
  }
}

customElements.define('video-section', VideoSection);