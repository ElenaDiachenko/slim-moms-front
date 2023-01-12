import styled from '@emotion/styled';

export const CalculatorStyledPage = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    display: flex;
    min-height: 100%;
  }
`;
