import Card from "../../components/Card";
import {Link} from "react-router-dom";


const Register = () => {
    return (
        <Card>
            <form className='form'>
                <h2>Register Form</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password"  />
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="password"  />
                </div>
                <div>
                    <button type="submit" >Register</button>
                </div>
                <p>
                    Already have an account ? <Link to="/login">Login</Link>
                </p>
            </form>
        </Card>
    );
};

export default Register;
