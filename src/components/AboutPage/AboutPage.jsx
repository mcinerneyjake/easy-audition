import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className='about-container'>
      <Card>
        <Card.Text style={{ fontSize: '2rem' }} className='bg-primary'>
          Welcome to:
        </Card.Text>
        <Card.Title style={{ fontSize: '5rem' }}>Easy Audition</Card.Title>
      </Card>
      <Card className='mt-5'>
        <Card.Text style={{ fontSize: '2rem' }}>
          Easy Audition is the app for actors to take control of their careers, analyze their auditions, and book more
          gigs!
        </Card.Text>
      </Card>
    </div>
  );
}

export default AboutPage;
