import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useState } from 'react';

const Login = ()=>{
    let history = useNavigate(); 
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const loginhandlechange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value});
    }

    const submitLoginForm=(e)=>{
        e.preventDefault();
        const sentData = {
            email:data.email,
            password: data.password
        }

        console.log(sentData);
        
        axios.post('http://localhost/php/login.php', sentData)
        .then((result)=>{
            console.log(result);
            if(result.status == '404'){
                alert('Invalid User');
            }else{
                // history to push dashboard
                localStorage.setItem('token-info', JSON.stringify(sentData));
                setIsLoggedin(true);
                 history(`/home`);
            }
        })
    }
    return(
        <div className="container go-register">
            <div className="form__container form__container-login"> 
                <form onSubmit={submitLoginForm}>      
                <h3 className="form__heading">Login</h3>
                <div className="field mt-3">
                    <input type="email" name="email" required onChange={loginhandlechange} value={data.email}  />
                    <label  title="Email" ></label>
                </div>
                <div className="field mt-3">
                    <input type="password" name="password" required  id="password" onChange={loginhandlechange} value={data.password} />
                    <label  title="Password" data-title="Password"></label>
                </div>
                <p className="form__text">Forgot your password?</p>
                <button type="submit" className="btn btn--main mt-2" name="login">Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
            <div className="overlay overlay--right">
                <img src="assets/login.png" width="108px" />
                <p className="overlay__desc">Enter your personal details and start journey with us</p>
                <Link to="/register" className="btn btn--main-outline">Sign up</Link>
            </div>
            </div>
        </div>
    )
}

export default Login;