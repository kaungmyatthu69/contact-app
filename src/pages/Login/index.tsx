import "./login.scss"
import Card from "../../components/Card";
import {Link} from "react-router-dom";
import React,{useState} from "react";
interface UserInfo{
    username:string;
    password:string;
}
const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userInfo,setUserInfo] = useState<UserInfo>({
        username:"",
        password:""
    })
    const handleChangeUserName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setUserInfo((prev)=>{
            return {
              ...prev,
                userName:e.target.value
            }
        })

    }
    return (
        <Card>
          <form className='form'>
              <h2>Login Form</h2>
              <div className="form-control">
                  <label>Username</label>
                  <input type="text" onChange={handleChangeUserName} />
              </div>
              <div className="form-control">
                  <label>Password</label>
                  <input type="password"  />
              </div>
              <div>
                  <button type="submit" >Login</button>
              </div>
              <p>
                  Don't have an account ? <Link to="/register">Register</Link>
              </p>
          </form>
        </Card>
    );
};

export default login;
