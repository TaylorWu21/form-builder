import React, { Component } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';

class Tools extends Component {
  render() {
    return (
      <Card centered={true}>
        <Card.Content>
          <Card.Header>
            Form Action 1
          </Card.Header>
          <Card.Meta>
            Add Something to Form
          </Card.Meta>
          <Card.Description>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default Tools;