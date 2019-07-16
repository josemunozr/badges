import React from 'react';

import './styles/BadgesList.css';

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="Badge">
              <img className="Badge__avatar" src={badge.avatarUrl} alt="avatar" />
              <div className="Badge__info">
                <div>
                  {badge.firstName} {badge.lastName}
                </div>
                <div>
                  <a href="twitter.com">@{badge.twitter}</a>
                </div>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
