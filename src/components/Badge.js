import React from 'react';
import logoConf from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={logoConf} alt="logo de conferencia" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            José <br /> Muñoz
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@jmunozr_</p>
        </div>
        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
