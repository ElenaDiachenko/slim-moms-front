import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modal/slice';
import DailyCalorieIntake from '../DailyCalorieIntake';
import {
  Backdrop,
  ModalWindow,
  ModalButton,
  ModalButtonIcon,
} from './Modal.styled';
import { clearState } from '../../redux/bloodDiet/operations';
import sprite from 'images/icons.svg';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModal(false));
        dispatch(clearState());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModal(false));
      dispatch(clearState());
    }
  };

  const onBtnClick = () => {
    dispatch(toggleModal(false));
    dispatch(clearState());
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalWindow>
        <DailyCalorieIntake />
        <ModalButton onClick={() => onBtnClick()}>
          <ModalButtonIcon>
            <use href={sprite + '#icon-exit-icon'} />
          </ModalButtonIcon>
        </ModalButton>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
}
