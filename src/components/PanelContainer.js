import React from 'react';
import { 
  Card, 
  Header,
} from 'semantic-ui-react';
import styled from 'styled-components';

import Tools from './Panels/Tools';
import Properties from './Panels/Properties';
import Import from './Panels/Import';
import Export from './Panels/Export';

const Panel = styled.div`
  height: 60%;
  overflow: auto;
`;

const PanelContainer = () => {
  return (
    <Panel>
      <Header as='h1' textAlign='center'>Form Builder</Header>
      <Card.Group>
        <Tools />
        <Properties />
        <Import />
        <Export />
      </Card.Group>
    </Panel>
  );
};

export default PanelContainer;