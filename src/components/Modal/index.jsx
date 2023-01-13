import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Backdrop,
  ModalWindow,
  ModalButton,
  ModalButtonIcon,
} from './Modal.styled';

import sprite from 'images/icons.svg';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
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

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
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
