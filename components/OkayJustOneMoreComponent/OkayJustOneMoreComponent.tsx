import styled from 'styled-components';

interface Props {
  index: number;
  length: number;
  onClick: (i: number) => void;
}

interface CircleProps {
  isActive: boolean;
}

const CircleWrapper = styled.div`
  padding: 0.25em;
  cursor: pointer;

  &:hover > * {
    opacity: 1;
  }
`;

const Circle = styled.span<CircleProps>`
  background: #000;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.2')};
  width: 1rem;
  height: 1rem;
  border-radius: 0.5em;
  display: block;
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

export const OkayJustOneMoreComponent = (props: Props): JSX.Element => {
  const { index, length, onClick } = props;

  return (
    <Wrapper>
      {new Array(length).fill('').map((_, i) => (
        <CircleWrapper onClick={() => onClick(i)} key={i}>
          <Circle isActive={i === index} />
        </CircleWrapper>
      ))}
    </Wrapper>
  );
};
