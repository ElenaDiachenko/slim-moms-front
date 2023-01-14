import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header';
import Loader from 'components/Loader/Loader';
import { GlobalContainerStyled, Wrapper } from './GlobalContainer.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />

      <Suspense fallback={<Loader />}>
        <GlobalContainerStyled>
          <Outlet />
        </GlobalContainerStyled>
      </Suspense>
    </Wrapper>
  );
};
