import React from 'react';
import {
  Box,
  List,
  ListTitle,
  PreContent,
  Item,
  BoxList,
  Container,
  Title,
  Content,
  ContainerItem,
} from './RightSideBar.styled';
import { diarySelectors } from 'redux/diary/diarySelectors';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { useTranslation } from "react-i18next";

export const RightSideBar = () => {
  const { user } = useAuth();
  const notRecProducts = user.notRecProducts || [];
  const dailyCalorie = user.dailyCalorie || 0;

  const caloricityPerDay = useSelector(diarySelectors.selectCaloricityPerDay);
  const selectedDate = useSelector(diarySelectors.selectDate);
  const normalizedSelectedDate = new Date(selectedDate)
    .toLocaleString()
    .slice(0, 10);

  const leftCalories = dailyCalorie - caloricityPerDay;
  const percentOfNormal = (caloricityPerDay / dailyCalorie) * 100;
    const { t } = useTranslation();

  return (
    <Box>
      <BoxList>
        <ListTitle>{t("CalloriesText.title_1")} {normalizedSelectedDate}</ListTitle>
        <Container>
          <ContainerItem>
            <Title>{t("CalloriesText.item_1")}</Title>
            <Content>
              {caloricityPerDay > 0 ? Math.round(leftCalories) : 0} {t("CalloriesText.count")}
            </Content>{' '}
          </ContainerItem>
          <ContainerItem>
            <Title>{t("CalloriesText.item_2")}</Title>
            <Content>
              {caloricityPerDay > 0 ? Math.round(caloricityPerDay) : 0} {t("CalloriesText.count")}{' '}
            </Content>
          </ContainerItem>
          <ContainerItem>
            <Title>{t("CalloriesText.item_3")} </Title>
            <Content>
              {' '}
              {dailyCalorie > 0 ? Math.round(dailyCalorie) : 0} {t("CalloriesText.count")}{' '}
            </Content>
          </ContainerItem>
          <ContainerItem>
            <Title>{t("CalloriesText.item_4")}</Title>
            <Content>
              {caloricityPerDay > 0 && dailyCalorie > 0? Math.round(percentOfNormal) : 0} %
            </Content>
          </ContainerItem>
        </Container>
      </BoxList>
      <BoxList>
        <ListTitle>{t("CalloriesText.title_2")}</ListTitle>
        {notRecProducts.length ? (
          <List>
            {notRecProducts.map(product => (
              <Item key={product._id}>{product.title.ua}</Item>
            ))}
          </List>
        ) : (
          <PreContent>{t("CalloriesText.item_5")}</PreContent>
        )}
      </BoxList>
    </Box>
  );
};
