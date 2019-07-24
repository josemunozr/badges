import React from 'react';
import Gravatar from './Gravatar';

function BadgesListItem(props) {
  return (
    <div className="BadgesListItem">
      <Gravatar email={props.badge.email} className="BadgesListItem__avatar" />
      <div className="Badge-item__info">
        <div>
          <strong>
            {props.badge.firstName} {props.badge.lastName}
          </strong>
        </div>
        <div>@{props.badge.twitter}</div>
        <p>{props.badge.jobTitle}</p>
      </div>
    </div>
  );
}

export default BadgesListItem;
