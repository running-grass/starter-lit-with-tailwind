import { adoptStyles, unsafeCSS } from 'lit'

import style from '../styles/tailwind.global.css' 

const stylesheet = unsafeCSS(style)

export const TW = <T extends LitMixin>(superClass: T): T =>
  class extends superClass {
    connectedCallback() {
      super.connectedCallback();
      adoptStyles(this.shadowRoot, [stylesheet])
    }
  };