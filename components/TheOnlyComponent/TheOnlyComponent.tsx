import { ReactNode } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { GradientName } from '../../styles/appTheme';
import { theOnlyComponentTheme } from '../../styles/theOnlyComponentTheme';

interface Props {
  children: ReactNode;
  gradientName?: GradientName;
}

const TheOnlyStyledComponent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${theme.background};
    color: ${theme.textColor};
  `}
`;

const Text = styled.span`
  font-size: 5rem;
`;

export const TheOnlyComponent = (props: Props): JSX.Element => {
  const { children, gradientName = 'default' } = props;

  return (
    <ThemeProvider theme={theOnlyComponentTheme[gradientName]}>
      <TheOnlyStyledComponent {...props}>
        <Text>{children}</Text>
      </TheOnlyStyledComponent>
    </ThemeProvider>
  );
};
