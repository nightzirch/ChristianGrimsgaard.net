import { useState } from 'react';
import styled from 'styled-components';

import { OkayJustOneMoreComponent } from '../components/OkayJustOneMoreComponent';
import { TheOnlyComponent } from '../components/TheOnlyComponent';

const StyledFrontPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const pages = [
  <TheOnlyComponent key="name">Christian Grimsgaard</TheOnlyComponent>,
  <TheOnlyComponent key="web" gradientName="blue">
    Web developer
  </TheOnlyComponent>,
  <TheOnlyComponent key="coffee" gradientName="brown">
    Coffee nerd
  </TheOnlyComponent>,
  <TheOnlyComponent key="sayHi" gradientName="orange">
    Say hi
  </TheOnlyComponent>,
];

const FrontPage = (): JSX.Element => {
  const [index, setIndex] = useState(1);

  const handleDotClick = (i: number): void => {
    setIndex(i);
  };

  return (
    <StyledFrontPage>
      {pages[index]}
      <OkayJustOneMoreComponent index={index} onClick={handleDotClick} length={pages.length} />
    </StyledFrontPage>
  );
};

export default FrontPage;
