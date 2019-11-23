import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
}

.star {
  --iron-icon-width: 16px;
  --iron-icon-height: 16px;
  color: var(--rating-component-color, rgb(158, 158, 158));
}

.active {
  color: var(--rating-component-active-color, rgb(255, 193, 7));
}
`;
