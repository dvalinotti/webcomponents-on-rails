import {LitElement, html, TemplateResult, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('nav-bar')
export class NavBar extends LitElement {
  
  static styles = css`
    :host { display: block; }
    nav {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999;
      width: 100vw;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.125);
      background: #fafafa;
      display: flex;
    }
    nav header {
      margin: 0 1rem;
    }
    nav header h1 {
      width: max-content;
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 1rem;
      margin: 0;
      list-style: none;
    }
    ul li {
      margin-right: 1rem;
    }
    ul li a {
      color: #0f0f0f;
      font-weight: bold;
    }
  `

  protected render(): TemplateResult {
    return html`
      <nav>
        <header>
          <h1 class="text-2xl font-bold">Ruby on Rails</h1>
        </header>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/articles">
              Articles
            </a>
          </li>
        </li>
      </nav>
    `
  }
}
