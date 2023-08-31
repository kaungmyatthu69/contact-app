import {AiOutlineContacts} from "react-icons/ai"
import'./navbar.scss'
import {useEffect, useState} from "react";
const Navbar = () => {
    const [toggleTheme,setTheme] = useState('light');
    const handleClick=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setTheme(e.target.value)
    }
    useEffect(()=>{
        if(toggleTheme === 'dark'){
            document.body.classList.add('dark-mode')
        }else {
            document.body.classList.remove('dark-mode')
        }
    },[toggleTheme,setTheme])
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
                <div>
                    <select onChange={(e)=>handleClick(e)}>
                        <option value="light" >Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
            </div>


        </div>
    );
};

export default Navbar;
