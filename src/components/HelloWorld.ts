import type { TemplateResult } from "lit";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import { TW } from "../util/TailwindMixin";

@customElement("x-hello-world")
export class HelloWorld extends TW(LitElement) {
  render(): TemplateResult {
    return html` <h1 class="text-2xl">Hello world!</h1> `;
  }
}
