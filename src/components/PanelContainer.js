import React from 'react';
import { 
  Card, 
  Header,
} from 'semantic-ui-react';

import Tools from './Panels/Tools';
import Properties from './Panels/Properties';
import Import from './Panels/Import';
import Export from './Panels/Export';

const PanelContainer = () => {
  return (
    <div>
      <Header as='h1' textAlign='center'>Form Builder</Header>
      <Card.Group>
        <Tools />
        <Properties />
        <Import />
        <Export />
      </Card.Group>
    </div>
  );
};

export default PanelContainer;