import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Grid,
} from 'semantic-ui-react';
import 'normalize.css';

import PanelContainer from './PanelContainer';
import FormContainer from './FormContainer';

const borderedColumn = styled.div`
  border: black dashed 2px;
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: 30px;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Grid>
          <Grid.Column width={12} as={borderedColumn}>
            <FormContainer />
          </Grid.Column>
          <Grid.Column width={4}>
            <PanelContainer />
          </Grid.Column>
        </Grid>
      </AppContainer>
    );
  }
}

export default App;
