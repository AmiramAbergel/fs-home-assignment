/** @jsxImportSource @emotion/react */
import Modal from "../../UI/Modal/Modal.jsx";
import { parameterList } from "./ImageParameter.style.js";

const ImageParameter = ({ image }) => {
  return (
    <Modal>
      <ul css={parameterList}>
        <li>
          <strong>Views: </strong>
          {image.views}
        </li>
        <li>
          <strong>Downloads: </strong>
          {image.downloads}
        </li>
        <li>
          <strong>Likes: </strong>
          {image.likes}
        </li>
        <li>
          <strong>comments: </strong>
          {image.comments}
        </li>
      </ul>
    </Modal>
  );
};

export default ImageParameter;
