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
    data: undefined,
    isOpenModal: false
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

  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  handleOpenModal = () => {
    this.setState({ isOpenModal: true });
  };

  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });
      this.props.history.push('/badges');
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

    return (
      <BadgeDetail
        badge={this.state.data}
        isOpenModal={this.state.isOpenModal}
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        onDeleteBadge={this.handleDeleteBadge}
      />
    );
  }
}

export default BadgeDetailContainer;
