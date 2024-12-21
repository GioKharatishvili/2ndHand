import { useEffect, useState } from "react";
import { cancelPurchase, getPurchaseHistory } from "../services/api/purchase";
import { fetchData } from "../services/utils/utils";
import PurchaseCard from "../components/PurchaseCard";
import Spinner from "../components/Spinner";

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(getPurchaseHistory, setPurchases, setLoading, []);
  }, []);

  const handleCancelClick = async (id) => {
    try {
      await cancelPurchase(id);
    } catch (err) {
      console.log(`Error Cancelling Purchase: ${err}`);
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : purchases.length <= 0 ? (
        <h1 className="text-center mt-5">No Purchases Available.</h1>
      ) : (
        <div className="d-flex justify-content-center flex-wrap gap-3 my-4">
          {purchases.map((purchase) => (
            <div key={purchase.id}>
              <PurchaseCard purchase={purchase} />
              <button className="btn btn-danger col-12" onClick={() => handleCancelClick(purchase.id)}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Purchases;
