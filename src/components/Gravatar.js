import React from 'react';
import md5 from 'md5';

function Gravatar(props) {
  const hash = md5(props.email);
  const src = `http://gravatar.com/avatar/${hash}?d=identicon`;
  return <img className={props.className} src={src} alt="Avatar" />;
}

export default Gravatar;
