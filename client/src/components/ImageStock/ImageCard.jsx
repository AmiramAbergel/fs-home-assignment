const ImageCard = ({ image }) => {
  console.log(image);
  return (
    <div>
      <img src={image.webformatURL} alt='' />
      <ul>
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
    </div>
  );
};

export default ImageCard;
