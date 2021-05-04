import styled from 'styled-components';

import { TheOnlyComponent } from '../components/TheOnlyComponent';

const StyledFrontPage = styled.main``;

const FrontPage = (): JSX.Element => {
  return (
    <StyledFrontPage>
      <TheOnlyComponent gradientName="blue">Christian Grimsgaard</TheOnlyComponent>
    </StyledFrontPage>
  );
};

export default FrontPage;
