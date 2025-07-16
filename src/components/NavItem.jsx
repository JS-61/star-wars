import {useContext} from "react";
import {StarWarsContext} from "../utils/context.jsx";

const NavItem = ({itemTitle}) => {
    const {page} = useContext(StarWarsContext);
    const isActive = page === itemTitle;
    const {changePage} = useContext(StarWarsContext)
    return (
        <li
            onClick={() => changePage(itemTitle)}
            className={`border-2 rounded-md px-3 py-2 cursor-pointer 
  ${isActive ? 'bg-yellow-400 text-black' : 'bg-red-600 text-white'} 
  hover:bg-red-500`}
        >{itemTitle}</li>
    );
};

export default NavItem;