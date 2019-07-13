import React from 'react';

import './styles/Badge.css';
import logoConf from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logoConf} alt="logo de conferencia" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://secure.gravatar.com/avatar/9080c6b09c3fe18281d069e6f17b82b3" alt="Avatar" />
          <h1>
            José <br /> Muñoz
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@jmunozr_</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
