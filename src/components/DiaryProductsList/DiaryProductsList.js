import { DiaryItem } from './DiaryItem';
import { useSelector } from 'react-redux';
import { diarySelectors } from 'redux/diary/diarySelectors';
import Loader from 'components/Loader/Loader';
import { ListItem, List, ProductListBox } from './DiaryProductsList.styled';
import { useTranslation } from "react-i18next";

export const DiaryProductsList = () => {
  const productsByDate = useSelector(diarySelectors.selectProductByDate);
  const isLoading = useSelector(diarySelectors.selectIsLoading);
    const { t } = useTranslation();

  return (
    <>
      {isLoading && <Loader />}
      <ProductListBox>
        <List>
          {productsByDate?.length ? (
            productsByDate.map(product => (
              <ListItem key={product._id}>
                <DiaryItem product={product} />
              </ListItem>
            ))
          ) : (
            <p>{t("ProductForm.not_found_for_date")}</p>
          )}
        </List>
      </ProductListBox>
    </>
  );
};
