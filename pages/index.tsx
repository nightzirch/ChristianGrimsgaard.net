import {
  faCode,
  faCodeBranch,
  faCoffee,
  faFileCode,
  faGrinHearts,
  faKeyboard,
  faLaptop,
  faLaptopCode,
  faMountain,
  faPaperPlane,
  faPoo,
  faRobot,
  faSmileBeam,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';

import { OkayJustOneMoreComponent } from '../components/OkayJustOneMoreComponent';
import { TheOnlyComponent } from '../components/TheOnlyComponent';
import { TonsOfTinyStuffInTheBackground } from '../components/TonsOfTinyStuffInTheBackground';

const StyledFrontPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Link = styled.a`
  color: currentColor;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 0.75em;
`;

const pages = [
  <TheOnlyComponent key="name">
    Christian Grimsgaard
    <TonsOfTinyStuffInTheBackground
      icons={[
        faCode,
        faCodeBranch,
        faCoffee,
        faFileCode,
        faGrinHearts,
        faKeyboard,
        faLaptop,
        faLaptopCode,
        faMountain,
        faPoo,
        faRobot,
        faSmileBeam,
        faWifi,
      ]}
    />
  </TheOnlyComponent>,
  <TheOnlyComponent key="web" gradientName="blue">
    Web developer <Icon icon={faCode} />
    <TonsOfTinyStuffInTheBackground icons={[faCode]} />
  </TheOnlyComponent>,
  <TheOnlyComponent key="coffee" gradientName="brown">
    Coffee nerd <Icon icon={faCoffee} />
    <TonsOfTinyStuffInTheBackground icons={[faCoffee]} />
  </TheOnlyComponent>,
  <TheOnlyComponent key="sayHi" gradientName="orange">
    <Link href="mailto:mail@christiangrimsgaard.net">
      Say hi <Icon icon={faPaperPlane} />
    </Link>
    <TonsOfTinyStuffInTheBackground icons={[faPaperPlane]} />
  </TheOnlyComponent>,
];

const FrontPage = (): JSX.Element => {
  const [index, setIndex] = useState(0);

  const handleDotClick = (i: number): void => {
    setIndex(i);
  };

  const incrementIndex = (): void => {
    setIndex((i) => (i === pages.length - 1 ? 0 : i + 1));
  };

  return (
    <StyledFrontPage>
      <PageWrapper onClick={incrementIndex}>{pages[index]}</PageWrapper>
      <OkayJustOneMoreComponent index={index} onClick={handleDotClick} length={pages.length} />
    </StyledFrontPage>
  );
};

export default FrontPage;
