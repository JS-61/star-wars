import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = () => {
    return (
        <nav>
            <ul className="fixed top-4 left-12 flex gap-4 bg-white shadow-md px-4 py-2 rounded-md z-50">
                {navItems.map(item => <NavItem itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;