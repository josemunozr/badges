import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

import logoConf from '../images/platziconf-logo.svg';
import './styles/BadgeDetail.css';

function BadgeDetail(props) {
  const badge = props.badge;
  return (
    <div className="BadgeDetails">
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logoConf} alt="logo conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              email={badge.email}
              firstName={badge.firstName}
              lastName={badge.lastName}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col-2">
            <h1>Actions</h1>
            <div className="BadgeDetails__buttons">
              <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary">
                Edit
              </Link>

              <button className="btn btn-danger" onClick={props.onOpenModal}>
                Delete
              </button>
              <DeleteBadgeModal isOpenModal={props.isOpenModal} onCloseModal={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetail;
