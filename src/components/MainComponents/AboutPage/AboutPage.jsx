import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AboutPage.css';
import { BsGithub } from 'react-icons/bs';

const AboutPage = () => {
  return (
    <div className='about-container'>
      <Card>
        <Card.Text style={{ fontSize: '2rem' }} className='about-card-text'>
          Welcome to:
        </Card.Text>
        <Card.Title style={{ fontSize: '5rem' }} className='easy-audition-title'>Easy Audition</Card.Title>
      </Card>
      <Card className='mt-5'>
        <Card.Text style={{ fontSize: '2rem' }} className='about-card-text'>
          Easy Audition is the app for actors to take control of their careers, analyze their auditions, and book more
          gigs!
        </Card.Text>
      </Card>
      <a href='https://github.com/mcinerneyjake'>
        <Card className='mt-5 github-link-container'>
          <Card.Text style={{ fontSize: '2rem' }} className='about-card-text github-link'>
            <BsGithub />
          </Card.Text>
        </Card>
      </a>
    </div>
  );
}

export default AboutPage;
