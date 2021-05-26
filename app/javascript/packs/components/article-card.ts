import {LitElement, html, TemplateResult, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('article-card')
export class ArticleCard extends LitElement {
  
  static styles = css`
    :host { display: block; }
    .article-card {
      padding: 1rem;
      border: 2px solid lightgray;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 325px;
      font-family: Arial, sans-serif;
    }
    .article-card h2 {
      font-size: 1.125rem;
      margin: 0;
    }
  `
  
  @property({ type: String }) title = '';

  @property({ type: Number }) articleId = 0;

  protected render(): TemplateResult {
    return html`
      <article class="article-card">
        <a href="/articles/${this.articleId}">
          <h2>${this.title}</h2>
        </a>
      </article>
    `
  }
}
