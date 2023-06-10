const Category = (props) => {
  const { item, onCategorySelect } = props;

  const categoryClickHandler = () => {
    onCategorySelect(item); // Inform the parent about the category selection
  };

  return (
    <span onClick={categoryClickHandler}>
      <header>
        <h3>{props.item}</h3>
      </header>
    </span>
  );
};

export default Category;
