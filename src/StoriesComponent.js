import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './StoriesComponent-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<stories-component></stories-component>
```

##styling-doc

@customElement stories-component
*/
export class StoriesComponent extends LitElement {
  static get is() {
    return 'stories-component';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('stories-component-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="stories-component">
        <div class="storie">
          <img src="https://editorial.uefa.com/resources/026c-12f705c46a6c-9f2eb0579483-1000/messi_graphic.jpg" alt="MDN">
        </div>
        <div class="storie">
          <img src="https://www.hazunaweb.com/imagenes/prueba.jpg" alt="MDN">
        </div>
        <div class="storie">
          <img src="https://www.show.news/__export/1595109462886/sites/debate/img/2020/07/18/goku_x2x_crop1595109404079.jpg_423682103.jpg" alt="MDN">
        </div>
        <div class="storie">
          <img src="https://www.futbolred.com/files/article_main/uploads/2021/11/29/61a4f0e6c0b74.jpeg" alt="MDN">
        </div>
        <div class="storie">
          <img src="https://estaticos-cdn.sport.es/clip/4ebbf6db-4d24-4861-9f46-90262630b3a6_alta-libre-aspect-ratio_default_0.jpg" alt="MDN">
        </div>
      </div>
    `;
  }
}
