import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar';
import { CalculatorStyledPage } from './Calculator.styled';

import { BarBackground } from 'components/BarBackground';

const Calculator = () => {
  return (
    <>
      <BarBackground />
      <CalculatorStyledPage>
        <DailyCaloriesForm />
        <RightSideBar />
      </CalculatorStyledPage>
      {/* </BarBackground> */}
    </>
  );
};

export default Calculator;
