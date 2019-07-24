import React from 'react';

import Gravatar from './Gravatar';

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
          <Gravatar email={this.props.email} className="Badge__avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
