import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {}
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
      const badgeId = this.props.match.params.badgeId;
      const data = await api.badges.read(badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      const badgeId = this.props.match.params.badgeId;
      await api.badges.update(badgeId, this.state.form);
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
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="img-fluid" src={header} alt="Logo" height="100" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge firstName={this.state.form.firstName || 'FIRST_NAME'} lastName={this.state.form.lastName || 'LAST_NAME'} jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} twitter={this.state.form.twitter || 'twitter'} email={this.state.form.email || ''} />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form} error={this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
