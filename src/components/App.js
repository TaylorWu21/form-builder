import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Grid,
} from 'semantic-ui-react';
import 'normalize.css';

import PanelContainer from './PanelContainer';
import FormContainer from './FormContainer';

const AppContainer = styled.div`
  margin-top: 30px;
`;

const Row = styled(Grid.Row)`
  height: 100vh;
`;

const FormColumn = styled.div`
  height: 90%;
  border: black dashed 2px;
`;

const PanelColumn= styled.div`
  height: 90%;
  overflow: auto;
`;


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Grid>
          <Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={11} as={FormColumn}>
              <FormContainer />
            </Grid.Column>
            <Grid.Column width={4} as={PanelColumn}>
              <PanelContainer />
            </Grid.Column>
          </Row>
        </Grid>
      </AppContainer>
    );
  }
}

export default App;
