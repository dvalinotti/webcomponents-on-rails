import {LitElement, html, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('fun-button')
export class FunButton extends LitElement {
  
  @property({ type: String }) name = 'Click me'

  protected render(): TemplateResult {
    return html`
      <button @click=${this.__onClick}>
        ${this.name}
      </button>
    `
  }

  private __onClick(): void {
    console.log('hello world!!!');
  }
}
