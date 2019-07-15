import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';

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
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge {...this.state.form} avatarUrl="https://s.gravatar.com/avatar/9080c6b09c3fe18281d069e6f17b82b3?s=80" />
              {/* <Badge
                firstName="José"
                lastName="Muñoz"
                twitter="jmunozr_"
                avatarUrl="https://s.gravatar.com/avatar/9080c6b09c3fe18281d069e6f17b82b3?s=80"
                titleJob="Frontend Engineer"
              /> */}
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;