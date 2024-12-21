import PropTypes from "prop-types";

const CategoryCard = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={item.image.includes("data:image/png;base64,") ? item.image : `data:image/png;base64,${item.image}`}
        className="card-img-top"
        style={{ maxHeight: "300px" }}
        alt={item.name}
      />
      <div className="card-body">
        {item.id && <p className="card-text">ID: {item.id}</p>}
        <p className="card-text">Name: {item.name}</p>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
