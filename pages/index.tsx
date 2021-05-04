import { faCode, faCoffee, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';

import { OkayJustOneMoreComponent } from '../components/OkayJustOneMoreComponent';
import { TheOnlyComponent } from '../components/TheOnlyComponent';

const StyledFrontPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  color: currentColor;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 0.75em;
`;

const pages = [
  <TheOnlyComponent key="name">Christian Grimsgaard</TheOnlyComponent>,
  <TheOnlyComponent key="web" gradientName="blue">
    Web developer <Icon icon={faCode} />
  </TheOnlyComponent>,
  <TheOnlyComponent key="coffee" gradientName="brown">
    Coffee nerd <Icon icon={faCoffee} />
  </TheOnlyComponent>,
  <TheOnlyComponent key="sayHi" gradientName="orange">
    <Link href="mailto:mail@christiangrimsgaard.net">
      Say hi <Icon icon={faPaperPlane} />
    </Link>
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
