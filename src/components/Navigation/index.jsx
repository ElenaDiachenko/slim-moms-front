import { useTranslation } from "react-i18next";
// import i18n from "i18next";
import { NavStyled, Link } from './Navigation.styled';
import { useEffect } from "react";

export const Navigation = () => {
  const languages = [
            {
          code: 'en',
          name: 'English'
        },
       
        {
          code: 'uk',
          name: 'Ukrainian'
        },
      ]

  const { i18n, t } = useTranslation();

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")) {
			i18n.changeLanguage("uk");
		}
	}, [i18n]);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
  };
  
  return (
    <NavStyled>
      <select
							// className="nav-link bg-dark border-0 ml-1 mr-2"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
      >
        {languages.map(it => <option key={it.code} value={it.code}>{it.name}</option>)}
						</select>
      <Link to="/login">{t("header.signin")}</Link>
      <Link to="/registration">{t("header.signup")}</Link>
    </NavStyled>
  );
};
