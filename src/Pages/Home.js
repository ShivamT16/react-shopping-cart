import { useContext } from "react";
import { Link } from "react-router-dom";
import categories from "../Data/categories.json"
import { ProductContext } from "../Contexts/ProductContext";

export const Home = () => {
  const { handleCategory } = useContext(ProductContext);

  return (
    <div className="flex flex-wrap justify-center items-center gap-16 p-4 bg-[whitesmoke] mt-28 font-cursive">
      {
        categories.category.map((items) => 
        <Link key={items._id} onClick={() => handleCategory(items.category)} to="/category">
         <img className="h-64 w-60 border border-[#24c6dc] rounded-2xl p-4 bg-white" src={items.imageLink} alt={items.category} />
         <p className="p-2 text-xl" > {items.category} </p>
        </Link>)
      }
    </div>
  );
};