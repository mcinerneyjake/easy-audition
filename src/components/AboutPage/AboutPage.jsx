import React from 'react';
import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className='about-container'>
      <div>
        <p>Welcome to:</p>
        <h1>Easy Audition</h1>
        <p>
          Easy Audition is the app for actors to take control of their careers, analyze their auditions, and book more
          gigs!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
