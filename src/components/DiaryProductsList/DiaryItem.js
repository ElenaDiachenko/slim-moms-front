import { useDispatch } from 'react-redux';
import { removeProduct } from 'redux/diary/diaryOperations';
import { ProductTitle, ProductProp, ExitBtn, Unit } from './DiaryItem.styled';
import sprite from 'images/icons.svg';
import { useAdaptivString } from 'hooks/useAdaptivString';
import { useTranslation } from "react-i18next";

export const DiaryItem = ({ product }) => {
  const dispatch = useDispatch();
  const title = useAdaptivString(product.product);
  const handleDelete = () => {
    dispatch(removeProduct(product._id));
  };
    const { t } = useTranslation();

  return (
    <>
      <ProductTitle>{title}</ProductTitle>
      <ProductProp>
        {product?.weight}
        <span> {t("EatenProductsListItem.item_1")}</span>
      </ProductProp>
      <ProductProp>
        {Math.round(product?.calories)}
        <Unit> {t("EatenProductsListItem.item_2")}</Unit>
      </ProductProp>

      <ExitBtn type="button" onClick={handleDelete}>
        <svg width="12px" height="12px">
          <use href={sprite + '#icon-cross_delete_12x12'} />
        </svg>
      </ExitBtn>
    </>
  );
};
