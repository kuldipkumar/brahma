import React, { useState } from 'react';
import './Sidebar.css';
import { Tab, Tabs, Form } from 'react-bootstrap';

const Sidebar = () => {
  const [key, setKey] = useState('search');

  return (
    <div className="sidebar">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="search" title="Search">
          <Form>
            <Form.Check
              type="radio"
              label="Database"
              name="searchOptions"
              id="database"
            />
            <Form.Check
              type="radio"
              label="API"
              name="searchOptions"
              id="api"
            />
            <Form.Check
              type="radio"
              label="Knowledge Repo"
              name="searchOptions"
              id="knowledgeRepo"
            />
            <Form.Check
              type="radio"
              label="Generate Code/Test Case"
              name="searchOptions"
              id="generateCode"
            />
          </Form>
        </Tab>
        <Tab eventKey="upload" title="Upload">
          <Form>
            <Form.Check
              type="radio"
              label="Upload File"
              name="uploadOptions"
              id="uploadFile"
            />
            <Form.Check
              type="radio"
              label="Upload Link"
              name="uploadOptions"
              id="uploadLink"
            />
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Sidebar;
