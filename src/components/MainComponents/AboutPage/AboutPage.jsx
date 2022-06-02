import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className='about-container'>
      <Card>
        <Card.Text style={{ fontSize: '2rem' }} className='about-card-text'>
          Welcome to:
        </Card.Text>
        <Card.Title style={{ fontSize: '5rem' }}>Easy Audition</Card.Title>
      </Card>
      <Card className='mt-5'>
        <Card.Text style={{ fontSize: '2rem' }} className='about-card-text'>
          Easy Audition is the app for actors to take control of their careers, analyze their auditions, and book more
          gigs!
        </Card.Text>
      </Card>
    </div>
  );
}

export default AboutPage;
