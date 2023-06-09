const Category = (props) => {
  const { item, onCategorySelect } = props;

  const handleClick = () => {
    onCategorySelect(item); // Inform the parent about the category selection
  };

  return (
    <li onClick={handleClick}>
      <header>
        <h3>{props.item}</h3>
      </header>
    </li>
  );
};

export default Category;
