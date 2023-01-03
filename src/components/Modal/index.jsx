import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleModal } from '../../redux/bloodDiet/operations';
// import { bloodSelectors } from 'redux/bloodDiet/bloodDietSelectors';
import DailyCalorieIntake from '../DailyCalorieIntake';
import {
  Backdrop,
  ModalWindow,
  ModalButton,
  ModalButtonIcon,
  NotFound,
} from './Modal.styled';
// import { clearState } from '../../redux/bloodDiet/operations';
import sprite from 'images/icons.svg';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  // const dispatch = useDispatch();
  // const error = useSelector(bloodSelectors.selectBloodError);

  useEffect(() => {
    const hanleEscapeClose = e => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', hanleEscapeClose);
    return () => {
      document.body.removeEventListener('keydown', hanleEscapeClose);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  // const onBtnClick = () => {
  //   dispatch(toggleModal(false));
  //   dispatch(clearState());
  // };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        {/* {!error ? <DailyCalorieIntake /> : <NotFound>404 NotFound</NotFound>} */}
        <ModalButton onClick={onClose}>
          <ModalButtonIcon>
            <use href={sprite + '#icon-exit-icon'} />
          </ModalButtonIcon>
        </ModalButton>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
}
