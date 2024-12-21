import { useEffect, useState } from "react";
import { getLikedProducts } from "../services/api/likedProducts";
import { fetchData } from "../services/utils/utils";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const LikedProducts = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(getLikedProducts, setLikedProducts, setLoading, []);
  }, []);

  return (
    <div>
      <h1 className="text-center mt-2">Liked Products</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-3">
          {likedProducts.length > 0 ? (
            likedProducts.map((product) => (
              <div key={product.likedProduct.id}>
                <ProductCard item={product.likedProduct} />
              </div>
            ))
          ) : (
            <h2>No liked products available.</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default LikedProducts;
