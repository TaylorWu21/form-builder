import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class Import extends Component {
  render() {
    return (
      <Card centered={true}>
        <Card.Content>
          <Card.Header>
              Form Action 3
          </Card.Header>
          <Card.Meta>
            Export File
          </Card.Meta>
          <Card.Description>
            Export json or XML
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button color='blue'>JSON</Button>
            <Button.Or />
            <Button color='blue'>XML</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    );
  }
}

export default Import;