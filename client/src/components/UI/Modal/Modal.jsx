/** @jsxImportSource @emotion/react */
import { uiActions } from '../../../store/ui-slice.js';
import { backdrop, modal } from './Modal.style.js';
import { useDispatch } from 'react-redux';

const Backdrop = (props) => {
  const dispatch = useDispatch();

  const toggleModalHandler = () => {
    // Dispatch the toggle action
    dispatch(uiActions.toggle());
  };

  return <div css={backdrop} onClick={toggleModalHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div css={modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
