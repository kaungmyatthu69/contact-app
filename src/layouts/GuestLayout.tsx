
import {Outlet} from "react-router-dom";

const GuestLayout = () => {
    return (
        <div>
            Guest Layout
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default GuestLayout;
