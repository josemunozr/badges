import React from 'react';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetail from './BadgeDetail';
import api from '../api';

import './styles/BadgeDetail.css';

class BadgeDetailContainer extends React.Component {
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

    return <BadgeDetail badge={this.state.data} />;
  }
}

export default BadgeDetailContainer;
