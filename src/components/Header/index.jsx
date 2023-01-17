import { Logo } from 'components/Logo';
import { HeaderStyled, HeaderStyledContent,SelectWrapper } from './Header.Styled';
import { UserInfo } from 'components/UserInfo';
import { Navigation } from 'components/Navigation';
import { useAuth } from 'hooks/useAuth';
import { GlobalContainerStyled } from 'components/SharedLayout/GlobalContainer.styled';
import { LanguageSelect } from "components/LanguageSelect";

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderStyled>
        <GlobalContainerStyled>
          <HeaderStyledContent>
            <Logo />
             <SelectWrapper> <LanguageSelect/></SelectWrapper>
            {isLoggedIn ? <UserInfo /> : <Navigation />}
          </HeaderStyledContent>
        </GlobalContainerStyled>
      </HeaderStyled>
    </>
  );
};
