import {html, LitElement} from 'lit-element';
import style from './rating-component-styles.js';
import iconset from './rating-icons.js';
import '@polymer/iron-icon/iron-icon.js';

class RatingComponent extends LitElement {
  static get properties() {
    return {
      scale: {
        type: Number
      },
      rating: {
        type: Number
      }
    };
  }

  static get styles() {
    return style;
  }

  __getStarsHtml() {
    let stars = [];
    const activeStar = html`<iron-icon icon="rating-icons:star" class="active"></iron-icon>`;
    const inactiveStar = html`<iron-icon icon="rating-icons:star"></iron-icon>`;

    for (let i = 0; i < this.scale; i++)
      if (i < this.rating)
        stars = [...stars, activeStar];
      else
        stars = [...stars, inactiveStar];

    return stars;
  }

  render() {
    let stars = this.__getStarsHtml();

    return html`
        ${iconset}
        <div id="container">${stars}</div>
      `;
  }
}

window.customElements.define("rating-component", RatingComponent);
