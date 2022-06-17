import type { TemplateResult } from "lit";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import { TW } from "../util/TailwindMixin";

@customElement("x-hello-world")
export class HelloWorld extends TW(LitElement) {
  render(): TemplateResult {
    return html` <button class="btn text-2xl">Hello world!</button> `;
  }
}
