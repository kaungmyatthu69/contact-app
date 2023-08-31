import {AiOutlineContacts} from "react-icons/ai"
import'./navbar.scss'
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <AiOutlineContacts style={{fontSize:'40px'}} />
                <h2>Contact App</h2>
            </div>
            <div>
                <h4>Kaung</h4>
                <h4>kaung@gmail.com</h4>
                <button>Logout</button>
            </div>

        </div>
    );
};

export default Navbar;
