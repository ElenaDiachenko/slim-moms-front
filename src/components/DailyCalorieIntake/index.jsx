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
} from './DailyCalorieIntake.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { clearState } from '../../redux/bloodDiet/operations';
// import { toggleModal } from 'redux/bloodDiet/operations';
import { productSelectors } from 'redux/products/productSelectors';

import { selectIsLoggedIn, userSelector } from 'redux/auth/auth-selectors';

const DailyCalorieIntake = ({ onClose }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dataApi = useSelector(productSelectors.selectDataDiet);
  const notRecProductsUser = useSelector(userSelector.selectUserNotRecProducts);
  const userDailyCalorie = useSelector(userSelector.selectUserDailyCalorie);
  // const dataApiUser = useSelector(selectUserNotRecProducts);

  const { notRecProducts, dailyCalorie } = !isLoggedIn
    ? dataApi
    : { notRecProducts: notRecProductsUser, dailyCalorie: userDailyCalorie };

  // const dispatch = useDispatch();

  // const onBtnClick = () => {
  //   dispatch(toggleModal(false));
  //   dispatch(clearState());
  // };

  const mds = window.matchMedia('(min-width: 768px)');

  return (
    <Box>
      {mds.matches ? (
        <TextCalorie>
          Your recommended daily<br></br>calorie intake is
        </TextCalorie>
      ) : (
        <TextCalorie>Your recommended daily calorie intake is</TextCalorie>
      )}
      <BoxCalorie>
        <NumberCalorie>
          {dailyCalorie}
          <Unit>kcal</Unit>
        </NumberCalorie>
      </BoxCalorie>
      <BoxList>
        <ListTitle>Foods you should not eat</ListTitle>
        <List as="ol">
          {notRecProducts.map(product => (
            <Item key={product._id}>{product.title.ua}</Item>
          ))}
        </List>
      </BoxList>
      <Link to={!isLoggedIn && '/registration'} onClick={onClose}>
        Start losing weight
      </Link>
    </Box>
  );
};

export default DailyCalorieIntake;
