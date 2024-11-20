import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";

import products from "./Data/products.json"
import { ProductContext } from "./Contexts/ProductContext";

export const Navbar = () => {

  const [search, setSearch] = useState("");
  const { handleProduct } = useContext(ProductContext);

    return (
      <div>
        <nav className="p-6 bg-[#514a9d] flex flex-wrap items-center justify-around">
        <NavLink className="text-[whitesmoke] px-12 text-3xl font-cursive" to="/">
          VOiCE
        </NavLink>
        <div>
          <input
            className="h-8 w-[20rem] text-base rounded-[2rem] px-2.5 border-none hover:bg-[lightgray]"
            type="text"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && <span className="m-0 ml-[-2rem] cursor-pointer" onClick={() => setSearch("")} >❌</span> }
        </div>
        <div className="flex flex-wrap gap-8 text-xl">
          <NavLink className="text-white" to="/product">
            Explore
          </NavLink>
          <NavLink className="text-white" to="/cart">
            Cart
          </NavLink>
        </div>
      </nav>

      {search &&
      <div className="absolute border border-blue-500 text-left mx-[40%] px-4 bg-white shadow-[0px_10px_10px_2px_lightblue]">
        {products.data.filter(
          ({ name, category }) =>
            name
              .toUpperCase()
              .toLowerCase()
              .includes(search.toUpperCase().toLowerCase()) ||
            category
              .toUpperCase()
              .toLowerCase()
              .includes(search.toUpperCase().toLowerCase())
        ).map((item) => {
          const { id, name, category, image } = item;
          return (
            <div
              key={id}
              onClick={() => {
                handleProduct(id);
                setSearch("");
              }}
            >
              <Link className="text-black inline-flex items-center border-b-[1px] border-[#24c6dc] w-fit" to="/productDetail">
                <img
                  className="h-8 w-8"
                  alt="voice"
                  src={image}
                />
                {name} || ({category})
              </Link>
            </div>
          );
        }) } 
        </div>}

    </div>
    )
}