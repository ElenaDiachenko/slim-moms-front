import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { MainBackground } from 'components/MainBackground';

const MainPage = () => {
  // const isLoading = useSelector(bloodSelectors.selectBloodIsLoading);
  return (
    <>
      <MainBackground />
      <DailyCaloriesForm />
      {/* {isLoading && <Loader />} */}
      {/* </MainBackground> */}
    </>
  );
};

export default MainPage;
