import React from 'react';
import { Link } from 'react-router-dom';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Badge from '../components/Badge';
import api from '../api';

import logoConf from '../images/platziconf-logo.svg';
import './styles/BadgeDetail.css';

class BadgeDetail extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const badgeId = this.props.match.params.badgeId;
      const data = await api.badges.read(badgeId);
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const badge = this.state.data;

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
                  {this.state.data.firstName} {this.state.data.lastName}
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

                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetail;
