import React from 'react';
import {
  Box,
  TextCalorie,
  BoxCalorie,
  NumberCalorie,
  Unit,
  List,
  ListTitle,
  Item,
  BoxList,
  Link,
  ButtonContainer,
} from './DailyCalorieIntake.styled';
import { useSelector } from 'react-redux';
import { productSelectors } from 'redux/products/productSelectors';
import { selectIsLoggedIn, userSelector } from 'redux/auth/auth-selectors';
import { useTranslation } from "react-i18next";

const DailyCalorieIntake = ({ onClose }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dataApi = useSelector(productSelectors.selectDataDiet);
  const notRecProductsUser = useSelector(userSelector.selectUserNotRecProducts);
  const userDailyCalorie = useSelector(userSelector.selectUserDailyCalorie);

  const { notRecProducts, dailyCalorie } = !isLoggedIn
    ? dataApi
    : { notRecProducts: notRecProductsUser, dailyCalorie: userDailyCalorie };

  const mds = window.matchMedia('(min-width: 768px)');
const{t}=useTranslation()
  return (
    <Box>
      {mds.matches ? (
        <TextCalorie>
          {t("ModalText.title_2_1")}<br></br>{t("ModalText.title_2_2")}
        </TextCalorie>
      ) : (
        <TextCalorie>{t("ModalText.title_1")}</TextCalorie>
      )}
      <BoxCalorie>
        <NumberCalorie>
          {dailyCalorie}
          <Unit>{t("ModalText.count_small")}</Unit>
        </NumberCalorie>
      </BoxCalorie>
      <BoxList>
        <ListTitle>{t("ModalText.text")}</ListTitle>
        <List as="ol">
          {notRecProducts.map(product => (
            <Item key={product?._id}>{product?.title?.ua}</Item>
          ))}
        </List>
      </BoxList>
      <ButtonContainer>
        <Link to={!isLoggedIn ? '/registration':'/diary'} onClick={onClose}>
          {t("ModalText.btn")}
        </Link>
      </ButtonContainer>
    </Box>
  );
};

export default DailyCalorieIntake;
