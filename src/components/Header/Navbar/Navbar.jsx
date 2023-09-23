import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            
            <div className=" flex justify-between items-center py-5 shadow-md px-5">
                <Logo></Logo>
                <ul className=" flex gap-5 font-bold">
                    <li>
                        <NavLink
                        to= "/"
                        className={({ isActive, isPending }) =>
                        isActive ? " text-green-500 underline": isPending ? "pending" : "" }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to= "/favorites"
                        className={({ isActive, isPending }) =>
                        isActive ? " text-green-500 underline": isPending ? "pending" : "" }
                        >Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to= "/login"
                        className={({ isActive, isPending }) =>
                        isActive ? " text-green-500 underline": isPending ? "pending" : "" }
                        >Log In</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;