import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class Import extends Component {
  render() {
    return (
      <Card centered={true}>
        <Card.Content>
          <Card.Header>
            Form Action 4
          </Card.Header>
          <Card.Meta>
            Import
          </Card.Meta>
          <Card.Description>
            Import as .txt or to database
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button color='blue'>.text</Button>
            <Button.Or />
            <Button color='blue'>database</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    );
  }
}

export default Import;