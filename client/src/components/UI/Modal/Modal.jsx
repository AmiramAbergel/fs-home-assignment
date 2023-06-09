/** @jsxImportSource @emotion/react */
import { imageActions } from '../../../store/image-slice.js';
import { uiActions } from '../../../store/ui-slice.js';
import { backdrop, modal } from './Modal.style.js';
import { useDispatch, useSelector } from 'react-redux';

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const isCategoryModalVisible = useSelector(
    (state) => state.ui.categoryIsVisible
  );
  const isImageModalVisible = useSelector(
    (state) => state.image.selectedImage !== null
  );

  const toggleModalHandler = () => {
    // Depending on which modal is currently open, dispatch the appropriate action
    if (isCategoryModalVisible) {
      dispatch(uiActions.toggle());
    } else if (isImageModalVisible) {
      dispatch(imageActions.deselectImage());
    }
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
