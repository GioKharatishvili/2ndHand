import PropTypes from "prop-types";

const AdminProductCard = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={item.image.includes("data:image/png;base64,") ? item.image : `data:image/png;base64,${item.image}`}
        className="card-img-top"
        style={{ maxHeight: "300px" }}
        alt={item.title}
      />
      <div className="card-body">
        {item.id && <p className="card-text">ID: {item.id}</p>}
        <p className="card-text">Title: {item.title}</p>
        <p className="card-text">Category Name: {item.category_name}</p>
        <p className="card-text">Description: {item.description}</p>
        <p className="card-text">Sale Price: {item.salePrice}</p>
        <p className="card-text">Price: {item.price}</p>
      </div>
    </div>
  );
};

AdminProductCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    salePrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default AdminProductCard;
