import PropTypes from "prop-types";

const ProductCard = ({ item }) => {
  return (
    <div className="card mb-1" style={{ width: "18rem" }}>
      <img
        src={item.image.includes("data:image/png;base64,") ? item.image : `data:image/png;base64,${item.image}`}
        className="card-img-top position-relative"
        style={{maxHeight: "300px"}}
        alt={item.title}
      />
      <div className="card-body">
        <p className="card-text fs-4">
          {item.salePrice > 0 ? (
            <>
              <span className="text-decoration-line-through text-muted fs-5">$ {item.price}</span>{" "}
              <span className="fw-bold">$ {item.salePrice}</span>
            </>
          ) : (
            <span className="fw-bold">$ {item.price}</span>
          )}
        </p>
        <p className="card-text fw-semibold">{item.title}</p>
        <p className="card-text fw-semibold">{item.category_name}</p>
        <p className="card-text">{item.description ? item.description : "No Description Available"}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
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

export default ProductCard;
