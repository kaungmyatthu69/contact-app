
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const DefaultLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default DefaultLayout;
