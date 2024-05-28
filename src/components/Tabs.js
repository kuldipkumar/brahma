import React, { useState } from 'react';
import { Tab, Nav, Form, Button } from 'react-bootstrap';
import './Tabs.css';

const Tabs = () => {
  const [key, setKey] = useState('search');

  return (
    <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
      <Nav variant="tabs" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="upload">Upload</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="search">
          <Form>
            {['Database', 'API', 'Knowledge Repo', 'Generate Code/Test Case'].map((option, index) => (
              <Form.Check 
                key={index}
                type="radio"
                label={option}
                name="search-options"
                id={`search-${index}`}
              />
            ))}
          </Form>
        </Tab.Pane>
        <Tab.Pane eventKey="upload">
          <Form>
            {['Upload File', 'Upload Link'].map((option, index) => (
              <Form.Check 
                key={index}
                type="radio"
                label={option}
                name="upload-options"
                id={`upload-${index}`}
              />
            ))}
          </Form>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default Tabs;
