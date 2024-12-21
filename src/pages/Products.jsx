import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/api/products";
import { getLikedProducts, addLikedProduct, removeLikedProduct } from "../services/api/likedProducts";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { FaStar } from "react-icons/fa";
import { addProductToCart, getProductsFromCart } from "../services/api/cart";
import Spinner from "../components/Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);

  const selectedCategory = searchParams.get("category");
  const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
  const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity;
  const title = searchParams.get("title")?.toLowerCase() || "";
  const onSale = searchParams.get("onSale") === "true";
  const pageSize = searchParams.get("pageSize") || 10;

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const [productsResult, likedProductsResult, cartProductsResult] = await Promise.all([
          getProducts(),
          getLikedProducts(),
          getProductsFromCart(),
        ]);

        setProducts(productsResult.data.products || []);
        setLikedProducts(likedProductsResult.data || []);
        setCartProducts(cartProductsResult.data || []);
      } catch (err) {
        console.log("Error Fetching Data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const isLiked = (id) => likedProducts.some((product) => product.product_id === id);

  const handleStarClick = async (product) => {
    if (isLiked(product.id)) {
      const likedProduct = likedProducts.find((p) => p.product_id === product.id);
      if (likedProduct) {
        try {
          await removeLikedProduct(likedProduct.id);
          setLikedProducts((prev) => prev.filter((p) => p.product_id !== product.id));
        } catch (err) {
          console.log(`Error Removing Liked Product: ${err}`);
        }
      }
    } else {
      try {
        const result = await addLikedProduct(product.id);
        setLikedProducts((prev) => [...prev, { id: result.data.id, product_id: product.id, ...result.data }]);
      } catch (err) {
        console.log(`Error Adding Liked Product: ${err}`);
      }
    }
  };

  const handleAddToCartClick = async (product_id) => {
    try {
      await addProductToCart(product_id);
    } catch (err) {
      console.log(`Error Adding To Cart: ${err}`);
    }
  };

  const isInCart = (id) => cartProducts.some((product) => product.product_id === id);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.category_name === selectedCategory;
    const matchesPrice =
      (!minPrice || product.salePrice > 0 ? product.salePrice >= minPrice : product.price >= minPrice) &&
      (!maxPrice || product.salePrice > 0 ? product.salePrice <= maxPrice : product.price <= maxPrice);
    const matchesTitle = !title || product.title.toLowerCase().includes(title);
    const matchesOnSale = !onSale || product.salePrice > 0;

    return matchesCategory && matchesPrice && matchesTitle && matchesOnSale;
  });

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="d-flex">
        <Filter />
        {loading ? (
          <Spinner />
        ) : (
          <div className="d-flex flex-column w-100">
            <div className="d-flex flex-wrap gap-3 p-3">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <div key={product.id} className="position-relative">
                    <FaStar
                      className="fa-star"
                      style={{ color: isLiked(product.id) ? "#FFFF00" : "#808080" }}
                      onClick={() => handleStarClick(product)}
                    />
                    <ProductCard item={product} />
                    <button
                      className="btn btn-warning col-12"
                      onClick={() => handleAddToCartClick(product.id)}
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id) ? "In Cart" : "Add To Cart"}
                    </button>
                  </div>
                ))
              ) : (
                <h1>No Products Available.</h1>
              )}
            </div>
            {totalPages > 0 && (
              <div className="d-flex justify-content-center align-items-center gap-2 my-3">
                <button
                  className="btn btn-secondary"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-secondary"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
