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
      stories: { type: Array },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.stories = [];
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
        ${this.stories.map(i => 
          html`
          <div class="storie">
            <img src=${i} alt="MDN">
          </div>  
          `
        )}
      </div>
    `;
  }
}
