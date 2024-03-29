import React from 'react';
import { Card } from 'react-bootstrap';

import './InfoPage.css';

function InfoPage() {
  return (
    <div className="info-container">
      <Card>
        <Card.Text style={{ fontSize: '2rem' }} className="info-card-text">
          That was:
        </Card.Text>
        <Card.Title style={{ fontSize: '5rem' }} className="easy-audition-title">
          Easy Audition
        </Card.Title>
      </Card>
      <Card className="mt-5">
        <Card.Text style={{ fontSize: '2rem' }} className="info-card-text">
          Technologies Used:
        </Card.Text>
        <Card.Text style={{ fontSize: '1.5rem' }}>
          <p>React</p>
          <p>React Redux</p>
          <p>Redux-Saga</p>
          <p>Node</p>
          <p>Express</p>
          <p>PostgreSQL</p>
          <p>React-Bootstrap</p>
          <p>Chart.js</p>
        </Card.Text>
      </Card>
      <Card className="mt-5">
        <Card.Text style={{ fontSize: '2rem' }} className="info-card-text">
          Special Thanks to:
        </Card.Text>
        <Card.Text style={{ fontSize: '1.5rem' }}>
          <p>Prime Digital Academy</p>
          <p>Matt Black</p>
          <p>The Dahl Cohort</p>
          <p>Friends and Family</p>
          <p>Kaitlin ❤️</p>
        </Card.Text>
      </Card>
    </div>
  );
}

export default InfoPage;
