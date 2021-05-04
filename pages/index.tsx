import styled from 'styled-components';

const StyledFrontPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FrontPage = (): JSX.Element => {
  return <StyledFrontPage>Frontpage</StyledFrontPage>;
};

export default FrontPage;
