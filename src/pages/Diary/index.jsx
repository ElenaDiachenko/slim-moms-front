import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByDate } from 'redux/diary/diaryOperations';
import { diarySelectors } from 'redux/diary/diarySelectors';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateСalendar';
import { DiaryProductsList } from 'components/DiaryProductsList';
import { RightSideBar } from 'components/RightSideBar';

import {
  DiaryStyled,
  Wrapper,
  DiaryAdd,
  DiaryCalendar,
  MobileWrapper,
  MobileButton,
  DiaryStyledPage,
} from './Diary.styled';
import { useWindowResize } from 'hooks/useWindowResize';
import { BarBackground } from 'components/BarBackground';
import { useAuth } from 'hooks/useAuth';

const Diary = () => {
  const date = useSelector(diarySelectors.selectDate);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const { width } = useWindowResize();
  useEffect(() => {
    if (date && isLoggedIn) {
      dispatch(getByDate(date));
    }
  }, [date, dispatch, isLoggedIn]);

  return (
    <>
      <BarBackground />
      <DiaryStyledPage>
        <DiaryStyled>
          <DiaryCalendar>
            <DiaryDateCalendar />
          </DiaryCalendar>
          {width > 767 ? (
            <Wrapper>
              <DiaryAdd>
                <DiaryAddProductForm />
              </DiaryAdd>
              <DiaryProductsList />
            </Wrapper>
          ) : (
            <MobileWrapper>
              <DiaryProductsList />
              <MobileButton to="/add">+</MobileButton>
            </MobileWrapper>
          )}
        </DiaryStyled>
        <RightSideBar />
      </DiaryStyledPage>
      {/* </BarBackground> */}
    </>
  );
};

export default Diary;
