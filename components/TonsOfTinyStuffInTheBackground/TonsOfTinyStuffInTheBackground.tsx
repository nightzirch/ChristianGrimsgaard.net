import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { getRandomItemFromArray } from '../../utils/array';

interface Props {
  icons: any[];
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
`;

const Icon = styled(FontAwesomeIcon)``;

export const TonsOfTinyStuffInTheBackground = (props: Props): JSX.Element => {
  const { icons } = props;
  const randomIcon = getRandomItemFromArray(icons);

  return (
    <Wrapper>
      <Icon icon={randomIcon} />
    </Wrapper>
  );
};
