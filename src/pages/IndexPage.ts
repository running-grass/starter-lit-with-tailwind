// Components
import type { TemplateResult } from "lit";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "../components/HelloWorld";
import { TW } from "../util/TailwindMixin";

@customElement("x-index-page")
export class IndexPage extends TW(LitElement) {
  render(): TemplateResult {
    return html`
      <div class="container">
        <x-hello-world></x-hello-world>
      </div>
    `;
  }
}
