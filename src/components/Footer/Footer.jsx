import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <footer>
      &copy; Jake McInerney 2022<div>All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
