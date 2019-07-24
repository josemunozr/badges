import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';

class BadgeNew extends React.Component {
  state = {
    form: {}
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" height="100" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                email={this.state.form.email || ''}
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
