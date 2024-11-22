import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import products from "../Data/products.json"
import categories from "../Data/categories.json"
import { ProductContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";

export function Product() {
  const { cartNotify, state, dispatch } = useContext(CartContext);
  const { handleProduct } = useContext(ProductContext);

  const [filter, setFilter] = useState({
    sortFilter: "",
    categoryFilter: [],
    ratingFilter: 0
  });

  const navigate = useNavigate();

  const handleClearFilter = () => {
    setFilter({
      sortFilter: "",
      categoryFilter: [],
      ratingFilter: 0
    });
  };

  const sortingHandler = (sortElement) => {
    setFilter({ ...filter, sortFilter: sortElement });
  };

  const checkboxHandler = (categoryElement) => {
    const category = categoryElement.toLowerCase();
    filter.categoryFilter.includes(category)
      ? setFilter({
          ...filter,
          categoryFilter: filter.categoryFilter.filter(
            (categoryFilter) => categoryFilter !== category
          )
        })
      : setFilter({
          ...filter,
          categoryFilter: [...filter.categoryFilter, category]
        });
  };

  const ratingHandler = (ratingElement) => {
    setFilter({ ...filter, ratingFilter: ratingElement });
  };

  const priceFiltered =
    filter.sortFilter.length > 0
      ? [...products.data].sort((a, b) =>
          filter.sortFilter === "LtoH" ? a.price - b.price : b.price - a.price
        )
      : [...products.data];

  const categoryFiltered =
    filter.categoryFilter.length > 0
      ? [...priceFiltered].filter(({ category }) =>
          filter.categoryFilter.includes(category)
        )
      : [...priceFiltered];

  const ratingFiltered =
    filter.ratingFilter.length > 0
      ? [...categoryFiltered].filter(
          ({ rating }) => rating >= filter.ratingFilter
        )
      : [...categoryFiltered];

  const filterSection = (
    <form className="py-1 px-2" onReset={handleClearFilter}>
          <button className="border-2 border-[#514a9d] px-2.5 rounded-lg bg-white hover:bg-[lightgray]" type="reset">Clear Filters</button>
          <p className="w-[10rem] text-left text-xl my-2">
            <strong>Price </strong>
          </p>
          <p className="w-[10rem] text-left text-xl">
            <input
              type="radio"
              name="price"
              value="LtoH"
              onChange={(e) => sortingHandler(e.target.value)}
            />
            Low to High
          </p>
          <p className="w-[10rem] text-left text-xl">
            <input
              type="radio"
              name="price"
              value="HtoL"
              checked={filter.sortFilter === "" ? false : null}
              onChange={(e) => sortingHandler(e.target.value)}
            />
            High to Low
          </p>
          <p className="w-[10rem] text-left text-xl my-2">
            <strong>Category</strong>
          </p>
          {categories.category.map(({ _id, category }) => (
            <div className="w-[10rem] text-left text-xl" key={_id}>
              <input
                type="checkbox"
                value={category}
                name="category"
                onChange={(e) => checkboxHandler(e.target.value)}
                checked={filter.category === "" ? false : null}
              />
              {category}
            </div>
          ))}

          <p className="w-[10rem] text-left text-xl my-2">
            <strong>Rating </strong>
          </p>
          <p>
            1
            <input
              type="range"
              min="1"
              max="5"
              onChange={(e) => ratingHandler(e.target.value)}
            />
            5
          </p>
        </form>
  )

  return (
    <div className="flex">
      <div className="bg-[whitesmoke] border-r-2 border-gray-500 p-8">
        <button className="border-2 border-[#514a9d] mx-8 px-2.5 rounded-lg bg-white hover:bg-[lightgray]" onClick={() => navigate(-1)}> Back </button>
        {filterSection}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 pt-8 pb-20 bg-[whitesmoke]">
        {ratingFiltered.map((item) => {
          const { id, name, price, image, rating } = item;
          return (
            <div
              key={id}
              className="border border-[#514a9d] p-4 rounded-[20px]"
            >
              <div >
                <img className="h-64 w-60 border border-[#24c6dc] rounded-2xl p-4 bg-white" alt="product img" src={image} />
                <ul>{name}</ul>
                <p>
                  INR:{price}  ⭐{rating}
                </p>
              </div>

              {state.cart.find((element) => element.id === item.id) ? (
                <Link to="/cart" className="border-2 border-[#514a9d] px-2.5 rounded-lg bg-white hover:bg-[lightgray]">
                 Go to Cart
                </Link>
              ) : (
                <Link
                  className="border-2 border-[#514a9d] px-2.5 rounded-lg bg-white hover:bg-[lightgray]"
                  onClick={() => {
                    dispatch({type:"ADD_TO_CART", payload: item})
                    cartNotify();
                  }}
                >
                  Add to Cart
                </Link>
              )}
              <Link className="border-2 border-[#514a9d] mx-2 px-2.5 rounded-lg bg-white hover:bg-[lightgray]" to="/productDetail" onClick={() => handleProduct(id)}> View Details </Link>

            </div>
          );
        })}
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}