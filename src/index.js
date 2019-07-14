import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badges from './components/Badge';

ReactDOM.render(
  <Badges
    firstName="José"
    lastName="Muñoz"
    titleJob="Frontend Engineer"
    twitter="jmunozr_"
    avatarUrl="https://secure.gravatar.com/avatar/9080c6b09c3fe18281d069e6f17b82b3"
  />,
  document.getElementById('root')
);
