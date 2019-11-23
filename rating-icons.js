import {html} from 'lit-element';
import '@polymer/iron-iconset-svg';

const iconset = html
  `<iron-iconset-svg name="rating-icons" size="24">
      <svg>
          <defs>
              <g id="star">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </g>
          </defs>
      </svg>
  </iron-iconset-svg>`;

export default iconset;
