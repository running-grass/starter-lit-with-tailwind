export const TW = <T extends LitMixin>(superClass: T): T =>
  class extends superClass {
    connectedCallback() {
      super.connectedCallback();

      document.head.querySelectorAll("#tailwind-global-css").forEach((link) => {
        this.shadowRoot.append(link.cloneNode());
      });
    }
  };
