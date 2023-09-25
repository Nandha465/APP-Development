import { useSelector } from "react-redux";
import Filter from "./Filter";
import MenuNavBar from "../menuNavBar/MenuNavBar";


const Search = () => {
  
  const foundItems = useSelector((state) => state.cart.searchItem);
  const title = "Search";
  
  return( 
    <>
    <MenuNavBar />
    
    <div>
    <Filter key={foundItems} toyItem={foundItems} title={title} />
    </div>
    </>
  );
};

export default Search;
