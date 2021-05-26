import {LitElement, html, TemplateResult, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('article-card')
export class ArticleCard extends LitElement {
  
  static styles = css`
    :host { display: block; }
    .article-card {
      border: 2px solid lightgray;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 325px;
      padding: 1rem;
    }
    a {
      text-decoration: none;
      color: black;
      width: 100%;
    }
    .article-card h2 {
      font-size: 1.125rem;
      margin: 0;
    }
    .article-card span {
      font-size: 0.875rem;
    }
  `
  
  @property({ type: String }) title = '';

  @property({ type: Number }) articleId = 0;

  @property({ type: String }) createdAt = '';

  getFormattedDate(): string {
    const date = new Date(this.createdAt);
    return date.toLocaleDateString();
  }

  protected render(): TemplateResult {
    return html`
      <a href="/articles/${this.articleId}">
        <article class="article-card">
          <h2>${this.title}</h2>
          <span>${this.getFormattedDate()}</span>
        </article>
      </a>
    `
  }
}
