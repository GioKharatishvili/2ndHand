import PropTypes from "prop-types";

const PurchaseCard = ({ purchase }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2>Purchase {purchase.id}</h2>
        <p>Total Price: $ {purchase.totalPrice}</p>
        <p>Total Items: {purchase.totalItems}</p>
      </div>
    </div>
  );
};

PurchaseCard.propTypes = {
  purchase: PropTypes.shape({
    id: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
  }).isRequired,
};

export default PurchaseCard;
